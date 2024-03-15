import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


interface FormData {
    title: string;
    description: string;
}

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
});


const postsRef = collection(db, 'posts');

const CreatePost: React.FC = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        try {
            // Add the form data to Firestore
            await addDoc(postsRef,{
                ...data,
            username: user?.displayName,
            userId: user?.uid,});
            console.log('Data added to Firestore successfully:', data);
        } catch (error) {
            console.error('Error adding document to Firestore:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" {...register('title')} />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" {...register('description')} />
                    {errors.description && <p>{errors.description.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;

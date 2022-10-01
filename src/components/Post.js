import React from "react";
import { data } from "../data";
import {useLoaderData} from 'react-router-dom';
import { CommentForm } from "./CommentForm";

export async function loader({params}) {
    const postData = await data.getSinglePost(params.id);
    return {postData};
}

export const Post = () => {
    const {postData} = useLoaderData();
    const {title, content, comments} = postData.post;
    return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
            <CommentForm />
            <ul>
                {comments && comments.length? 
                comments.map(comment => <li><div>{comment.username}</div><div><p>{comment.content}</p></div></li>)
                : "Add a comment!"}
            </ul>
        </div>
    </div>
    )
}
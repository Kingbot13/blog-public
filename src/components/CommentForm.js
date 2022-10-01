import React from "react";
import {Form} from 'react-router-dom';
import { data } from "../data";

export async function action() {
    await data.addComment();
    
}

export const CommentForm = () => {
    return (
        <Form method="post" id="comment-form">
            <label htmlFor="content">
                Write comment:
                <input type='text' name="content" id="content" />
            </label>
            <button>Submit</button>
        </Form>
    )
}
import React from "react";
import {Form} from 'react-router-dom';

export const CommentForm = () => {
    return (
        <Form method="post">
            <label htmlFor="content">
                Write comment:
                <input type='text' name="content" id="content" />
            </label>
            <button>Submit</button>
        </Form>
    )
}
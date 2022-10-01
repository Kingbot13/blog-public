import React from "react";
import { Form } from "react-router-dom";
import { data } from "../data";
import {redirect} from 'react-router-dom';

export async function action() {
  await data.signUp();
  return redirect('/');
}

export const SignUp = () => {
  return (
    <Form method="post" id="sign-up-form">
      <label htmlFor="username">
        Email:
        <input type="email" name="username" id="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input type="password" name="confirmPassword" id="confirmPassword" />
      </label>
      <label htmlFor="firstName">
        First Name:
        <input type="text" name="firstName" id="firstName" />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input type="text" name="lastName" id="lastName" />
      </label>
      <button>Sign up</button>
    </Form>
  );
};

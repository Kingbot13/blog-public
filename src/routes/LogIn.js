import React from "react";
import { Form, redirect } from "react-router-dom";
import { data } from "../data";

export async function action() {
  await data.logIn();
}

export const LogIn = () => {
  return (
    <Form method="post" id="log-in-form">
      <label htmlFor="username">
        Email:
        <input type="email" name="username" id="username" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" id="password" />
      </label>
      <button>Log in</button>
    </Form>
  );
};

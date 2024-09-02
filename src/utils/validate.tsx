import { ObjectProps } from "../types";

export const validate = (
  name: string,
  values: ObjectProps
): ObjectProps | undefined => {
  let error: ObjectProps | undefined = {};
  //   name: "organizationalName",
  switch (name) {
    case "firstName":
      if (!values[name]) {
        error[name] = "First name is required";
      } else if (values[name].length < 3 || values[name].length > 50) {
        error[name] = "First name must be between 3 and 50 characters";
      } else if (!/^[a-zA-Z]+$/.test(values[name])) {
        error[name] = "Only alphabets are allowed";
      }
      break;
    case "lastName":
      if (!values[name]) {
        error[name] = "Last name is required";
      } else if (values[name].length < 3 || values[name].length > 50) {
        error[name] = "Last name must be between 3 and 50 characters";
      } else if (!/^[a-zA-Z]+$/.test(values[name])) {
        error[name] = "Only alphabets are allowed";
      }
      break;
    case "email":
      if (!values[name]) {
        error[name] = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values[name])) {
        error[name] = "Email must be a valid email address";
      }
      break;
    case "phone":
      if (!values[name]) {
        error[name] = "Phone number is required";
      } else if (values[name].length < 10 || values[name].length > 25) {
        error[name] = "Phone number  must be between 10 and 25 characters";
      } else if (
        !/\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g.test(
          values[name]
        )
      ) {
        error[name] = "Phone number must be in this formart: +1994012335";
      }
      break;
    case "password":
      if (!values[name]) {
        error[name] = "Password is required";
      } else if (values[name].length < 8) {
        error[name] = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(values[name])) {
        error[name] = "Password must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(values[name])) {
        error[name] = "Password must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(values[name])) {
        error[name] = "Password must contain at least one number";
      } else if (!/[^A-Za-z0-9]/.test(values[name])) {
        error[name] = "Password must contain at least one special character";
      }
      break;
    case "passwordConfirm":
      if (!values[name]) {
        error[name] = "Password confirmation is required";
      } else if (values[name] !== values.password) {
        error[name] = "Passwords must match";
      }
      break;
    case "oldPassword":
      if (!values[name]) {
        error[name] = "Old password is required";
      } else if (values[name] === values.password) {
        error[name] = "Old password must not match new password";
      }
      break;
    case "organizationalName":
      if (!values[name]) {
        error[name] = "Organization name is required";
      } else if (values[name].length < 3 || values[name].length > 50) {
        error[name] = "Organization  name must be between 3 and 50 characters";
      } else if (!/^[a-zA-Z]+$/.test(values[name])) {
        error[name] = "Only alphabets are allowed";
      }
      break;
    default:
      break;
  }
  return error;
};

import * as Yup from "yup";

const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
const onlyPhone = /^\d{3}-\d{2,3}-\d{2,4}$/;
const onlyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const applySchema = Yup.object().shape({
  name: Yup.string()
    .required("Field name is required")
    .matches(onlyLetters, "The name cannot contain numbers!")
    .min(3, "The name must be longer than 3 symbols!")
    .max(50, "Maximum 50 symbols"),
  number: Yup.string()
    .required("Field number is required")
    .matches(
      onlyPhone,
      "Please enter your phone number in the format 000-00-00 or 000-000-0000"
    )
    .min(8, "The phone number must be longer than 8 symbols!")
    .max(12, "Maximum 12 symbols"),
});

export const usersLogin = Yup.object().shape({
  email: Yup.string()
    .matches(onlyEmail, "Invalid email format")
    .email("Invalid email format")
    .required("Field email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Field password is required"),
});

export const usersRegister = Yup.object().shape({
  name: Yup.string()
    .required("Field name is required")
    .matches(onlyLetters, "The name cannot contain numbers!")
    .min(3, "The name must be longer than 3 symbols!")
    .max(50, "Maximum 50 symbols"),
  email: Yup.string()
    .matches(onlyEmail, "Invalid email format")
    .email("Invalid email format")
    .required("Field email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Field password is required"),
});

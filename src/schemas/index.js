import * as yup from "yup";

export const Schema = yup.object().shape({
   name: yup.string().required("Required"),
   email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Required"),
   subject: yup.string(),
   message: yup.string().required("Required"),
});

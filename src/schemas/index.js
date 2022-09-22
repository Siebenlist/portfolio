import * as yup from "yup";

export const Schema = yup.object().shape({
   name: yup.string().required("Please enter a Name."),
   email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Please enter an email."),
   subject: yup.string(),
   message: yup.string().required("Please enter a message."),
});

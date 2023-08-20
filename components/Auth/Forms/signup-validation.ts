import * as yup from "yup";

export default yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  username: yup.string().required("Please enter your username"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter an email adress"),
  password: yup.string().required("Please enter a password"),
});

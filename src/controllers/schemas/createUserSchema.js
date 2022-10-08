import yup from "yup";

const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obligatorio.")
    .email("Ingresa un email válido."),
  role: yup.string().required("Rol obligatorio."),
});

export default createUserSchema;

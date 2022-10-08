import yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("El email es obligatorio.")
    .email("Ingresa un email válido."),
  password: yup
    .string()
    .required("La contraseña es obligatoria.")
    .min(8, "La contraseña tener al menos 8 caracteres."),
});

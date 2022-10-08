import yup from "yup";

const updateUserSchema = yup.object().shape({
  name: yup.string(),
  lastName: yup.string(),
  surname: yup.string(),
  lastSname: yup.string(),
  birthDate: yup.string(),
  phone: yup.string(),
  email: yup.string().email("Ingresa un email válido."),
});

export default updateUserSchema;

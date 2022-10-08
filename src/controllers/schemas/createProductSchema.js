import yup from "yup";

const createProductSchema = yup.object().shape({
  name: yup.string().required("Nombre obligatorio."),
  quantity: yup.string().required("Cantidad obligatoria."),
  category: yup.string().required("Categoria obligatoria."),
});

export default createProductSchema;

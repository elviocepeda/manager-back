import yup from "yup";

const updateProductSchema = yup.object().shape({
  name: yup.string().required("Nombre obligatorio."),
  quantity: yup.string().required("Cantidad obligatoria."),
  category: yup.string().required("Categoria obligatoria."),
});

export default updateProductSchema;

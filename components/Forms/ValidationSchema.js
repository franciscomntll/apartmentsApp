import * as Yup from "yup";

export const initialValues = {
  agencia: "",
  propietario: "",
  categoria: "",
  fechaIncorporacion: "",
  calle: "",
  numero: "",
  piso: "",
  apartamento: "",
  torre: "",
  entreCalle1: "",
  entreCalle2: "",
  ciudad: "",
  codigoPostal: "",
  telefono: "",
  codigoContestador: "",
  claveContestador: "",
  encargado: "",
  telefonoEncargado: "",
  superficie: "",
  capacidad: "",
  ambientes: "",
  camas: "",
  mascotas: false,
  comentarios: ""
};

Yup.setLocale({
  mixed: {
    required: ({ path }) => `Campo requerido`,
  },
});


export const validationSchema = Yup.object().shape({
  //Form General
  agencia: Yup.string().required(),
  propietario: Yup.string().required(),
  categoria: Yup.string().required(),
  fechaIncorporacion: Yup.date().required(),

  //Form Ubicacion
  calle: Yup.string().required(),
  numero: Yup.number().required(),
  piso: Yup.number().required(),
  apartamento: Yup.number().required(),
  torre: Yup.string().required(),
  entreCalle1: Yup.string().required(),
  entreCalle2: Yup.string().required(),
  ciudad: Yup.string().required(),
  codigoPostal: Yup.number().required(),
  estadiaMinima: Yup.number().required(),
  estadiaMaxima: Yup.number().required(),
  semanaPropietario: Yup.number().required(),
  quincenaPropietario: Yup.number().required(),
  mensualPropietario: Yup.number().required(),
  semanaRenta: Yup.number().required(),
  quincenaRenta: Yup.number().required(),
  mensualRenta: Yup.number().required(),

  //Form Ubicacion
  telefono: Yup.number()
    .required()
    .test(
      "len",
      "Debe ser de 11 digitos",
      (val) => val?.toString().length === 11
    ),
  codigoContestador: Yup.string().required(),
  claveContestador: Yup.string().required(),
  encargado: Yup.string().required(),
  telefonoEncargado: Yup.number()
    .required()
    .test(
      "len",
      "Debe ser de 11 digitos",
      (val) => val?.toString().length === 11
    ),

  //Form InfoTecnica
  superficie: Yup.number().required(),
  capacidad: Yup.number().required(),
  ambientes: Yup.number().required(),
  camas: Yup.number().required(),
  mascotas: Yup.boolean().required(),

  // Form Precios
  estadiaMinima: Yup.number().required(),
  estadiaMaxima: Yup.number().required(),
  semanaPropietario: Yup.number().required(),
  quincenaPropietario: Yup.number().required(),
  mensualPropietario: Yup.number().required(),
  semanaRenta: Yup.number().required(),
  quincenaRenta: Yup.number().required(),
  mensualRenta: Yup.number().required(),

  // Form Comentarios
  comentarios: Yup.string().notRequired(),
});

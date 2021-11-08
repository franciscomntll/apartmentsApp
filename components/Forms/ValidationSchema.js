import * as Yup from "yup";

export const initialValues = {
  agency: {
    id: "",
    title: "",
  },
  owner: {
    id: "",
    title: "",
  },
  category: {
    id: "",
    title: "",
  },
  incorporationDate: "",
  address: {
    street: "",
    number: "",
    floor: "",
    apartment: "",
    tower: "",
    between1: "",
    between2: "",
    city: "",
    postalCode: "",
  },
  phonenumber: "",
  codigoContestador: "",
  claveContestador: "",
  manager: "",
  managerPhone: "",
  technicalData: {
    area: "",
    capacity: "",
    enviroments: "",
    bedrooms: "",
    beds: "",
  },
  petsAllowed: false,
  stayAndPrice: {
    minimumStay: "",
    maximumStay: "",
    weekPriceProp: "",
    halfMonthPriceProp: "",
    monthlyPriceProp : "",
    weekPriceRent: "",
    halfMonthPriceRent: "",
    monthlyPriceRent:""
  },
  internalComments: "",
};

Yup.setLocale({
  mixed: {
    required: ({ path }) => `Campo requerido`,
  },
});

export const validationSchema = Yup.object().shape({
  //Form General
  agency: Yup.object().shape({
    id: Yup.string(),
    title: Yup.string().required(),
  }),
  owner: Yup.object().shape({
    id: Yup.number(),
    title: Yup.string().required(),
  }),
  category: Yup.object().shape({
    id: Yup.number(),
    title: Yup.string().required(),
  }),
  incorporationDate: Yup.date().required(),

  //Form Ubicacion
  address: Yup.object().shape({
    street: Yup.string().required(),
    number: Yup.number(),
    floor: Yup.number(),
    apartment: Yup.number(),
    tower: Yup.string(),
    between1: Yup.string(),
    between2: Yup.string(),
    city: Yup.string(),
    postalCode: Yup.number(),
  }),

  //Form Ubicacion
  phonenumber: Yup.number()
    .required()
    .test(
      "len",
      "Debe ser de 11 digitos",
      (val) => val?.toString().length === 11
    ),
  codigoContestador: Yup.string().required(),
  claveContestador: Yup.string().required(),
  manager: Yup.string().required(),
  managerPhone: Yup.number()
    .required()
    .test(
      "len",
      "Debe ser de 11 digitos",
      (val) => val?.toString().length === 11
    ),

  //Form InfoTecnica
  technicalData: Yup.object().shape({
    area: Yup.number().required(),
    capacity: Yup.number().required(),
    enviroments: Yup.number().required(),
    bedrooms: Yup.number().required(),
    beds: Yup.number().required(),
  }),
  petsAllowed: Yup.boolean().required(),

  // Form Precios
  stayAndPrice: Yup.object().shape({
    minimumStay: Yup.number().required(),
    maximumStay: Yup.number().required(),
    weekPriceProp: Yup.number().required(),
    halfMonthPriceProp: Yup.number().required(),
    monthlyPriceProp: Yup.number().required(),
    weekPriceRent: Yup.number().required(),
    halfMonthPriceRent: Yup.number().required(),
    monthlyPriceRent: Yup.number().required(),
  }),

  // Form Comentarios
  amenities: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      title: Yup.string().required(),
    })
  ).notRequired(),
  neighbourhoods: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      title: Yup.string().required(),
    })
  ).notRequired(),
  proximities: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      title: Yup.string().required(),
    })
  ).notRequired(),
  utilities: Yup.array().of(
    Yup.object().shape({
      id: Yup.number(),
      title: Yup.string().required(),
    })
  ).notRequired(),
  internalComments: Yup.string().notRequired(),
});

import { Formik, Form } from 'formik'
import React from 'react'
import DatePicker from './DatePicker'
import InputField from './InputField'
import SelectField from './SelectField'

const initialValues = {
    agencia: "",
    propietario: "",
    orientacion : "",
    fechaIncorporacion : ""
}

const FormGeneral = () => {
    const list = [
        {title: "Hola"},
        {title: "Mundo"},
    ]
    return (
        <>
            <SelectField list={list} label={"Agencia"} name={"agencia"}  />
            <SelectField list={list} label={"Propietario"} name={"propietario"}  />
            <SelectField list={list} label={"Categoria"} name={"categoria"}  />
            <DatePicker name="fechaIncorporacion" label={"Fecha de incorporación"}/>
        </>
    )
}

export default FormGeneral

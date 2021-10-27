import React from 'react'
import { SelectField, DatePicker} from '../Inputs'

export const FormGeneral = () => {
    const options = [
        {title: "Hola"},
        {title: "Mundo"},
    ]
    return (
        <>
            <SelectField options={options} label={"Agencia"} name={"agencia"}  />
            <SelectField options={options} label={"Propietario"} name={"propietario"}  />
            <SelectField options={options} label={"Categoria"} name={"categoria"}  />
            <DatePicker label={"Fecha de incorporación"} name="fechaIncorporacion"/>
        </>
    )
}


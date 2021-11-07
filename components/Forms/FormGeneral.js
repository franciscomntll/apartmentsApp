import React, { memo, useEffect, useState } from 'react'
import api from '../../api'
import { SelectField, DatePicker} from '../Inputs'

export const FormGeneral = memo(() => {
    const options = [
        {title: "Hola"},
        {title: "Mundo"},
    ]
    return (
        <>
            <AgencyInput />
            <PropietarioInput />
            <CategoriesInput />
            <DatePicker label={"Fecha de incorporación"} name="incorporationDate"/>
        </>
    )
});


const AgencyInput = () => {
    const [agencies, setAgencies] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.fetchAgencies()
        .then(({data}) => {
            setAgencies(data.map(item => ({title: item.description, id: item.id})))
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])
    return (
        <SelectField options={agencies} label={"Agencia"} name={"agency"} loading={loading} />
    )
}


 const PropietarioInput = () => {
    const [owners, setOwner] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.fetchOwners()
        .then(({data}) => {
            setOwner(data.map(item => ({title: `${item.name} ${item.lastname}`, id: item.id})))
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])
    return (
        <SelectField options={owners} label={"Propietario"} name={"owner"} loading={loading}  />
    )
}

 const CategoriesInput = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.fetchCategories()
        .then(({data}) => {
            setCategories(data.map(item => ({title: item.name, id: item.id})))
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [])
    return (
        <SelectField options={categories} label={"Categoria"} name={"category"} loading={loading}  />
    )
}

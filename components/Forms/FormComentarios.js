import CheckBox from "../Inputs/CheckBox";
import { TextAreaField } from "../Inputs/TextAreaField";
import { FieldArray } from "formik";
import {memo, useEffect, useState} from 'react'
import api from "../../api";

export const FormComentarios = () => {
  const [amenities, setAmenities] = useState([])
  const [Neighbourhoods, setNeighbourhoods] = useState([])
  const [Proximities, setProximities] = useState([])
  const [Utilities, setUtilities] = useState([])

  useEffect(() => {
    const params = {sortColumn: "name", ascend: true}
    api.fetchAmenities(params)
    .then(({data}) => {
      setAmenities(data.data)
    })
    .catch(err => console.log(err))
    
    api.fetchNeighbourhoods(params)
    .then(({data}) => setNeighbourhoods(data.data))
    .catch(err => console.log(err))
    
    api.fetchProximities(params)
    .then(({data}) => setProximities(data.data))
    .catch(err => console.log(err))
    
    api.fetchUtilities(params)
    .then(({data}) => setUtilities(data.data))
    .catch(err => console.log(err))
    
  }, [])

  return (
    <>
      <FeaturesComponent title={"Comodidades"} name={"amenities"} FeaturesList={amenities} />
      <FeaturesComponent title={"Barrios"} name={"neighbourhoods"} FeaturesList={Neighbourhoods} />
      <FeaturesComponent
        name={"proximities"}
        title={"Proximidades"}
        FeaturesList={Proximities}
      />
      <FeaturesComponent title={"Utilidades"} name={"utilities"} FeaturesList={Utilities} />
        <TextAreaField name={"internalComments"} label={"Comentarios"} />
    </>
  );
};

const FeaturesComponent = memo(({ title, name, FeaturesList = [] }) => {
  return (
    <FieldArray name={name}>
      {({ insert, remove, push }) => (
        <div className="p-3 w-full h-60">
          <h2 className="text-base font-bold text-sm">{title}</h2>
          <div className="grid w-full gap-8 py-4 sm:grid-cols-2 md:grid-cols-3 max-h-40 overflow-auto pt-2 px-5  ">
            {FeaturesList.length > 1 ? (
              FeaturesList?.map((item, idx) => (
                <CheckBox
                  key={idx}
                  name={item.name}
                  label={item.name}
                  onChange={(e) =>
                    e.target.checked ? push({id: item.id, title: item.name}) : remove({id: item.id, title: item.name})
                  }
                />
              ))
            ) : (
              <>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              <SkeletonFeature/>
              </>
            )}
          
          </div>
        </div>
      )}
    </FieldArray>
  );
});




const SkeletonFeature = () => {
  return (
    <>
    <div className="flex items-center gap-2 w-full skeleton">
      <div className="w-6 h-6 rounded-full bg-gray-200 "/>
      <div className="w-4/5 h-3  bg-gray-200 "/>
    </div>
    <style jsx>
        {`
          .skeleton {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
      
    </>
  )
}

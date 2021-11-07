import {InputField} from "../Inputs";

export const FormPrecios = () => {
  return (
    <>
      <InputField
        label={"Estadia minima"}
        name={"stayAndPrice.minimumStay"}
        type={"number"}
        autoComplete={"off"}
        autoFocus
      />

      <InputField
        label={"Estadia maxima"}
        name={"stayAndPrice.maximumStay"}
        type={"number"}
        autoComplete={"off"}
      />

      <InputField
        label={"Precio semana propietario"}
        name={"stayAndPrice.weekPriceProp"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />

      <InputField
        label={"Precio quincena propietario"}
        name={"stayAndPrice.halfMonthPriceProp"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio mensual propietario"}
        name={"stayAndPrice.monthlyPriceProp"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio semana renta"}
        name={"stayAndPrice.weekPriceRent"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio quincena renta"}
        name={"stayAndPrice.halfMonthPriceRent"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
      <InputField
        label={"Precio mensual renta"}
        name={"stayAndPrice.monthlyPriceRent"}
        type={"number"}
        autoComplete={"off"}
        step={".01"}
      />
    </>
  );
};


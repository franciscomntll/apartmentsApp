import { useEffect, useState } from "react";

const PanelComponent = () => {
    const [ReadySteps, setSteps] = useState([]);
  return (
    <div className="mx-auto max-w-screen-lg inset-x-0 p-12 ">
      <StepToStepComponent />
    </div>
  );
};

export default PanelComponent;

const Step = ({ title, phase, state }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(state);
  }, [state]);
  return (
    <div
      className={`flex flex-col relative items-center w-max relative rounded-full  z-20 ${
        isActive ? "text-white bg-purple-500" : "text-purple-500 bg-white"
      }`}
    >
      <div className="rounded-full relative border-2 border-purple-500 w-12 h-12 flex items-center justify-center">
        <p className="text-lg font-bold">{phase}</p>
      </div>
      <p className="text-xs  font-medium absolute w-max text-center bottom-0 transform translate-y-full pt-1 text-purple-500">
        {title}
      </p>
    </div>
  );
};

const StepToStepComponent = () => {
  const [ReadySteps, setSteps] = useState([{ title: "General" }]);
  const ValidationSteps = (item) => {
    return (
      ReadySteps.findIndex(
        (el) => el.title.toLowerCase() == item.title.toLowerCase()
      ) >= 0
    );
  };

  const Steps = [
    { title: "General" },
    { title: "Ubicación" },
    { title: "Comunicación" },
    { title: "Info Tecnica" },
    { title: "Precios" },
    { title: "Comentarios" },
    { title: "Caracteristicas" },
  ];
  return (
    <div className="flex justify-between w-full relative">
      {Steps.map((item, idx) => {
        console.log(item.title);
        console.log(ValidationSteps(item));
        return (
          <Step
            key={idx}
            state={ValidationSteps(item)}
            phase={idx + 1}
            title={item.title}
          />
        );
      })}
      <span  className="w-full absolute h-1.5 bg-purple-200 inset-y-0 my-auto z-10 border rounded-lg overflow-hidden">
        <svg className="bg-purple-500" width="100%" />
      </span>
    </div>
  );
};

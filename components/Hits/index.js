import CardComponent from "./CardComponent";

const Hits = ({ data }) => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-12">
      {data.map((item, idx) => (
        <CardComponent key={idx} data={item} />
      ))}
    </div>
  );
};

export default Hits;

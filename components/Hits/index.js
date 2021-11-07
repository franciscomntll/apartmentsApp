import CardComponent from "./CardComponent";
import SkeletonCard from "./SkeletonCard";

const Hits = ({ data, loading }) => {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-12">
      {!loading ? (
        data.length >= 1 ? (
          data.map((item, idx) => (
            <CardComponent key={idx} data={item} />
          ))
        ) : (
          <p className="text-gray-700 w-full text-center py-20 lg:col-span-3 md:col-span-2">
            No se han encontrado resultados para tu búsqueda
          </p>
        )
      ) : (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
    </div>
  );
};

export default Hits;

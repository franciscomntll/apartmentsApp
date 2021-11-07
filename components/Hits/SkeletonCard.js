const SkeletonCard = () => {
  const Features = [0, 1, 2, 3];
  return (
    <>
      <div className="w-full rounded-2xl overflow-hidden shadow-md bg-white flex flex-col skeleton">
        {/* Cabecera || Propietario */}
        <div className="flex items-center justify-center gap-2 py-2 px-4 ">
          <div className="rounded-full w-8 h-8 bg-gray-300 object-cover objec-center" />
          <div className="bg-gray-300 w-3/4 h-4" />
        </div>

        {/* Imagen */}
        <div className="w-full h-72 relative bg-gray-300" />

        <div className="">
          <div className="flex flex-col px-5 pt-5 gap-3">
            <div className="h-4 bg-gray-300 w-1/2" />
            <div className="h-3 bg-gray-300 w-3/4" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 pt-4 pb-4 gap-3 w-full px-5">
            {Features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="bg-gray-300 w-5 h-5" />
                <div className="bg-gray-300 w-full h-2" />
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="bg-indigo-600 w-full h-12" />
        </div>
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
  );
};

export default SkeletonCard;

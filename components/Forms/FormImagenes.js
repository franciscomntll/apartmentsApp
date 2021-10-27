import { memo, useCallback, useState } from "react";
import { StarIcon, UploadIcon } from "../icons";

export const FormImagenes = ({ setImagePrincipal }) => {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    let files = e.target.files;
    Object.values(files).forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImages((old) => [
          ...old,
          { file: file, image: reader.result, principal: false },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleClick = useCallback((item) => {
    setImages((old) => {
      old.map((el) => {
        if (el.file.lastModified !== item.file.lastModified) {
          el.principal = false;
        } else {
          item.principal = true;
        }
      });

      return old;
    });
    setImagePrincipal(item);
  });
  return (
    <div className="w-full col-span-2 grid grid-cols-2 md:grid-cols-6 gap-6">
      <UploadComponent onChange={handleChange} />
      {images.map((item, idx) => (
        <ImageComponent
          key={idx}
          image={item}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
};

const UploadComponent = (props) => {
  return (
    <label htmlFor={"hola"} className="w-max">
      <div className="w-full rounded-xl border-2 border-gray-200 h-32 w-32 text-gray-400 hover:text-gray-600 flex items-center justify-center cursor-pointer bg-white shadow-md transition overflow-hidden">
        <UploadIcon className="w-8 h-8" />
      </div>
      <input
        id={"hola"}
        className="hidden"
        type={"file"}
        accept={"image/*"}
        multiple
        {...props}
      />
    </label>
  );
};

const ImageComponent = memo(({ image, ...props }) => {
  return (
    <picture
      className="rounded-xl border-2 border-gray-200 h-32 w-32 text-gray-400 hover:text-gray-600 flex items-center justify-center cursor-pointer bg-white shadow-md transition overflow-hidden relative"
      {...props}
    >
      <img
        src={image.image}
        className="object-cover object-center absolute top-0 left-0 w-full h-full"
      />
      {image.principal && (
        <StarIcon className="absolute top-2 right-2 w-5 h-5 text-yellow-300" />
      )}
    </picture>
  );
});

"use client";
import { useState } from "react";
import Image from "next/image";

const ProductPics = ({ images = [] }) => {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div>
      {/* Stort billede styres af state */}
      <Image
        src={activeImg}
        alt="Produktbillede"
        width={600}
        height={200}
        className="-mb-14"
      />
      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-2 ">
        {images.map((img, index) => (
          <button
            className="bg-white!"
            key={index}
            onClick={() => setActiveImg(img)}
          >
            <Image
              src={img}
              alt="Thumbnail"
              width={150}
              height={100}
              className="rounded-2xl cursor-pointer "
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPics;

import Image from "next/image";

const ProductPics = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Image
        loading="eager"
        alt={product.title}
        src={product.thumbnail}
        width={300}
        height={200}
        className="rounded-2xl"
      />
      <Image
        loading="eager"
        alt={product.title}
        src={product.thumbnail}
        width={300}
        height={200}
        className="rounded-2xl"
      />
      <Image
        loading="eager"
        alt={product.title}
        src={product.thumbnail}
        width={300}
        height={200}
        className="rounded-2xl"
      />
    </div>
  );
};

export default ProductPics;

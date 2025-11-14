import Image from "next/image";

const ProductView = () => {
  return (
    <section className="grid grid-cols-2 gap-16  ">
      <div className="grid gap-3">
        <Image
          loading="eager"
          alt={product.title}
          src={product.thumbnail}
          width={400}
          height={200}
          className="rounded-2xl"
        />
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
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ProductView;

import Image from "next/image";

const ProductView = () => {
  return (
    <section className="grid grid-cols-2 gap-16  ">
      <div className="grid gap-3">
        <Image
          loading="eager"
          alt="gobibjoern.png"
          src="/gobibjoern.png"
          width={400}
          height={200}
          className="rounded-2xl"
        />
        <div className="grid grid-cols-3 gap-3">
          <Image
            loading="eager"
            alt="gobibjoern.png"
            src="/gobibjoern.png"
            width={300}
            height={200}
            className="rounded-2xl"
          />
          <Image
            loading="eager"
            alt="gobibjoern.png"
            src="/gobibjoern.png"
            width={300}
            height={200}
            className="rounded-2xl"
          />
          <Image
            loading="eager"
            alt="gobibjoern.png"
            src="/gobibjoern.png"
            width={300}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div>
        <h2>Gobi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          soluta consectetur provident quam, quos hic obcaecati, laboriosam
          repellendus ipsam veritatis ullam tempora, nemo facere voluptatum
          culpa consequatur exercitationem praesentium corporis!
        </p>
      </div>
    </section>
  );
};

export default ProductView;

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <Image
        loading="eager"
        alt="Hero image"
        src="/hero-image.jpg"
        width={1920}
        height={1080}
        className="col-start-1 col-end-3 row-start-1 row-end-2 w-full h-full object-cover"
      />
      <div className="col-start-1 col-end-2 row-start-1 z-10 place-self-center">
        <h1 className="mb-4">Simpel Shop</h1>
        <Link href="/products">
          <button className="px-6 py-3 rounded-lg cursor-pointer  hover:bg-black! hover:text-white">
            Se produkter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

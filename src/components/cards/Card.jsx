import Image from "next/image";
import CardButton from "@/components/ui/CardButton";
import Link from "next/link";

const Card = () => {
  return (
    <div className="pb-2 m-3">
      <div className="grid">
        <div className="z-10 col-start-1 row-start-1 m-4 ">
          <div className="items-center gap-2 rounded-2xl px-3 py-2 place-content-end">
            <p className="text-sm font-medium text-cyan-500 drop-shadow-md">
              Low stock
            </p>
          </div>
        </div>

        <Image
          loading="eager"
          alt="gobibjoern.png"
          src="/gobibjoern.png"
          width={400}
          height={200}
          className="col-start-1 row-start-1 rounded-2xl"
        />
      </div>
      <Link href="/products/hej">
        <h1 className="py-2">Gobibjørn</h1>
      <CardButton />
      </Link>
    </div>
  );
};

export default Card;

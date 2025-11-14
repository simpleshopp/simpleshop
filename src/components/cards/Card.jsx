import Image from "next/image";
import CardButton from "../ui/CardButton"; 

const Card = () => {
  return (
    <div>
      <Image
        loading="eager"
        alt="gobibjoern.png"
        src="/gobibjoern.png"
        width={300}
        height={200}
        className="rounded-2xl"
      />
      <h2>Gobibjørn</h2>
      <CardButton />
    </div>
  );
};

export default Card;

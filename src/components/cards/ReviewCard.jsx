import { AiOutlineStar } from "react-icons/ai";
const ReviewCard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-80 p-4 rounded-lg">
        <h3>Bruger 1</h3>
        <AiOutlineStar size={20} />
        <p className=" text-center">"Dette produkt er fantastisk og bare helt vildt fedt! Jeg elsker det virkeligt"</p>
      </div>
    </>
  );
};

export default ReviewCard;

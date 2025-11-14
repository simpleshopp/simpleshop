import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const ReviewCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-4 w-80 p-4 rounded-lg">
      <h3>{product.reviewerName}</h3>
      <div className="flex">
        {/* Mapper over 5 stjerner: */}
        {/* Jeg laver et tomt array med 5 elementer [...Array(5)] */}
        {/*  _ bruges som "tom plads" for elementet og index som index */}
        {/* _ bruges i .map når kun indexet skal bruges, ikke elementet. */}
        {[...Array(5)].map((_, index) =>
        // Hvis indexet (idx) er mindre end rating, vises en fyldt stjerne.
        // Ellers vises en tom (outline) stjerne.
          index < product.rating ? (
            <AiFillStar key={index} size={20} className="text-yellow-400" />
          ) : (
            <AiOutlineStar key={index} size={20} className="text-yellow-400" />
          ),
        )}
      </div>
      <p>{product.comment}</p>
    </div>
  );
};

export default ReviewCard;

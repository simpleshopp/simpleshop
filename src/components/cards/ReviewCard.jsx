import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const ReviewCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex flex-col gap-2 w-40 p-3 rounded-2xl bg-white shadow-sm text-left"
    >
      <h3 className="font-semibold text-lg text-gray-900 shrink-0">
        {product.reviewerName}
      </h3>

      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) =>
          index < product.rating ? (
            <AiFillStar key={index} size={20} className="text-yellow-400" />
          ) : (
            <AiOutlineStar key={index} size={20} className="text-yellow-400" />
          ),
        )}
        <span className="ml-2 text-sm text-gray-400">{product.rating}/5</span>
      </div>

      <p className="text-gray-400">{product.comment}</p>
    </div>
  );
};

export default ReviewCard;

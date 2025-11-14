import { AiOutlineStar } from "react-icons/ai";
const ReviewCard = ({review}) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-80 p-4 rounded-lg">
        <h3>{review.reviewerName}</h3>
        <AiOutlineStar size={20} />
        <p className=" text-center">{review.comment}
        </p>
      </div>
    </>
  );
};

export default ReviewCard;

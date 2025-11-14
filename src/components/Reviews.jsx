import ReviewCard from "./cards/ReviewCard";


const Reviews = () => {
  return (
    <div className=" px-26">
      <div className="h-px w-4/5 bg-gray-300 my-4 mx-auto"></div>{" "}
      {/* Når stregens bredde er mindre en 100% (fx. w-4/5 80%) vil mx-auto automatisk fordele den resterende plads på begge sider af elementet */}
      <h2>Reviews: </h2>
      <div className="flex gap-8 justify-center py-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;

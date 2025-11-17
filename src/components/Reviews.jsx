import ReviewCard from "./cards/ReviewCard";
import ReviewStars from "./ReviewStars";

const Reviews = async ({ productId }) => {
  "use server";
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const { reviews = [] } = await response.json();

  // Beregning af gennemsnit for ratings:

  //1: lægger alle ratings fra reviews-arrayet sammen.
  //    Reduce starter med 0 og lægger hver review.rating til.
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  //2: beregner gennemsnittet af ratings (hvis der er reviews)
  const averageRating = reviews.length ? totalRating / reviews.length : 0;
  //3: runder gennemsnittet ned til nærmeste hele tal for antal stjerner
  const filledStars = Math.floor(averageRating);

  return (
    <div className="mb-8 ">
      <div className="h-px bg-gray-300 my-4 "></div>
      <h2 className="">
        Reviews:{" "}
        <ReviewStars filledStars={filledStars} averageRating={averageRating} />
      </h2>
      <div className="flex gap-8 justify-center py-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} product={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

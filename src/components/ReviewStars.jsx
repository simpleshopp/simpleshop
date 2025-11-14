"use client";
import { AiFillStar } from "react-icons/ai"; 

const ReviewStars = ({ filledStars, averageRating }) => (
  <span>
    {/* Laver et array med længde = antal fyldte stjerner og mapper over det */}
    {Array.from({ length: filledStars }).map((_, index) => (
      // Viser et fyldt stjerne-ikon for hver stjerne
      <AiFillStar key={index} className="inline text-yellow-500" />
    ))}
    {/* Viser gennemsnittet af ratings med 1 decimal i parentes */}(
    {averageRating.toFixed(1)})
  </span>
);

export default ReviewStars;

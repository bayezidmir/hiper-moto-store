import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-12 container mx-auto ">
      <div className="mb-8">
        <p className="text-3xl font-semibold mb-3">Our Client's Feedback</p>
        <hr />
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid=cols-1 gap-3">
        {reviews.map((review) => (
          <Review key={review.id} reviewData={review} />
        ))}
      </div>
      <div className="text-right mt-3 ">
        <button class="btn btn-sm btn-outline btn-warning">
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;

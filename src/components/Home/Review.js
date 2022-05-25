import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const Review = ({ reviewData }) => {
  const { picture, name, rating, review } = reviewData;
  const fullStar = (
    <>
      <FontAwesomeIcon icon={faStar} className="text-white" />
    </>
  );
  return (
    <div class="card lg:max-w-full bg-orange-300 text-primary-content p-3">
      <div class="avatar justify-center ">
        <div class="w-24 rounded-full ring ring-warning ring-offset-orange-100 ring-offset-2">
          <img src={picture} alt="" />
        </div>
      </div>
      <div class="card-body text-center">
        <h2 class="text-center font-bold text-xl">{name}</h2>
        <hr />
        <p>{review}</p>
        <p>
          {" "}
          Rating:{" "}
          {rating === 5 ? (
            <>
              <FontAwesomeIcon icon={faStar} className="text-white" /> {rating}
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faStarHalf} className="text-white" />{" "}
              {rating}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Review;

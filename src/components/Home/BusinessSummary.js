import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAsia,
  faTruck,
  faPeopleGroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="mt-10 bg-orange-100 p-5 rounded">
      <h1 className="text-3xl text-center font-semibold">Our Achievements</h1>
      <h1 className="text-2xl text-center">In a Glimpse</h1>
      <div className="flex justify-around mt-10">
        <div className="text-center">
          <FontAwesomeIcon
            icon={faTruck}
            size="4x"
            transform={{ rotate: 10 }}
            className="text-neutral mb-7"
          />
          <p className="text-xl font-semibold">1125620+</p>
          <p className="text-xl font-semibold">Products Delivered</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faEarthAsia}
            size="4x"
            className="text-neutral mb-7"
          />
          <p className="text-xl font-semibold">53</p>
          <p className="text-xl font-semibold">Countries</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            size="4x"
            className="text-neutral mb-7"
            transform={{ rotate: 10 }}
          />
          <p className="text-xl font-semibold">900+</p>
          <p className="text-xl font-semibold">Happy Customers</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="4x"
            className="text-neutral mb-7"
          />
          <p className="text-xl font-semibold">53</p>
          <p className="text-xl font-semibold">Feedbacks</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;

import React from "react";
import banner4 from "../../Assets/banner-4.jpg";

const Banner = () => {
  return (
    <div className="hero h-4/6 my-36">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={banner4} className="w-4/6 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-warning">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

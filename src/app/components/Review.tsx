import React from "react";
import SecTitle from "./SecTitle";

const Review = () => {
  return (
    <section className="px-10 ">
      <div className="text-center">
        <SecTitle title={"What Our Customers Say"} subtitle={""} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg">
          <p className="text-lg">
            "Super comfy and stylish! I wear mine every day."
          </p>
          <p className="font-bold mt-5">– Rafiq H.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg">
          <p className="text-lg">
            "Super comfy and stylish! I wear mine every day."
          </p>
          <p className="font-bold mt-5">– Rafiq H.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg">
          <p className="text-lg">
            "Super comfy and stylish! I wear mine every day."
          </p>
          <p className="font-bold mt-5">– Rafiq H.</p>
        </div>
      </div>
    </section>
  );
};

export default Review;

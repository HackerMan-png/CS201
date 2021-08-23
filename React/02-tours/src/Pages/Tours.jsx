import React from "react";
import Item from "../Components/Item";

const Tours = ({ tours }) => {
  return (
    <div>
      <section className="tours">
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Item key={tour.id} {...tour} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;

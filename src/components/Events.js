import React from "react";
import Title from "./Title";
import Event from "./Event";

export const Events = ({ events, title }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {events.map((event) => {
          return <Event key={event.id} {...event} />;
        })}
      </div>
    </section>
  );
};
export default Events;

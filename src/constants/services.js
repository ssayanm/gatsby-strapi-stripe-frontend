import React from "react";
import { GiLoveMystery, GiLovers, GiRoyalLove } from "react-icons/gi";
// import { RiCarWashingLine } from "react-icons/ri";

const services = [
  {
    id: 1,
    icon: <GiLoveMystery className="service-icon" />,
    title: "Radical Dating",
    url: "/contact",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 2,
    icon: <GiLovers className="service-icon" />,

    title: "Relationship Coaching",
    url: "/contact",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    id: 3,
    icon: <GiRoyalLove className="service-icon" />,
    title: "Stronger Relationship",
    url: "/contact",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
];

export default services;

import React from "react";
import { useSelector } from "react-redux";

const Page1 = ({ handleClick }) => {
  const counter = useSelector((state) => state);

  console.log(counter);
  return <button onClick={handleClick}>CAGARTE EN SUS MUERTOS</button>;
};

export default Page1;

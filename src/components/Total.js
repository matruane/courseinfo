import React from "react";

const Total = ({ parts }) => {
  const initialValue = 0;
  const total = parts.reduce((previous, current) => {
    return previous + current.exercises;
  }, initialValue);
  return <strong>total of {total} exercises</strong>;
};

export default Total;

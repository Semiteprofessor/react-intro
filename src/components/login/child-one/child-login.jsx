import React from "react";

const car = {
  make: "Toyota",
  model: "Corolla",
  year: "2005",
  move: function () {
    return this.make + " " + this.model;
  },
};

// Object destructuring
const { make, model, year, move } = car;

console.log(make);

export default function ChildOne({ info, age }) {
  //   console.log(props);
  return (
    <div>
      {info.firstName} is {age} years old {car.move()}
    </div>
  );
}

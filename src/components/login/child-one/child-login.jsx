import React from "react";

export const car = {
  make: "Toyota",
  model: "Corolla",
  year: "2005",
  useState: function () {
    return this.make + " " + this.model;
  },
  useEffect: function(){

  }
};

export function addTwoNumber(a, b) {
  return a + b;
}

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

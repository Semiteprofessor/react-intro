import React from "react";

const ChildOne = ({ info, age }) => {
  //   console.log(props);
  return (
    <div>
      {info.firstName} is {age} years old
    </div>
  );
};

export default ChildOne;

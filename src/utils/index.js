import axios from "axios";

// export const registerUser = async (body) => {
//   await axios
//     .post("http://localhost:8899/api/v1/auth/register", {
//       data: body,
//       Authorization: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((res) => {
//       if (res.status === 201) {
//         console.log("User registered successfully");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const registerUser = async (body) => {
  await axios("http://localhost:8899/api/v1/auth/register", {
    method: "POST",
    data: body,
    Authorization: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.data.status === true) {
        console.log(res.data.message);
      }
    })
    .catch((error) => console.log(error.message));
};

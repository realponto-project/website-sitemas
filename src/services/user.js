import api from "./api";

export const NewUser = async value => {
  let response = {};
  await api
    .post("/user", value, {})
    .then(resp => {
      response = resp;
    })
    .catch(err => {
      if (err.response) {
        response = err.response;
      } else {
        console.log("Error", err.message);
      }
    });

  return response;
};

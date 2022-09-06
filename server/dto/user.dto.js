export const userLoginDto = ({
  uuid,
  firstname,
  lastname,
  image,
  email,
  refresh_token,
  access_token,
}) => {
  return {
    email,
    refresh_token,
    access_token,
    uuid,
    firstname,
    lastname,
    image,
  };
};

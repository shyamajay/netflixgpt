export const checkData = (email, password) => {
  let emailError = "";
  let passwordError = "";

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isValidEmail) {
    emailError = "EmailId is not valid";
  }

  if (!isValidPassword) {
    passwordError = "Password is Invalid";
  }

  return {
    emailError,
    passwordError,
  };
};

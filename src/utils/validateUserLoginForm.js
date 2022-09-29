export const validateUserLoginForm = (values) => {
  const errors = {};
  if (values.password < 8) {
    errors.password = "Must be at least 8 characters";
  }

  if (values.username.length < 6) {
    errors.username = "Must be at least 2 characters";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 character or less";
  }
  return errors;
};

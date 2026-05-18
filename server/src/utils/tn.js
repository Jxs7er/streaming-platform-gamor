export const tn = (func, err) => {
  try {
    return func();
  } catch (error) {
    return err(error);
  }
};

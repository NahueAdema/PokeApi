export const handleError = (error: Error): void => {
  console.error(error);
  alert(error.message);
};

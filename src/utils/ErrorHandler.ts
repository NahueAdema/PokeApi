export const handleError = (error: Error): void => {
  console.error(error);
  alert(error.message); // Muestra un mensaje al usuario
};

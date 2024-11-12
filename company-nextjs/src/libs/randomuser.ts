export const RandomUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
};

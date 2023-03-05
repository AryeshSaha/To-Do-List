
const today = new Date();
exports.Day = () => {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
  };
  const day = today.toLocaleDateString("en-US", options);
  return day
};

exports.Year = () => {
  const year = today.getFullYear();
  return year
};


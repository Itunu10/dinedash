export const checkMomentOfTheDay = (): string => {
  // check the moment of the day
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return "Morning";
  } else if (currentHour < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};

export const errorHandler = (error: any) => {
  if (error.message) {
    return error.message;
  }

  if (error.data.message) {
    return error.data.message;
  } else if (Array.isArray(error.data.error)) {
    return error.data.error[0].msg || error.data.error[0].message;
  } else {
    return "An unexpected error occurred";
  }
};

export const shortenText = (text: string, value: number = 30) => {
  if (text && text.length >= value) {
    return `${text.slice(0, value)}...`;
  }
  return text;
};

export const formatDate = (value: string) => {
  const date = new Date(value);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
};

export const formatTime = (value: string) => {
  const date = new Date(value);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formattedTime;
};

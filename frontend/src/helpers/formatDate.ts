export const formatDate = (date: Date | string, timeZone: string = "UTC") => {
  return new Date(date).toLocaleDateString("en-GB", { timeZone });
};

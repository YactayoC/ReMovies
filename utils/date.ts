import format from "date-fns/format";
import formatISO from "date-fns/formatISO";

export const formatDate = (date: string) => {
  if (!date) {
    return null;
  }
  const dateISO = formatISO(new Date(date));
  const dareResult = format(new Date(dateISO), "dd MMM yyyy");
  return dareResult;
};

import { formatDistanceToNow, parseISO, format } from "date-fns";

export const getDateDistance = (date: string) =>
  formatDistanceToNow(parseISO(date), {
    addSuffix: true,
  });

export const formatDate= (date: string) => {
  const parseDate =parseISO(date);
  return format(parseDate, "EEEE, MMMM d, yyyy h:mm a");
}
import { formatDistanceToNow, parseISO } from "date-fns"

export const getDateDistance = (date: string) =>
    formatDistanceToNow(parseISO(date), {
      addSuffix: true,
    })
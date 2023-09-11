import dayjs from "dayjs";

export function getNextDays(): string[] {
  const days: string[] = [];
  const today: Date = new Date();

  for (let i = 0; i < 5; i++) {
    const date: Date = new Date();
    date.setDate(today.getDate() + (i + 1));
    days.push(dayjs(date).format('DD/MM'));
  }

  return days;
}
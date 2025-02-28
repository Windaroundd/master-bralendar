import dayjs from "dayjs";

export const getMonthMatrix = (month: number, year: number) => {
  if (month < 0) {
    month += 12;
    year -= 1;
  } else if (month > 11) {
    month -= 12;
    year += 1;
  }

  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let dayCounter = -firstDayOfMonth;

  return Array.from({ length: 6 }, () =>
    Array.from({ length: 7 }, () => {
      return dayjs(new Date(year, month, ++dayCounter));
    }),
  );
};

export const isDayInMonth = (day: dayjs.Dayjs, month: number) => {
  return day.month() === month;
};

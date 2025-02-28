import dayjs, { Dayjs } from "dayjs";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CalendarEventType } from "@/data/data";
import { getMonthMatrix } from "./getTime";

interface DateStoreType {
  userSelectedDate: Dayjs;
  setDate: (value: Dayjs) => void;
  month: number;
  year: number;
  calendar: Dayjs[][];
  setMonthYear: (month: number, year: number) => void;
  nextMonth: () => void;
  prevMonth: () => void;
}

interface EventStore {
  events: CalendarEventType[];
  isPopoverOpen: boolean;
  isEventSummaryOpen: boolean;
  selectedEvent: CalendarEventType | null;
  setEvents: (events: CalendarEventType[]) => void;
  openPopover: () => void;
  closePopover: () => void;
  openEventSummary: (event: CalendarEventType) => void;
  closeEventSummary: () => void;
}

export const useDateStore = create<DateStoreType>()(
  devtools(
    persist(
      (set) => ({
        userSelectedDate: dayjs(),
        month: dayjs().month(),
        year: dayjs().year(),
        calendar: getMonthMatrix(dayjs().month(), dayjs().year()),
        setDate: (value: Dayjs) => {
          set({ userSelectedDate: value });
        },
        setMonthYear: (month, year) =>
          set(() => ({
            month,
            year,
            calendar: getMonthMatrix(month, year),
          })),

        nextMonth: () =>
          set((state) => {
            let nextMonth = state.month + 1;
            let nextYear = state.year;

            if (nextMonth > 11) {
              nextMonth = 0;
              nextYear += 1;
            }

            return {
              month: nextMonth,
              year: nextYear,
              calendar: getMonthMatrix(nextMonth, nextYear),
            };
          }),

        prevMonth: () =>
          set((state) => {
            let prevMonth = state.month - 1;
            let prevYear = state.year;

            if (prevMonth < 0) {
              prevMonth = 11;
              prevYear -= 1;
            }

            return {
              month: prevMonth,
              year: prevYear,
              calendar: getMonthMatrix(prevMonth, prevYear),
            };
          }),
      }),
      { name: "date_data", skipHydration: true },
    ),
  ),
);
export const useEventStore = create<EventStore>((set) => ({
  events: [],
  isPopoverOpen: false,
  isEventSummaryOpen: false,
  selectedEvent: null,
  setEvents: (events) => set({ events }),
  openPopover: () => set({ isPopoverOpen: true }),
  closePopover: () => set({ isPopoverOpen: false }),
  openEventSummary: (event) =>
    set({ isEventSummaryOpen: true, selectedEvent: event }),
  closeEventSummary: () =>
    set({ isEventSummaryOpen: false, selectedEvent: null }),
}));

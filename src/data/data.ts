type EventType = "Appointment" | "webinar";
type Client = {
  name: string;
  profile_url: string;
};
export type CalendarEventType = {
  id: number;
  title: string;
  time_start: string;
  time_end: string;
  event_type: EventType;
  client?: Client;
  video_call_link?: string;
  date: string;
};

export const data: CalendarEventType[] = [
  {
    id: 1,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 2,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 3,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 4,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 5,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 6,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 7,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 8,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 9,
    title: "First Session with Alex Stan",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-02-7",
  },
  {
    id: 10,
    title: "Webinar: How to cope with trauma in professional life",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "webinar",
    date: "2025-02-12",
  },
  {
    id: 11,
    title: "Webinar: How to cope with trauma in professional life",
    time_start: "09:00",
    time_end: "09:30",
    event_type: "Appointment",
    video_call_link: "https://videocall.com/session/2",
    date: "2025-02-17",
  },
];

export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

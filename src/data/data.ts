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
    time_start: "2025-03-07T09:00:00+08:00",
    time_end: "2025-03-07T09:30:00+08:00",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-03-07",
  },
  {
    id: 2,
    title: "First Session with Alex Stan",
    time_start: "2025-03-07T09:00:00+08:00",
    time_end: "2025-03-07T09:30:00+08:00",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-03-07",
  },
  {
    id: 10,
    title: "First Session with Alex Stan",
    time_start: "2025-03-07T09:00:00+08:00",
    time_end: "2025-03-07T09:30:00+08:00",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-03-07",
  },
  {
    id: 11,
    title: "First Session with Alex Stan",
    time_start: "2025-03-07T09:00:00+08:00",
    time_end: "2025-03-07T09:30:00+08:00",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/1",
    date: "2025-03-07",
  },
  {
    id: 21,
    title: "Follow-up with Alex Stan",
    time_start: "2025-03-07T11:00:00+08:00",
    time_end: "2025-03-07T11:30:00+08:00",
    event_type: "Appointment",
    client: {
      name: "Alex Stan",
      profile_url: "https://www.linkedin.com/in/harry-luu-245851142/",
    },
    video_call_link: "https://videocall.com/session/2",
    date: "2025-03-07",
  },

  {
    id: 6,
    title: "Webinar: Coping with Career Burnout",
    time_start: "2025-03-11T13:00:00+08:00",
    time_end: "2025-03-11T14:00:00+08:00",
    event_type: "webinar",
    date: "2025-03-11",
  },

  {
    id: 9,
    title: "Webinar: Career Growth in 2025",
    time_start: "2025-03-22T10:00:00+08:00",
    time_end: "2025-03-22T11:00:00+08:00",
    event_type: "webinar",
    date: "2025-03-22",
  },
];

export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

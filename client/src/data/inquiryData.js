import { tokens } from "../theme";

export const inquiryDataCategory = ({ a }) => [
  {
    category: "영화/예매",
    답변완료: a && a.ticketDone,
    답변완료Color: "hsl(229, 70%, 50%)",
    답변미완료: a && a.ticketUndone,
    답변미완료Color: "hsl(296, 70%, 50%)",
  },
  {
    category: "영화관",
    답변완료: a && a.cinemaDone,
    답변완료Color: "hsl(229, 70%, 50%)",
    답변미완료: a && a.cinemaUndone,
    답변미완료Color: "hsl(296, 70%, 50%)",
  },
  {
    category: "이벤트",
    답변완료: a && a.eventDone,
    답변완료Color: "hsl(229, 70%, 50%)",
    답변미완료: a && a.eventUndone,
    답변미완료Color: "hsl(296, 70%, 50%)",
  },
  {
    category: "게시판",
    답변완료: a && a.boardDone,
    답변완료Color: "hsl(229, 70%, 50%)",
    답변미완료: a && a.boardUndone,
    답변미완료Color: "hsl(296, 70%, 50%)",
  },
  {
    category: "모임",
    답변완료: a && a.meetDone,
    답변완료Color: "hsl(229, 70%, 50%)",
    답변미완료: a && a.meetUndone,
    답변미완료Color: "hsl(296, 70%, 50%)",
  },
  {
    category: "기타",
    답변완료: a && a.etcDone,
    답변완료Color: "hsl(229, 70%, 50%)",
    답변미완료: a && a.etcUndone,
    답변미완료Color: "hsl(296, 70%, 50%)",
  },
];

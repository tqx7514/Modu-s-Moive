import { styled } from "styled-components";
import MyPageTopInfo from "./MyPageTopInfo";
import Responsive from "../../containers/common/Responsive";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../modules/eventlist";
import { useEffect, useState } from "react";
import MyPageBottomInfo from "./MyPageBottomInfo";

const MyPageMain = ({ user, loading }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => ({
    eventlist: state.eventlist.event || [],
  }));
  const [category, setCategory] = useState("Ticket");
  const handleTicketClick = () => {
    setCategory("Ticket");
  };

  const handleBoardClick = () => {
    setCategory("Board");
  };
  const handleMeetClick = () => {
    setCategory("Meet");
  };
  const handleInquiryClick = () => {
    setCategory("Inquiry");
  };
  const handleInfoClick = () => {
    setCategory("Info");
  };
  console.log("category", category);
  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);
  console.log("eventlist", events);
  return (
    <MyPageMainBlock>
      <MyPageTopInfo
        user={user}
        loading={loading}
        eventlist={events.eventlist}
        handleInfoClick={handleInfoClick}
        category={category}
      />
      <MyPageBottomInfo
        handleTicketClick={handleTicketClick}
        handleBoardClick={handleBoardClick}
        handleMeetClick={handleMeetClick}
        handleInquiryClick={handleInquiryClick}
        handleInfoClick={handleInfoClick}
        category={category}
      />
    </MyPageMainBlock>
  );
};

const MyPageMainBlock = styled(Responsive)`
  margin-top: 3rem;
`;

export default MyPageMain;

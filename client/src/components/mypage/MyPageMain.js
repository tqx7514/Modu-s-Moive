import { styled } from "styled-components";
import MyPageTopInfo from "./MyPageTopInfo";
import Responsive from "../../containers/common/Responsive";
import { useDispatch, useSelector } from "react-redux";
import { listEvents } from "../../modules/eventlist";
import { useEffect } from "react";

const MyPageMain = ({ user, loading }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => ({
    eventlist: state.eventlist.event || [],
  }));
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
      />
    </MyPageMainBlock>
  );
};

const MyPageMainBlock = styled(Responsive)`
  margin-top: 3rem;
`;

export default MyPageMain;

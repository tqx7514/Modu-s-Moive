import { styled } from "styled-components";
import MyPageMeetItem from "./MyPageMeetItem";

const MyPageMeetBlock = styled.div`
  > .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
`;
const MeetList = styled.div`
  margin-left: 2rem;
`;
const MeetListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Message = styled.div`
  margin: 1rem 0 1rem 1rem;
  /* border: 1px solid red; */
  /* border-radius: 4px; */
  width: 100%;

  > span {
    color: red;
  }
`;

const MyPageMeet = ({ user, myMeet, loading }) => {
  return (
    <MyPageMeetBlock>
      {loading ? (
        <div className="loading">
          <img src="/preloader_icon.gif" alt="" />
        </div>
      ) : !myMeet || myMeet.length === 0 ? (
        <div className="loading">가입된 모임이 없습니다</div>
      ) : (
        <>
          <Message>
            <span>* 빨간테두리</span>는 자신이 모임장인 모임입니다
          </Message>
          <MeetList>
            <MeetListItem>
              {myMeet.map((meet) => (
                <MyPageMeetItem key={meet.meetNum} meet={meet} user={user} />
              ))}
            </MeetListItem>
          </MeetList>
        </>
      )}
    </MyPageMeetBlock>
  );
};

export default MyPageMeet;

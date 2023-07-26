import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MeetSubInfo from "../common/MeetSubInfo";
import MeetTags from "../common/MeetTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faEye } from "@fortawesome/free-solid-svg-icons";

const MyPageMeetItemBlock = styled.div`
  width: 100%;
  height: 10rem;
  padding-top: 1rem;
  border-radius: 10px;
  margin: 0.5%;
  text-align: center;

  @media (min-width: 768px) {
    width: 48%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
  border: 1px solid
    ${({ leader, userId }) => (leader === userId ? "red" : "black")};
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: pink;
  }
`;
const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div + div {
    margin-left: 2rem; /* 아이콘과 count 사이의 간격을 조정 */
  }
`;

const DataBlock = styled.div`
  display: flex;
  align-items: center;

  > .icon {
    margin-right: 0.3rem;
  }
`;

const MyPageMeetItem = ({ key, meet, user }) => {
  const { createdAt, tags, title, meetNum, region, views, count, userId } =
    meet;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);

  return (
    <MyPageMeetItemBlock leader={meet.userId} userId={user.id}>
      <Link to={`/meet/detail/${meetNum}`}>
        <h2>{title}</h2>
        <MeetSubInfo
          region={region}
          publishedDate={new Date(createdAt)}
          views={views}
        />
        <IconBlock>
          <DataBlock>
            <FontAwesomeIcon icon={faPerson} className="icon" />
            {count}
          </DataBlock>
          <DataBlock>
            <FontAwesomeIcon icon={faEye} className="icon" />
            {views}
          </DataBlock>
        </IconBlock>
      </Link>
      <MeetTags tags={tagsArray} />
    </MyPageMeetItemBlock>
  );
};

export default MyPageMeetItem;

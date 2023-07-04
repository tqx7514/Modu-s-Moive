import { styled } from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import MeetSubInfo from "../common/MeetSubInfo";
import MeetTags from "../common/MeetTags";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MeetListBlock = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const WriteMeetButtonWrapper = styled.div`
  justify-content: right;
  display: flex;
  margin-top: 2rem;
`;

const MeetItemBlock = styled.div`
  width: 100%; /* 초기에는 한 줄에 하나씩 표시 */

  @media (min-width: 768px) {
    width: 50%; /* 768px 이상일 때, 한 줄에 두 개씩 표시 */
  }

  @media (min-width: 1024px) {
    width: 25%; /* 1024px 이상일 때, 한 줄에 네 개씩 표시 */
  }

  @media (min-width: 1200px) {
    width: 20%; /* 1200px 이상일 때, 한 줄에 다섯 개씩 표시 */
  }
  border: 1px solid black;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgray;
  }
`;

const MeetListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  text-align: center;
`;

const MeetItem = ({ meet }) => {
  const { createdAt, userId, tags, title, meetNum, region, likes } = meet;
  console.log("아이템 tags", tags);
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  console.log("아이템 어레이", tagsArray);
  return (
    <MeetItemBlock>
      <Link to={`/meet/detail/${meetNum}`}>
        <h2>{title}</h2>
        <MeetSubInfo
          region={region}
          publishedDate={new Date(createdAt)}
          likes={likes}
        />
        <br />
        <FontAwesomeIcon icon={faThumbsUp} />
        {likes}
        <MeetTags tags={tagsArray} />
      </Link>
    </MeetItemBlock>
  );
};

const MeetList = ({ meets, loading, error, showWriteButton }) => {
  if (error) {
    return <MeetListBlock>에러 발생했습니다</MeetListBlock>;
  }
  return (
    <MeetListBlock>
      <WriteMeetButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/meet/write">
            모임 만들기
          </Button>
        )}
      </WriteMeetButtonWrapper>
      {!loading && meets && (
        <MeetListItem>
          {meets.map((meet) => (
            <MeetItem meet={meet} key={meet.meetNum} />
          ))}
        </MeetListItem>
      )}
    </MeetListBlock>
  );
};

export default MeetList;

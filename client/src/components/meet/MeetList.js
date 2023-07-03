import { styled } from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import MeetSubInfo from "../common/MeetSubInfo";
import MeetTags from "../common/MeetTags";

const MeetListBlock = styled.div``;

const WriteMeetButtonWrapper = styled.div``;

const MeetItemBlock = styled.div``;

const MeetItem = ({ meet }) => {
  const { createdAt, userId, tags, title, body, meetNum } = meet;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  return (
    <MeetItemBlock>
      <h2>
        <Link to={`/meet/detail/${meetNum}`}>{title}</Link>
      </h2>
      <MeetSubInfo username={userId} publishedDate={new Date(createdAt)} />
      <MeetTags tags={tagsArray} />
      <p>{body}</p>
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
            새 글 작성하기
          </Button>
        )}
      </WriteMeetButtonWrapper>
      {!loading && meets && (
        <div>
          {meets.map((meet) => (
            <MeetItem meet={meet} key={meet.meetNum} />
          ))}
        </div>
      )}
    </MeetListBlock>
  );
};

export default MeetList;

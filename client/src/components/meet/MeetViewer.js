import { styled } from "styled-components";
import Responsive from "../common/Responsive";

const MeetViewerBlock = styled(Responsive)``;

const MeetHead = styled.div``;

const SubInfo = styled.div``;

const Tags = styled.div``;

const MeetContent = styled.div``;

const MeetViewer = ({ meet, error, loading }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <MeetViewerBlock>존재하지 않는 모임입니다</MeetViewerBlock>;
    }
    return <MeetViewerBlock>오류발생!</MeetViewerBlock>;
  }

  if (loading || !meet) {
    return null;
  }
  const { title, body, userId, createdAt, tags } = meet;
  console.log("tags입니다===================", tags);
  return (
    <MeetViewerBlock>
      <MeetHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{userId}</b>
          </span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </SubInfo>
        <Tags>
          {tags.map((tag) => (
            <div className="tag">#{tag}</div>
          ))}
        </Tags>
      </MeetHead>
      <MeetContent dangerouslySetInnerHTML={{ __html: body }} />
    </MeetViewerBlock>
  );
};

export default MeetViewer;

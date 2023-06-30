import { styled } from "styled-components";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const MeetViewerBlock = styled(Responsive)``;

const MeetHead = styled.div``;

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
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  return (
    <MeetViewerBlock>
      <MeetHead>
        <h1>{title}</h1>
        <SubInfo username={userId} publishedDate={createdAt} hasMarginTop />
        <Tags tags={tagsArray} />
      </MeetHead>
      <MeetContent dangerouslySetInnerHTML={{ __html: body }} />
    </MeetViewerBlock>
  );
};

export default MeetViewer;

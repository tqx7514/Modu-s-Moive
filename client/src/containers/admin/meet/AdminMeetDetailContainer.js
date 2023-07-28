import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { readMeet, unloadMeet } from "../../../modules/meet";
import MeetViewer from "../../../components/meet/MeetViewer";
import MeetDetailActionButtons from "../../../components/meet/meetdetail/MeetDetailActionButtons";
import Button from "../../../components/common/Button";
import { removeMeet } from "../../../lib/api/meet";
import { meetList } from "../../../modules/meetlist";

const AdminMeetDetailContainer = ({ meetNum, handleDetailClick }) => {
  const dispatch = useDispatch();
  const { meet, error, loading } = useSelector(({ meet, loading }) => ({
    meet: meet.meet,
    error: meet.error,
    loading: loading["meet/READ_MEET"],
  }));

  useEffect(() => {
    dispatch(readMeet(meetNum));
    return () => {
      dispatch(unloadMeet());
    };
  }, [dispatch, meetNum]);

  const onRemove = async () => {
    try {
      await removeMeet(meetNum);
      setTimeout(() => {
        dispatch(meetList({ tag: null, region: null, page: 1 }));
        handleDetailClick();
      }, 200);
    } catch (e) {
      console.log(e);
    }
  };

  const func = () => {
    console.log("함수");
  };
  return (
    <MeetViewer
      meet={meet}
      loading={loading}
      error={error}
      ownMeet={true}
      actionButtons={
        <MeetDetailActionButtons
          type="모임"
          onEdit={func}
          onRemove={onRemove}
          isAdmin={true}
        />
      }
      joinButton={null}
      isJoined={true}
      isAdmin={true}
    />
  );
};

export default AdminMeetDetailContainer;

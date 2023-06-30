import React from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { meetList } from "../../modules/meetlist";
import MeetList from "../../components/meet/MeetList";
import { initialize } from "../../modules/meetwrite";

const MeetListContainer = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { meets, error, loading, user } = useSelector(
    ({ meetlist, loading, user }) => ({
      meets: meetlist.meets,
      error: meetlist.error,
      loading: loading["meet/MEET_LIST"],
      user: user.user,
    })
  );
  useEffect(() => {
    dispatch(initialize());
    const tag = searchParams.get("tag");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    console.log("tag==================", tag, "userId================", userId);
    dispatch(meetList({ tag, userId, page }));
  }, [dispatch, searchParams, userId]);
  return (
    <MeetList
      loading={loading}
      error={error}
      meets={meets}
      showWriteButton={user}
    />
  );
};

export default MeetListContainer;

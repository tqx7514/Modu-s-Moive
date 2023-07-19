import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { meetList } from "../../modules/meetlist";
import MeetList from "../../components/meet/MeetList";
import { initialize } from "../../modules/meetwrite";
import { loadUser } from "../../index";

const MeetListContainer = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { meets, error, loading, user, regions } = useSelector(
    ({ meetlist, loading, user }) => ({
      meets: meetlist.meets,
      error: meetlist.error,
      loading: loading["meet/MEET_LIST"],
      regions: meetlist.regions,
      user: user.user,
    })
  );
  useEffect(() => {
    console.log("로드유저");
    loadUser();
  }, []);
  useEffect(() => {
    dispatch(initialize());
    const page = parseInt(searchParams.get("page"), 10) || 1;
    const tag = searchParams.get("tag");
    const region = searchParams.get("region");
    console.log("page", page);
    console.log("tag==================", tag, "region================", region);
    dispatch(meetList({ tag, region, page }));
  }, [dispatch, searchParams]);

  return (
    <MeetList
      loading={loading}
      error={error}
      meets={meets}
      showWriteButton={user}
      regions={regions}
      user={user}
    />
  );
};

export default MeetListContainer;

import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { meetList } from "../../modules/meetlist";
import MeetList from "../../components/meet/MeetList";
import { initialize } from "../../modules/meetwrite";
import { check, tempSetUser } from "../../modules/user";

const MeetListContainer = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { meets, error, loading, user, regions, count } = useSelector(
    ({ meetlist, loading, user }) => ({
      meets: meetlist.meets,
      error: meetlist.error,
      loading: loading["meetlist/MEET_LIST"],
      regions: meetlist.regions,
      user: user.user,
      count: meetlist.count,
    })
  );
  useEffect(() => {
    if (user) {
      console.log("유저잇음 컨테이너", user);
      dispatch(tempSetUser(user));
      dispatch(check());
    }
  }, []);
  useEffect(() => {
    dispatch(initialize());
    const page = parseInt(searchParams.get("page"), 10) || 1;
    const tag = searchParams.get("tag");
    const region = searchParams.get("region");
    const sort = { field: "createdAt", order: 1 };
    console.log("page", page);
    console.log("tag==================", tag, "region================", region);
    dispatch(meetList({ tag, region, page, sort }));
  }, [dispatch, searchParams]);

  return (
    <MeetList
      loading={loading}
      error={error}
      meets={meets}
      showWriteButton={user}
      regions={regions}
      user={user}
      counts={count}
    />
  );
};

export default MeetListContainer;

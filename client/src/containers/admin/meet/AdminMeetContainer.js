import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminMeetList from "../../../components/admin/meet/AdminMeetList";
import { styled } from "styled-components";
import { check, tempSetUser } from "../../../modules/user";
import { initialize } from "../../../modules/meetwrite";
import { meetList } from "../../../modules/meetlist";
import AdminMeetChart from "../../../components/admin/meet/AdminMeetChart";

const AdminMeetContainer = () => {
  const dispatch = useDispatch();
  const { meets, count, error, loading, user, regions, lastPage } = useSelector(
    ({ meetlist, loading, user }) => ({
      meets: meetlist.meets,
      count: meetlist.count,
      error: meetlist.error,
      loading: loading["meetlist/MEET_LIST"],
      regions: meetlist.regions,
      user: user.user,
      lastPage: meetlist.lastPage,
    })
  );
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState(null);
  const [region, setRegion] = useState(null);
  const [detail, setDetail] = useState(false);
  const [sort, setSort] = useState({ field: "createdAt", order: 1 });

  // useEffect(() => {
  //   if (user) {
  //     console.log("유저잇음 컨테이너", user);
  //     dispatch(tempSetUser(user));
  //     dispatch(check());
  //   }
  // }, []);
  useEffect(() => {
    dispatch(initialize());
    dispatch(meetList({ tag, region, page, sort }));
  }, [dispatch, tag, region, page, sort]);

  const handleRegionClick = (region) => {
    console.log("region===", region);
    if (region === "전국") {
      setRegion(null);
    } else {
      setRegion(region);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  const handleDetailClick = () => {
    setDetail(!detail);
  };
  const changeSort = (field) => {
    if (sort.field === field) {
      setSort({ ...sort, order: sort.order * -1 });
    } else {
      setSort({ field: field, order: 1 });
    }
  };
  console.log("sort==========", sort);
  return (
    <AdminMeetContainerBlock>
      <AdminBlock>
        <AdminMeetList
          loading={loading}
          error={error}
          meets={meets}
          regions={regions}
          user={user}
          page={page}
          tag={tag}
          region={region}
          count={count}
          handleRegionClick={handleRegionClick}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleDetailClick={handleDetailClick}
          detail={detail}
          lastPage={lastPage}
          sort={sort}
          changeSort={changeSort}
        />
      </AdminBlock>
      <AdminBlock2>
        <AdminMeetChart />
      </AdminBlock2>
    </AdminMeetContainerBlock>
  );
};

const AdminMeetContainerBlock = styled.div`
  display: flex;
  /* background-color: gray; */
  height: 130vh;
  justify-content: space-between;
`;
const AdminBlock = styled.div`
  padding-left: 10px;
  width: 60%;
`;
const AdminBlock2 = styled.div`
  padding-left: 10px;
  width: 40%;
`;

export default AdminMeetContainer;

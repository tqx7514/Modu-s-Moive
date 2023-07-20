import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/meet/Pagination";

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");
  const tag = searchParams.get("tag");
  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { lastPage, meetList, loading } = useSelector(
    ({ meetlist, loading }) => ({
      lastPage: meetlist.lastPage,
      meetList: meetlist.meets,
      loading: loading["meetlist/MEET_LIST"],
    })
  );

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!meetList || loading) return null;

  return (
    <Pagination
      tag={tag}
      userId={userId}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;

import React, { useState, useEffect } from "react";
import MyPageBoard from "../../components/mypage/MyPageBoard";
import { useSelector } from "react-redux";
import * as myPageAPI from "../../lib/api/mypage";

const MyPageBoardContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const [myBoard, setMyBoard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(1);
  const id = user && user.id;
  const pages = 1;
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await myPageAPI.myPost({ id, pages });
        console.log("response.data", response.data.postDataArray);
        setMyBoard(response.data.postDataArray);
        setLastPage(response.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    setLoading(false);
  }, [id]);
  const pagination = async (pages) => {
    console.log("pages", pages);
    console.log("id", id);
    try {
      const response = await myPageAPI.myPost({ id, pages });
      console.log("다음페이지 갑니다", id, pages);
      setMyBoard(response.data.postDataArray);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <MyPageBoard
        user={user}
        myPost={myBoard}
        loading={loading}
        pagination={pagination}
        lastPage={lastPage}
      />
    </div>
  );
};

export default MyPageBoardContainer;

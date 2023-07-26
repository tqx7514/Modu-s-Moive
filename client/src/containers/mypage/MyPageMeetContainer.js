import React, { useState, useEffect } from "react";
import MyPageMeet from "../../components/mypage/MyPageMeet";
import { useSelector } from "react-redux";
import * as myPageAPI from "../../lib/api/mypage";

const MyPageMeetContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const [myMeet, setMyMeet] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = user && user.id;
  const meetNum = user && user.meet;

  useEffect(() => {
    setLoading(true);
    if (user.meet !== null) {
      const fetchData = async () => {
        try {
          const response = await myPageAPI.myMeet({ id, meetNum });
          setMyMeet(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      if (myMeet !== []) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [id, meetNum]);

  return (
    <div>
      <MyPageMeet user={user} myMeet={myMeet} loading={loading} />
    </div>
  );
};

export default MyPageMeetContainer;

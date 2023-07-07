import React, { useState } from "react";
import axios from "axios";

const PostLike = ({ postNum, userNum }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = async () => {
    try {
      const response = await axios.post("/api/likes", {
        postNum,
        userNum,
      });

      setLiked(response.data.liked);
      setLikes(response.data.likes);
    } catch (error) {
      console.error("좋아요를 누를 수 없습니다.", error);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>{liked ? "Unlike" : "Like"}</button>
      <p>{likes}</p>
    </div>
  );
};

export default PostLike;

import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PostPagination from "../../components/posts/PostPagination";

const PostPaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");
  const tag = searchParams.get("tag");
  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { lastPage, postList, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    postList: posts.posts,
    loading: loading["posts/LIST_POSTS"],
  }));
  console.log("dddddddddddddddd", lastPage);

  if (!postList || loading) return null;

  return (
    <PostPagination
      tag={tag}
      userId={userId}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PostPaginationContainer;

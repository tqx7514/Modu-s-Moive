import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PostPagination from "../../components/posts/PostPagination";

const PostPaginationContainer = ({ isAdmin }) => {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");
  const tag = searchParams.get("tag");
  const page = parseInt(searchParams.get("page"), 10) || 1;

  const { lastPage, postList, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    postList: posts.posts,
    loading: loading["posts/LIST_POSTS"],
  }));

  if (!postList || loading) return null;

  return (
    <PostPagination
      tag={tag}
      userId={userId}
      page={parseInt(page, 10)}
      lastPage={lastPage}
      isAdmin={isAdmin}
    />
  );
};

export default PostPaginationContainer;

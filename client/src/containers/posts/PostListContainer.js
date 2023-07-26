import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PostList from "../../components/posts/PostList";
import { listPosts } from "../../modules/posts";

const PostListContainer = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/LIST_POSTS"],
      user: user.user,
    })
  );
  console.log("PostListContainer의 posts입니다.", posts);
  console.log("PostListContainer의 error입니다.", error);
  console.log("PostListContainer의 loading입니다.", loading);
  useEffect(() => {
    const tags = searchParams.get("tags");
    // const searchResult = searchParams.get("search");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(listPosts({ page, name, tags }));
  }, [dispatch, searchParams, name]);

  return (
    <>
      <PostList
        loading={loading}
        error={error}
        posts={posts}
        showWriteButton={user}
      />
    </>
  );
};

export default PostListContainer;

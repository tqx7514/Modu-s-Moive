import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; // Updated import
import AdminPostList from "../../../components/posts/admin/AdminPostList";
import { AdminListPost } from "../../../modules/admin/adminposts";

const AdminPostListContainer = () => {
  const { name } = useParams();
  // Remove the incorrect import for useSearchParams and the destructuring
  // const { searchParams } = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/ADMINLIST_POSTS"],
      user: user.user,
    })
  );
  console.log("AdminPostListContainer", user);
  useEffect(() => {
    // Retrieve the URL search params from the window object
    const searchParams = new URLSearchParams(window.location.search);
    const tags = searchParams.get("tags");
    const searchResult = searchParams.get("search");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    dispatch(AdminListPost({ tags, name, page, searchResult }));
  }, [dispatch, name]);

  return (
    <>
      <AdminPostList loading={loading} error={error} posts={posts} />
    </>
  );
};

export default AdminPostListContainer;

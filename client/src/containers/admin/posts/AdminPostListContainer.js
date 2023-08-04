import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom"; // Updated import
import { listPosts } from "../../../modules/posts";
import AdminPostList from "../../../components/admin/posts/AdminPostList";
import styled from "styled-components";
import AdminPostChart from "../../../components/admin/posts/AdminPostChart";

const AdminPostListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { name } = useParams();
  // Remove the incorrect import for useSearchParams and the destructuring
  // const { searchParams } = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user, count } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["adminposts/ADMINLIST_POSTS"],
      user: user.user,
      count: posts.count,
    })
  );
  console.log("AdminPostListContainer", user);
  useEffect(() => {
    // Retrieve the URL search params from the window object
    // const searchParams = new URLSearchParams(window.location.search);
    const tags = searchParams.get("tags");
    // const searchResult = searchParams.get("search");
    const page = parseInt(searchParams.get("page"), 10) || 1;
    // console.log("페이지=-=", page);
    // dispatch(AdminListPost({ tags, name, page }));
    dispatch(listPosts({ page, name, tags }));
  }, [dispatch, searchParams]);

  return (
    <AdminPostListContainerBlock>
      <AdminBlock>
        <AdminPostList
          loading={loading}
          error={error}
          posts={posts}
          count={count}
        />
      </AdminBlock>
      <AdminBlock2>
        <AdminPostChart />
      </AdminBlock2>
    </AdminPostListContainerBlock>
  );
};
const AdminPostListContainerBlock = styled.div`
  display: flex;
  /* background-color: gray; */
  height: 130vh;
`;
const AdminBlock = styled.div`
  padding-left: 10px;
  width: 60%;
`;
const AdminBlock2 = styled.div`
  padding-left: 10px;
  width: 40%;
`;

export default AdminPostListContainer;

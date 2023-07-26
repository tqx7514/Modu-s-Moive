import Footer from "../components/common/Footer";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostCommentListContainer from "../containers/post/PostCommentListContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <PostCommentListContainer />
      <Footer />
    </>
  );
};

export default PostPage;

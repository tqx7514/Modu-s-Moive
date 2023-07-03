import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child{
        padding-top: 0;
    }
    &+&{
        border-top: 1px solid ${palette.gray[2]};
    }
    h2{
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover{
            color: ${palette.gray[6]};
        }
    }
    p{
        margin-top: 2rem;
    }
`;

const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItem = ({ post }) => {
    const { publishedDate, userId, tags, title, body, postNum } = post;
    const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
    return(
        <PostItemBlock>
            <h2>
                <Link to={`/${userId}/${postNum}`}>{title}</Link>
            </h2>
            <SubInfo
            username={userId}
            publishedDate={new Date(publishedDate)}
            />
            <Tags tags={tagsArray} />
        </PostItemBlock>
    );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
    if(error){
        return<PostListBlock>에러가 발생했습니다.</PostListBlock>
    }

    return(
        <PostListBlock>
            <WritePostButtonWrapper>
                {showWriteButton && (
                    <Button cyan to='/write'>
                        새 글 작성하기
                    </Button>
                )}
            </WritePostButtonWrapper>
            {!loading && posts && (
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post.id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
};

export default PostList;
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BoardList from "../../components/boards/BoardList";
import { useEffect } from "react";
import { listBoards } from "../../lib/api/boards";

const BoardListContainter = () => {
    const { username } = useParams();
    const { searchParams } = useSearchParams();
    const dispatch = useDispatch();
    const { posts, error, loading, user } = useSelector(
        ({ posts, loading, user }) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading['posts/LIST_POSTS'],
            user: user.user,
    }),
    );
    useEffect(() => {
        const tag = searchParams.get('tag');
        const page = parseInt(searchParams.get('page'), 10) || 1;
        dispatch(listBoards({ tag, username, page }));
    }, [dispatch, searchParams, username]);

    return (
        <BoardList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
        />
    );
};

export default BoardListContainter
import { Link } from "react-router-dom"
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import Button from "../../components/common/Button";

const BoardItemBlock = styled.div`
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

const BoardListBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const BoardItem = () => {
    return(
        <BoardItemBlock>
            <Link to='/BoardItem'>제목</Link>
        </BoardItemBlock>
    );
};

const BoardList = () => {
    return(
        <BoardListBlock>
            <div>
                <Button cyan to="/write">
                    새 글 작성하기
                </Button>
            </div>
            <BoardItem/>
        </BoardListBlock>
    );
};

export default BoardList;
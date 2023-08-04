import React from "react";
import styled from "styled-components";
import qs from "qs";
import Button from "../common/Button";

const PostPaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const PostPageNumber = styled.div``;

const buildLink = ({ userId, tag, page, isAdmin }) => {
  const query = qs.stringify({ page });
  if (!isAdmin) {
    return `/postlist?${query}`;
  } else {
    return `/admin/postlist?${query}`;
  }
};

const PostPagination = ({ page, lastPage, userId, tag, isAdmin }) => {
  return (
    <PostPaginationBlock>
      <Button
        disabled={page === 1}
        to={
          page === 1
            ? undefined
            : buildLink({ userId, tag, page: page - 1, isAdmin })
        }
      >
        이전
      </Button>
      <PostPageNumber>{page}</PostPageNumber>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ userId, tag, page: page + 1, isAdmin })
        }
      >
        다음
      </Button>
    </PostPaginationBlock>
  );
};

export default PostPagination;

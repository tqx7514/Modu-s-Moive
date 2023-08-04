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

const buildLink = ({ userId, tag, page }) => {
  const query = qs.stringify({ userId, tag, page });
  return `/admin/postlist?${query}`;
};

const AdminPostPagination = ({ page, lastPage, userId, tag }) => {
  return (
    <PostPaginationBlock>
      <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ userId, tag, page: page - 1 })}
      >
        이전
      </Button>
      <PostPageNumber>{page}</PostPageNumber>
      <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ userId, tag, page: page + 1 })
        }
      >
        다음
      </Button>
    </PostPaginationBlock>
  );
};

export default AdminPostPagination;

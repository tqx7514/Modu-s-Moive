import React from "react";
import styled from "styled-components";
import Responsive from "../Responsive";

const AdminEventItemBlock = styled.div`
`;

const AdminEventListBlock = styled(Responsive)`
`;

const WriteEventButtonWrapper = styled.div`
`;

const AdminListItem = styled.div`
`;

const AdminEventHeaderBlock = styled.div`
`;

const AdminEventCategoryBlock = styled.div`
`;

const formatDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateTime.getDate()).padStart(2, "0");
  const hours = String(dateTime.getHours()).padStart(2, "0");
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  const seconds = String(dateTime.getSeconds()).padStart(2, "0");
  return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

const AdminEventItem = ({  })

export default AdminEventListCompots;

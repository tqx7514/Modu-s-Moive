import React, { useState } from "react";
import { styled } from "styled-components";
import MeetDetailActionButtons from "./MeetDetailActionButtons";
import { FaChessKing } from "react-icons/fa";

const MeetDetailManage = ({ members, meet, onKick, onMandate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 아이템 개수

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // 현재 페이지에 해당하는 멤버 목록을 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers =
    members && members.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 처리
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ margin: "0 0 0 3rem" }}>
      <CountBlock>총 {meet.count}명</CountBlock>
      <table>
        <thead>
          <tr style={{ height: "3rem" }}>
            <th style={{ width: "5%" }}>번호</th>
            <th style={{ width: "15%" }}>아이디</th>
            <th style={{ width: "10%" }}>모임 가입일</th>
            <th style={{ width: "7%" }}>성별</th>
            <th style={{ width: "10%" }}>나이</th>
            <th style={{ width: "15%" }}>이메일</th>
            <th style={{ width: "38%" }}>관리</th>
          </tr>
        </thead>
        <tbody>
          {currentMembers &&
            currentMembers.map((member) => (
              <tr key={member.meetuserNum}>
                <td style={{ textAlign: "center" }}>{member.meetuserNum}</td>
                <td style={{ textAlign: "center" }}>
                  {meet.userId == member.user_Id && (
                    <span style={{ margin: "0 0.3rem 0 0.3rem " }}>
                      <FaChessKing />
                    </span>
                  )}
                  {member.user_Id}
                </td>
                <td style={{ textAlign: "center" }}>
                  {formatDate(member.createdAt)}
                </td>
                <td style={{ textAlign: "center" }}>
                  {member.user_Num_user.gender}
                </td>
                <td style={{ textAlign: "center" }}>
                  {member.user_Num_user.age}
                </td>
                <td style={{ textAlign: "center" }}>
                  {member.user_Num_user.email}
                </td>
                {meet.userId !== member.user_Id && (
                  <ButtonsCell>
                    <MeetDetailActionButtons
                      type="회원"
                      onKick={onKick}
                      onMandate={onMandate}
                      meetuserId={member.user_Id}
                      meetuserNum={member.meetuserNum}
                    />
                  </ButtonsCell>
                )}
              </tr>
            ))}
        </tbody>
      </table>

      <Pagination>
        {Array.from(
          { length: Math.ceil(members && members.length / itemsPerPage) },
          (_, index) => (
            <PageNumber
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageNumber>
          )
        )}
      </Pagination>
    </div>
  );
};

const CountBlock = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0 2rem 1rem;
  font-weight: bold;
`;

const ButtonsCell = styled.td`
  display: flex;
  justify-content: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "gray" : "lightgray")};
  color: white;
  cursor: pointer;
`;

export default MeetDetailManage;

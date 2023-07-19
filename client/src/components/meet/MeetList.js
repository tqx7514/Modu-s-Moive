import { styled } from "styled-components";
import Button from "../common/Button";
import { Link, useNavigate, NavLink } from "react-router-dom";
import MeetSubInfo from "../common/MeetSubInfo";
import MeetTags from "../common/MeetTags";
import { faPerson, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Responsive from "../common/Responsive";

const MeetListBlock = styled(Responsive)`
  margin-top: 3rem;
  > hr {
    margin-bottom: 1rem;
    border: none;
    border-top: 1px solid lightslategray; /* 연한 회색으로 변경 */
  }
`;

const WriteMeetButtonWrapper = styled.div`
  justify-content: right;
  display: flex;
  margin-top: 2rem;
`;

const MeetItemBlock = styled.div`
  width: 100%;
  height: 10rem;
  padding-top: 1rem;
  border-radius: 10px;
  margin: 0.5%;
  text-align: center;

  @media (min-width: 768px) {
    width: 48%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
  border: 1px solid
    ${({ meetNum, user_meet }) =>
      user_meet && user_meet.includes(meetNum) ? "red" : "black"};
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: lightgray;
  }
`;

const MeetListItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div + div {
    margin-left: 2rem; /* 아이콘과 count 사이의 간격을 조정 */
  }
`;

const DataBlock = styled.div`
  display: flex;
  align-items: center;

  > .icon {
    margin-right: 0.3rem;
  }
`;

const MeetHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const RegionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div {
    /* display: inline-block; */
    flex: 1;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding-bottom: 0.8rem;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: black;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }

    &:hover:after,
    &.active:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const activeStyle = {
  // fontSize: 21,
  fontWeight: "bold",
  borderBottom: "2px solid black",
  display: "inline-block",
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: white;
  height: 100vh;
  width: 100vw;

  .loader {
    max-inline-size: 100%;
  }
`;

// const NavLinkStyled = styled.div`
//   display: inline-block;
//   text-decoration: none;
//   position: relative;
//   padding-bottom: 2px;
//   cursor: pointer;
// `;

const MeetItem = ({ meet, user_Id, user_meet }) => {
  const { createdAt, tags, title, meetNum, region, views, count, userId } =
    meet;
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  return (
    <MeetItemBlock meetNum={meetNum} user_meet={user_meet}>
      <Link to={`/meet/detail/${meetNum}`}>
        <h2>{title}</h2>
        <MeetSubInfo
          region={region}
          publishedDate={new Date(createdAt)}
          views={views}
        />
        <IconBlock>
          <DataBlock>
            <FontAwesomeIcon icon={faPerson} className="icon" />
            {count}
          </DataBlock>
          <DataBlock>
            <FontAwesomeIcon icon={faEye} className="icon" />
            {views}
          </DataBlock>
        </IconBlock>
      </Link>
      <MeetTags tags={tagsArray} />
    </MeetItemBlock>
  );
};

const MeetList = ({
  meets,
  loading,
  error,
  showWriteButton,
  regions,
  user,
}) => {
  const [selectedRegion, setSelectedRegion] = useState("전국");
  const navigate = useNavigate();
  if (error) {
    return <MeetListBlock>에러 발생했습니다</MeetListBlock>;
  }
  return (
    <>
      {loading ? (
        <Container>
          <img src="loader.gif" alt="" className="loader" />
        </Container>
      ) : (
        <MeetListBlock>
          <MeetHeaderBlock>
            <h2>모임</h2>
            {showWriteButton && <Button to="/meet/write">모임 만들기</Button>}
          </MeetHeaderBlock>
          <hr />
          <RegionsBlock>
            {regions &&
              regions.map((region) => (
                <div
                  style={region === selectedRegion ? activeStyle : undefined}
                  onClick={() => {
                    if (region === "전국") {
                      navigate("/meet");
                    } else {
                      navigate(`/meet?region=${region}`);
                    }
                    setSelectedRegion(region);
                  }}
                >
                  {region}
                </div>
              ))}
          </RegionsBlock>
          {/* {selectedRegion}의 모임 : 총 {meets && meets.length}개 입니다. */}
          {!loading && meets && (
            <MeetListItem>
              {meets.map((meet) => (
                <MeetItem
                  meet={meet}
                  key={meet.meetNum}
                  user_Id={user.id}
                  user_meet={user.meet}
                />
              ))}
            </MeetListItem>
          )}
        </MeetListBlock>
      )}
    </>
  );
};

export default MeetList;

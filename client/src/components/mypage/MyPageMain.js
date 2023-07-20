import { styled } from "styled-components";
import MyPageTopInfo from "./MyPageTopInfo";
import Responsive from "../../containers/common/Responsive";

const MyPageMain = () => {
  return (
    <MyPageMainBlock>
      <MyPageTopInfo />
    </MyPageMainBlock>
  );
};

const MyPageMainBlock = styled(Responsive)`
  margin-top: 3rem;
`;

export default MyPageMain;

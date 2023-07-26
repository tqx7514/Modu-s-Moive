import React from "react";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import Footer from "../components/common/Footer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
      <Footer />
    </Responsive>
  );
};

export default WritePage;

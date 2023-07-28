import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const EditorBlock = styled(Responsive)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const RegionSelect = styled.select`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: 1px solid ${palette.gray[4]};
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const Editor = ({ title, body, onChangeField, selectedRegion, regiondata }) => {
  console.log("ssssssssssssss", regiondata);
  const newRegionData = regiondata.filter((item) => item !== "전국");
  console.log("newRegion", newRegionData);
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  const [region, setRegion] = useState("");

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "모임소개글을 입력하세요",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link"],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "body", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  useEffect(() => {
    if (selectedRegion) {
      onChangeField({ key: "region", value: selectedRegion });
      setRegion(selectedRegion);
    } else {
      onChangeField({ key: "region", value: "서울" });
    }
  }, []);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeRegion = (e) => {
    const selectedRegion = e.target.value === "" ? "서울" : e.target.value;
    setRegion(selectedRegion);
    onChangeField({ key: "region", value: selectedRegion });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="모임명을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <RegionSelect value={region} onChange={onChangeRegion}>
        {newRegionData.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </RegionSelect>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;

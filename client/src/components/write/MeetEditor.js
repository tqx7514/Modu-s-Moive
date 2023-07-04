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
const regionOptions = [
  { value: "전국", label: "전국" },
  { value: "서울", label: "서울" },
  { value: "부산", label: "부산" },
  { value: "인천", label: "인천" },
  { value: "대구", label: "대구" },
  { value: "대전", label: "대전" },
  { value: "광주", label: "광주" },
  { value: "울산", label: "울산" },
  { value: "제주", label: "제주" },
  { value: "경기도", label: "경기도" },
  { value: "강원도", label: "강원도" },
  { value: "경상북도", label: "경상북도" },
  { value: "경상남도", label: "경상남도" },
  { value: "충청북도", label: "충청북도" },
  { value: "충청남도", label: "충청남도" },
  { value: "전라북도", label: "전라북도" },
  { value: "전라남도", label: "전라남도" },
];
const RegionSelect = styled.select`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: 1px solid ${palette.gray[4]};
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const Editor = ({ title, body, onChangeField, selectedRegion }) => {
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
      onChangeField({ key: "region", value: "전국" });
    }
  }, []);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeRegion = (e) => {
    const selectedRegion = e.target.value === "" ? "전국" : e.target.value;
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
        {regionOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
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

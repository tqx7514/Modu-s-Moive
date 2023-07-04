import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { changeField } from "../../modules/meetwrite";
import { initialize } from "../../modules/write";
import Editor from "../../components/write/MeetEditor";

const MeetEditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, region } = useSelector(({ meetwrite }) => ({
    title: meetwrite.title,
    body: meetwrite.body,
    region: meetwrite.region,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <Editor
      onChangeField={onChangeField}
      title={title}
      body={body}
      selectedRegion={region}
    />
  );
};

export default MeetEditorContainer;

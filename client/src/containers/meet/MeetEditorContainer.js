import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { changeField } from "../../modules/meetwrite";
import { initialize } from "../../modules/write";
import Editor from "../../components/write/MeetEditor";

const MeetEditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body, region, regions } = useSelector(
    ({ meetwrite, meetlist }) => ({
      title: meetwrite.title,
      body: meetwrite.body,
      region: meetwrite.region,
      regions: meetlist.regions,
    })
  );
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
      regiondata={regions}
    />
  );
};

export default MeetEditorContainer;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeField } from "../../modules/meetwrite";
import TagBox from "../../components/write/TagBox";

const MeetTagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.meetwrite.tags);
  const tagsArray = Array.isArray(tags) ? tags : JSON.parse(tags);
  const onChangeTags = (nextTags) => {
    dispatch(
      changeField({
        key: "tags",
        value: nextTags,
      })
    );
  };
  return <TagBox onChangeTags={onChangeTags} tags={tagsArray} />;
};

export default MeetTagBoxContainer;

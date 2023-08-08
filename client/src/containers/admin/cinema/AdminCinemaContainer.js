import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import AdminCinema from "../../../components/admin/cinema/AdminCinema";
import { viewCinema, initialize, changeField } from "../../../modules/admin/admincinema";
import Swal from "sweetalert2";
import { readCinema } from "../../../modules/cinema";

const AdminCinemaContainer = () => {
  const dispatch = useDispatch();
  const { cinema, count, loading, lastPage } = useSelector(
    ({ admincinema, loading }) => ({
      cinema: admincinema.cinema,
      count: admincinema.count,
      loading: loading["admincinema/VIEW_CINEMA"],
      lastPage: admincinema.lastPage,
    })
  );
  console.log("cinemas======>", cinema);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [detail, setDetail] = useState(false);
  useEffect(() => {
    dispatch(viewCinema({page, category}));
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, page, category]);

  const handleAllClick = () => {
    setCategory(1);
    setPage(1);
  };
  const handleUndoneClick = () => {
    setCategory(3);
    setPage(1);
  };
  const handleDoneClick = () => {
    setCategory(2);
    setPage(1);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    setPage(page - 1);
  };
  const handleDetailClick = () => {
    setDetail(!detail);
  };

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),[dispatch]
  );

  const onChangeregion = useCallback((e) => {
    onChangeField({key: "region", value: e.target.value});
  });

  const onChangeaddr = useCallback((e) => {
    onChangeField({key: "addr", value: e.target.value});
  });

  const onChangecinema = useCallback((e) => {
    onChangeField({key: "cinema", value: e.target.value});
  });

  const onChangeregionNum = useCallback((e) => {
    onChangeField({key: "regionNum", value: e.target.value});
  });

  const onCreate = useCallback(() => {
    dispatch(changeField({key: "region", value: ""}));
    dispatch(changeField({key: "addr", value: ""}));
    dispatch(changeField({key: "cinema", value: ""}));
    dispatch(changeField({key: "regionNum", value: ""}));
  });


  return (
    <AdminCinema
      cinema={cinema}
      count={count}
      loading={loading}
      category={category}
      onAllClick={handleAllClick}
      onUndoneClick={handleUndoneClick}
      onDoneClick={handleDoneClick}
      lastPage={lastPage}
      currentPage={page}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      detail={detail}
      handleDetailClick={handleDetailClick}
      onChangeregion={onChangeregion}
      onChangeaddr={onChangeaddr}
      onChangecinema={onChangecinema}
      onChangeregionNum={onChangeregionNum}
      onCreate={onCreate}
    />
  );
};
export default AdminCinemaContainer;

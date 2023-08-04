import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import AdminCinema from "../../../components/admin/cinema/AdminCinema";
import { viewCinema, initialize } from "../../../modules/admin/admincinema";
import Swal from "sweetalert2";

const AdminCinemaContainer = () => {
  const dispatch = useDispatch();
  const { cinema, count, loading, lastPage } = useSelector(
    ({ admincinema, loading }) => ({
      cinema: admincinema.cinema,
      count: admincinema.count,
      loading: loading["/admincinema/VIEW_CINEMA"],
      lastPage: admincinema.lastPage,
    })
  );
  console.log("cinemas======>", cinema);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [detail, setDetail] = useState(false);
  useEffect(() => {
    dispatch(viewCinema({ page, category }));
    return () => {
      dispatch(initialize());
    };
  }, [page, category]);

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

  return <AdminCinema 
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
  />;
};
export default AdminCinemaContainer;

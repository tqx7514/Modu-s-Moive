import styled from "styled-components";
import React, { useEffect } from "react";
import IndexCarousel from "../common/IndexCarousel";
import MovielistCarousel from "../common/MovielistCarousel";
import HeaderContainer from "../../containers/common/HeaderContainer";
import {
  useSelector,
  useDispatch,
} from "../../../node_modules/react-redux/es/exports";
import { listMovie } from "../../modules/currentmovie";
import { Link } from "../../../node_modules/react-router-dom/dist/index";

const MainInfo = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 50px 0 0 0;
  .main_specialCinema {
    position: relative;
    margin-bottom: 33px;

    .sec_tit {
      border-bottom: 1px dashed #d9d9d9;
      padding-bottom: 10px;
      font-size: 17px;
      margin-bottom: 10px;
    }
  }

  .special_wrap {
    list-style: none;
    padding: 16px 0;
    white-space: nowrap;
    overflow: hidden;
    li {
      display: inline-block;
      vertical-align: middle;
      padding-left: 13px;
    }
  }
  .btn_txt_more.ty2 {
    position: absolute;
    right: 0;
    top: 5px;
    background-position: right 3.5px;
    display: inline-block;
    background: url("/arr_rg_6.png") no-repeat right 2px;
    border: 0 none;
    width: auto;
    padding: 0 10px 0 0;
    color: #666666;
    font-size: 10px;
    cursor: pointer;
  }
  .main_eventlist {
    position: relative;
    margin-bottom: 33px;
    .sec_tit {
      border: none;
      padding-bottom: 10px;
    }
  }
  .event_wrap {
    position: relative;
    height: 512px;
    margin-bottom: 0;
  }
  .img_1st_wrap {
    margin-left: -11px;
    list-style: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin: 0;
    padding: 0;
    li {
      display: list-item;
      text-align: -webkit-match-parent;
      position: relative;
      margin: 0 0 55px 19px;
      margin-left: 11px;
      margin-bottom: 11px;
    }
  }

  .img_w_01 {
    width: 183px;
    height: 250px;
    float: left;
    border: 1px solid black;
  }
  .img_w_02 {
    width: 286px;
    height: 250px;
    float: left;
    border: 1px solid black;
  }
  .img_w_03 {
    width: 284px;
    height: 511px;
    border: 1px solid black;
  }
  .fl_r {
    float: right !important;
  }
  .img_w_04 {
    width: 478px;
    height: 250px;
    float: left;
    position: relative;
    border: 1px solid black;
  }
  .main_count_wrap.premiere {
    margin-top: 15px;
    margin-bottom: 53px;
    position: relative;
    .sec_tit {
      border: none;
      padding-bottom: 10px;
    }
  }
  .premiere_wrap {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
  }
  .Link_event {
    display: block;
    overflow: hidden;
    border-radius: 4px;
    width: 319px;
    text-decoration: none;
    cursor: pointer;
  }
  .mid_menu_wrap {
    position: relative;
    font-size: 0;
    margin-bottom: 50px;
    display: flex;
  }
  .mid_itm {
    display: inline-block;
    width: 187px;
    height: 133px;
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border: none;
      vertical-align: top;
      overflow-clip-margin: content-box;
      overflow: clip;
    }
  }
  .maint_count_wrap {
    position: relative;
  }
  .main_cont_wrap.notice {
    margin: 0;
    position: relative;
    border-bottom: 1px solid #aaa;

    .sec_tit {
      display: inline-block;
      border: none;
      padding-bottom: 10px;
      &::after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 13px;
        background: #707070;
        margin: 0 20px;
        vertical-align: middle;
        border: none;
      }
    }
  }
  .rolling_menu_wrap {
    position: relative;
    display: inline-block;
    width: 840px;
    height: 15px;
    overflow: hidden;
    vertical-align: middle;
  }
  .rolling_menu {
    li {
      height: 15px;
      line-height: 15px;
      display: list-item;
      text-align: -webkit-match-parent;
    }
  }
  .banner_wrap {
    padding-top: 70px;
    text-align: center;
  }
  .banner_01 {
    margin-bottom: 50px;
  }
`;



const Index = () => {
  const dispatch = useDispatch();
  const { currentmovielist } = useSelector((state) => state.movielist);
  console.log("123412341234", currentmovielist);

  useEffect(() => {
    dispatch(listMovie());
  }, []);

  return (
    <>
    <HeaderContainer />
      <IndexCarousel currentmovielist={currentmovielist} />
      <MovielistCarousel currentmovielist={currentmovielist} />
      <MainInfo>
        <div className="main_specialCinema">
          <div className="sec_tit">스페셜관</div>
          <ul className="special_wrap">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
          <button className="btn_txt_more ty2">더보기</button>
        </div>
        <div className="main_eventlist">
          <div className="sec_tit">이벤트</div>
          <div className="event_wrap">
            <ul className="img_1st_wrap">
              <li className="img_w_01">a</li>
              <li className="img_w_01">a</li>
              <li className="img_w_02">a</li>
              <li className="fl_r img_w_03">a</li>
              <li className="img_w_04">a</li>
              <li className="img_w_01">a</li>
            </ul>
          </div>
          <button className="btn_txt_more ty2">더보기</button>
        </div>
        <div className="main_count_wrap premiere">
          <div className="sec_tit">시사회/무대인사</div>
          <ul className="premiere_wrap">
            <li>
              <Link className="Link_event">1</Link>
            </li>
            <li>
              <Link className="Link_event">1</Link>
            </li>
            <li>
              <Link className="Link_event">1</Link>
            </li>
          </ul>
          <button className="btn_txt_more ty2">더보기</button>
        </div>
        <div className="mid_menu_wrap">
          <Link className="mid_itm">
            <img src="/3423e358b74d49d5b12867c7d9c6f6a8.png" alt="할인안내" />
          </Link>
          <Link className="mid_itm">
            <img src="/16b056e5e6a04c609b94a5c21e786d3b.png" alt="할인안내" />
          </Link>
          <Link className="mid_itm">
            <img src="/9fd4a77cd6a44a39aa35d07e5bb8a010.png" alt="할인안내" />
          </Link>
          <Link className="mid_itm">
            <img src="/3633088df0644062b53cd88b34067895.png" alt="할인안내" />
          </Link>
          <Link className="mid_itm">
            <img src="/9c4e2721ecdd488d86df6d27e3c2a000.png" alt="할인안내" />
          </Link>
        </div>
        <div className="main_cont_wrap notice">
          <div className="sec_tit">공지사항</div>
          <div className="rolling_menu_wrap">
            <ul className="rolling_menu">
              <li>
                <Link>
                  롯데시네마 영상정보처리기기 운영 및 관리방침 개정 안내
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn_txt_more ty2">더보기</button>
        </div>
        <div className="banner_wrap">
          <div className="banner_01">
            <Link>
              <img src="/Conan_980180.jpg" alt="" />
            </Link>
          </div>
        </div>
      </MainInfo>
    </>
  );
};
export default Index;

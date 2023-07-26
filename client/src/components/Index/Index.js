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
    .padding_li{
      padding-left: 13px;
    }
    li {
      display: inline-block;
      vertical-align: middle;
      padding-left: 37px;
    }
  }
  .btn_txt_more.ty2 {
    position: absolute;
    right: 0;
    top: 5px;
    background-position: right 3.5px;
    display: inline-block;
    background: url("/arr_rg_6.png") no-repeat right 4px;
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
    img{
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
    }
  }

  .img_w_01 {
    width: 183px;
    height: 250px;
    float: left;
  }
  .img_w_02 {
    width: 286px;
    height: 250px;
    float: left;
  }
  .img_w_03 {
    width: 284px;
    height: 511px;
  }
  .fl_r {
    float: right !important;
  }
  .img_w_04 {
    width: 478px;
    height: 250px;
    float: left;
    position: relative;
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
    text-align: center;
    li {
      display: inline-block;
    }
    img{
      width: 100%;
      padding: 10px;
    }
  }
  .Link_event {
    display: block;
    overflow: hidden;
    border-radius: 4px;
    width: 312px;
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
      <MovielistCarousel 
        className="main"
        currentmovielist={currentmovielist} 
      />
      <MainInfo>
        <div className="main_specialCinema">
          <div className="sec_tit">스페셜관</div>
          <ul className="special_wrap">
            <li className="padding_li"><Link><img src="/cd746f8b4a544f33988d6810ba2934cd.png" alt="샤롯데바로가기" /></Link></li>
            <li><Link><img src="/0df5043330d7485b8081dc2d1bebaa3a.png" alt="수퍼플렉스바로가기" /></Link></li>
            <li><Link><img src="/cf8b080e65254806a2bd54aa4324920b.png" alt="수퍼s바로가기" /></Link></li>
            <li><Link><img src="/1ea3eb09cb8e44d2b18f4f0a8fb6bbfa.png" alt="수퍼4Ds바로가기" /></Link></li>
            <li><Link><img src="/74093cf4217c4e89a582a24d5cf9dee2.png" alt="컬러리움바로가기" /></Link></li>
            <li><Link><img src="/c97b800479e04c899e4f0cd28a491f99.png" alt="씨네컴포트바로가기" /></Link></li>
            <li><Link><img src="/85b66189642e4a78af74e2fb7da75d29.png" alt="씨네패밀리바로가기" /></Link></li>
            <li><Link><img src="/615a9be3c6ae432888a9ca8631ede4d9.png" alt="씨네커플바로가기" /></Link></li>            
          </ul>
          <button className="btn_txt_more ty2">더보기</button>
        </div>
        <div className="main_eventlist">
          <div className="sec_tit">이벤트</div>
          <div className="event_wrap">
            <ul className="img_1st_wrap">
              <li className="img_w_01"><Link><img src="277d7ea99fb64ad0a24047ead3ace37c.jpg" alt="이벤트1" /></Link></li>
              <li className="img_w_01"><Link><img src="e01356685a7e49b8a36cd7ed59b1aef5.jpg" alt="이벤트1-2" /></Link></li>
              <li className="img_w_02"><Link><img src="92b7d192d8fc45dcae1f2cf595ebcaf1.jpg" alt="이벤트2" /></Link></li>
              <li className="fl_r img_w_03">
                <Link>
                  <img src="Hyundaicard_296511.jpg" alt="이벤트3" />
                </Link>
                </li>
              <li className="img_w_04"><Link><img src="36ba33ccb534428e925fd50eae8451a3.jpg" alt="이벤트4" /></Link></li>
              <li className="img_w_01"><Link><img src="1715d8b499034616ad99a9e392da5766.jpg" alt="이벤트1-3" /></Link></li>
            </ul>
          </div>
          <button className="btn_txt_more ty2">더보기</button>
        </div>
        <div className="main_count_wrap premiere">
          <div className="sec_tit">제휴/할인</div>
          <ul className="premiere_wrap">
            <li>
              <Link className="Link_event"><img src="/6cb00ba68c85451794a5cfd5a2504887.jpg" alt="제휴/할인1" /></Link>
            </li>
            <li>
              <Link className="Link_event"><img src="/4948d0472fae41af9436256a084e8b39.jpg" alt="제휴/할인2" /></Link>
            </li>
            <li>
              <Link className="Link_event"><img src="/9c8196fa83894fbdb69201f9d4c8fcf1.jpg" alt="제휴/할인3" /></Link>
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
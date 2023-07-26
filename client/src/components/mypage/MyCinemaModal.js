import styled from "styled-components";
import React, { useState, useEffect } from "react";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const Title = styled.div`
  position: relative;
  height: 54px;
  line-height: 58px;
  border-bottom: 1px solid #ccc;
  color: white;
  text-align: center;
  h4 {
    font-size: 18px;
    color: black;
  }
  button {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 19px;
    height: 19px;
    border: none;
    text-indent: -9999em;
    background: transparent url("/close_19.png") no-repeat 0 0;
    font-size: 12px;
    color: black;
    cursor: pointer;
  }
`;
const Map = styled.div`
  padding-top: 30px;
  p {
    line-height: 19px;
    margin-bottom: 18px;
    padding-left: 20px;
    font-size: 13px;
    color: black;
    background: url("/location_pointer.png") no-repeat 0 0;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 25px;
`;

const { kakao } = window;

const CinemaModal = ({ oncloseModal, addr }) => {
  console.log("1", oncloseModal);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(addr, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <Modal>
      <ModalContent>
        <Title>
          <h4>지도</h4>
          <button onClick={oncloseModal}>닫기</button>
        </Title>
        <Map>
          <p>{addr}</p>
          <div id="map" style={{ width: "500px", height: "500px" }}></div>
        </Map>
      </ModalContent>
    </Modal>
  );
};

export default CinemaModal;

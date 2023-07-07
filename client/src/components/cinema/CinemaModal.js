import styled from "styled-components";
import React, {useState, useEffect} from "react";

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
`;

const { kakao } = window;

const CinemaModal = ({oncloseModal}) => {
    console.log("1", oncloseModal);

    useEffect(() => {
        const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();
    

    geocoder.addressSearch("대구광역시 동구 율하동 1117 번지", function(
        result,
        status
    ) {
        if(status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new kakao.maps.Marker({
                map: map,
                position: coords,
            });

            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">대구광역시 동구 율하동 1117 번지</div>`,
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
        }
    });
    }, [])

    return (
        <Modal>
          <ModalContent>
            <div>
              <h1>지도</h1>
              <button onClick={oncloseModal}>닫기</button>
            </div>
            <div id="map" style={{ width: "500px", height: "500px" }}></div>
          </ModalContent>
        </Modal>
    )

}

export default CinemaModal;



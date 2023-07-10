import styled from "styled-components";
import React, {useState, useEffect} from "react";

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
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 18px;
    h1{
        margin: 0;
    }
    button{
        margin-left: auto;
    }
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
`;

const { kakao } = window;

const CinemaModal = ({oncloseModal, cinema}) => {
    console.log("1", oncloseModal);

    useEffect(() => {
        const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

    const geocoder = new kakao.maps.services.Geocoder();
    

    geocoder.addressSearch(cinema, function(
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
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${cinema}</div>`,
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
        }
    });
    }, [])

    return (
        <Modal>
          <ModalContent>
            <Title>
              <h1>지도</h1>
              <button onClick={oncloseModal}>
                <img src="close_13_gry.png"/>
              </button>
            </Title>
            <div id="map" style={{ width: "500px", height: "500px" }}></div>
          </ModalContent>
        </Modal>
    )

}

export default CinemaModal;



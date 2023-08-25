"use client";

import { useEffect, useState } from "react";

function Map({ addr1 }) {

  
    useEffect(() => {
        const mapScript = document.createElement("script");

        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;

        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3, // 지도의 확대 레벨
                };
                new window.kakao.maps.Map(mapContainer, mapOption);

                var geocoder = new window.kakao.maps.services.Geocoder();

                var callback = function (result, status) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        console.log(result);
                    }
                };

                if (addr1) {
                    geocoder.addressSearch(`${addr1}`, callback);
                }
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
    }, []);

    return <div id="map" style={{ width: "1000px", height: "1000px" }}></div>;
}

export default Map;

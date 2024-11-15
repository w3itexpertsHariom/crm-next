import React, { useEffect, useState } from 'react';
import WorldMap from "react-svg-worldmap";

import { IMAGES } from '@/constant/theme';
import Image from 'next/image';


const listBlog = [
    { title: "India", image: IMAGES.India, barvalue: '80%' },
    { title: "Canada", image: IMAGES.Canada, barvalue: '30%' },
    { title: "Russia", image: IMAGES.Russia, barvalue: '50%' },
    { title: "United Kingdom", image: IMAGES.Uk, barvalue: '40%' },
    { title: "Australia", image: IMAGES.Aus, barvalue: '70%' },
    { title: "United States", image: IMAGES.Usa, barvalue: '65%' },
    { title: "Germany", image: IMAGES.Germany, barvalue: '70%' },
    { title: "UAE", image: IMAGES.Uae, barvalue: '45%' },
    { title: "China", image: IMAGES.China, barvalue: '35%' },
];

const data = [
    { country: "cn", value: 1389618778 },
    { country: "in", value: 1311559204 },
    { country: "us", value: 331883986 },
    { country: "id", value: 264935824 },
    { country: "pk", value: 210797836 },
    { country: "br", value: 210301591 },
    { country: "ng", value: 208679114 },
    { country: "bd", value: 161062905 },
    { country: "ru", value: 141944641 },
    { country: "mx", value: 127318112 },
];


const getStyle = ({
    minValue,

}) => ({

    stroke: "rgb(239, 242, 244)",
    cursor: "pointer",
});
const ActiveUserMap = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <div className="card overflow-hidden">
                <div className="card-header border-0">
                    <h4 className="heading mb-0">Active users</h4>
                </div>
                <div className="card-body pe-0">
                    <div className="row">
                        <div className="col-xl-8 active-map-main">
                            <div id="world-map" className="active-map text-center">
                                {isClient && (
                                    <WorldMap
                                        size="md"
                                        data={data}
                                        styleFunction={getStyle}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-xl-4 active-country dz-scroll">
                            {listBlog.map((item, i) => (
                                <div className="country-list" key={i}>
                                    <Image src={item.image} alt="small" />
                                    <div className="progress-box mt-0">
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-0 c-name">{item.title}</p>
                                            <p className="mb-0">{item.barvalue}</p>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" style={{ width: item.barvalue, height: "5px", borderRadius: "4px" }} ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActiveUserMap;
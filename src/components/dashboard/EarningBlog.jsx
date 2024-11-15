import React from 'react';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const EarningChart = loadable(() =>
	pMinDelay(import("./EarningChart"), 1000)
);

const EarningBlog = () => {
    return (
        <>
            <div className="card">
                <div className="card-header border-0 pb-0">
                    <h4 className="heading mb-0">Total Earning</h4>
                </div>                
                <EarningChart />
            </div>
        </>
    );
};

export default EarningBlog;
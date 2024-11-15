import React from 'react';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const ProjectOverviewChart = loadable(() =>
	pMinDelay(import("./ProjectOverviewChart"), 1000)
);

const ProjectOverviewTab = () => {
    return (
        <>
            <div className="card overflow-hidden">                
                <ProjectOverviewChart />
            </div>   
        </>
    );
};

export default ProjectOverviewTab;
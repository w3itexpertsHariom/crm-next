"use client"
import { useState } from 'react';
// import CardWidget from './CardWidget';
// import ProjectOverviewTab from './ProjectOverviewTab';
import ToDoList from './ToDoList';
// import EarningBlog from './EarningBlog';
import ActiveProjects from './ActiveProjects';
// import ActiveUserMap from './ActiveUserMap';
import ChatElementBlog from './ChatElementBlog';
import BestSellerTable from './BestSellerTable';
import UpcomingBlog from './UpcomingBlog';
// import ProjectStatusBlog from './ProjectStatusBlog';
// import EmployeesTableList from './EmployeesTableList';


export default function HomeComponent(){
    const [cardChart, setCardChart]  = useState();
    return(
        <div className="row">
            <div className="col-xl-9 wid-100">
                <div className="row">
                    {/* <CardWidget /> */}
                    <div className="col-xl-8">
                        {/* <ProjectOverviewTab /> */}
                    </div>
                    <div className="col-xl-4">
                        <ToDoList />
                    </div>
                </div>
            </div>
            <div className="col-xl-3 t-earn">
                {/* <EarningBlog /> */}
            </div>
            <div className="col-xl-6 active-p">
                <ActiveProjects />
            </div>
            <div className="col-xl-6 col-md-6 flag">
                {/* <ActiveUserMap /> */}
            </div>
            <div className="col-xl-4 col-md-6 chat-map">
                <ChatElementBlog />
            </div>
            <div className="col-xl-5 bst-seller">
                <BestSellerTable />
            </div>
            <div className="col-xl-3 col-md-6 up-shd">
                <UpcomingBlog />
            </div>
            <div className="col-xl-3 col-md-6 up-shd">
                {/* <ProjectStatusBlog  title="Projects Status"/> */}
            </div>
            <div className="col-xl-9 bst-seller">
                {/* <EmployeesTableList /> */}
            </div>
        </div>	
    )
}
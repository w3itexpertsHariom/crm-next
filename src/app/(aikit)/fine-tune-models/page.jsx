"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import {Tab, Nav} from 'react-bootstrap';

//import
import PageTitle from '@/layouts/PageTitle';
import MainContent from '@/components/aikit/MainContent';
import TopMenus from '@/components/aikit/TopMenus';
import FineTuneJob from '@/components/aikit/FineTuneJob';
import Prompts from '@/components/aikit/Prompts';

const tableData = [
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},
    { modal:'Tiney'},
    { modal:'lion'},
    { modal:'Tegr'},
    { modal:'Fres'},
    { modal:'Tiney'},    
];

const numb = [3, 6, 13, 15];

const FineTuneModels = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPage = 10;
    const lastIndex = currentPage * recordsPage;
    const firstIndex = lastIndex - recordsPage;
    const records = tableData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(tableData.length / recordsPage)
    const number = [...Array(npage + 1).keys()].slice(1)
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    return (
        <>
            <PageTitle activeMenu={'Fine-tune Models'} motherMenu={'AiKit'} />
            <div className="container-fluid">
                <div className="row">
					<div className="col-xl-12">                        
                        <MainContent  detail="This is a demo of AIKit plugin made for you to test the experience of using the plugin." 
                            subtitle={`This is a demo of AIKit plugin made for you to test the experience of using the plugin. Text & images generated in this demo are dummy. In real life, AIKit will call OpenAI API and generate relevant text and images based on your prompts. `}
                        />                            
						<TopMenus  id={6}/>
                        <Tab.Container defaultActiveKey={'Job'}>
                            <div className="card h-auto">
                                <div className="card-body ai-tabs-1 py-2">
                                    <Nav as="ul" className="nav nav-tabs align-items-end">
                                        <Nav.Item as="li" >
                                            <Nav.Link className="nav-link" eventKey="Create" type="button">Create Fine-tune Job</Nav.Link >
                                        </Nav.Item>
                                        <Nav.Item as="li" >
                                            <Nav.Link eventKey="Job" type="button" >Jobs<span className="badge badge-circle badge-light light ms-2">5</span></Nav.Link >
                                        </Nav.Item>								  
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey={'Create'}>
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <FineTuneJob />
                                        </div>
                                        <div className="col-xl-8">
                                            <Prompts />
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'Job'}>
                                    <div className="card">
                                        <div className="card-body p-0">                                           
                                            <div id="fine-tbl_wrapper" className="table-responsive dataTables_wrapper active-projects style-1">								
                                                <table  id="empoloyees-tblwrapper" className="table dataTable dataTables_wrapper no-footer mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Model Name Suffix</th>
                                                            <th>Model Name</th>
                                                            <th>Base Model</th>
                                                            <th>Date created</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {records.map((item, ind)=>(
                                                            <tr key={ind}>                                                                
                                                                <td className="text-black">Write a rat story</td>
                                                                <td>
                                                                    {item.modal}
                                                                </td>
                                                                
                                                                <td>hourly</td>
                                                                <td>4:50 AM Nov 11, 2023</td>
                                                                <td>
                                                                {
                                                                  numb.includes(ind) ?  
                                                                  <span className="badge badge-success">Success</span>
                                                                  :
                                                                  <span className="badge badge-light">Pending training data</span>
                                                                }
                                                                </td>
                                                                <td>
                                                                    <Link href={"#"} scroll={false} className="btn btn-primary light btn-sharp">
                                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            <path d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z" stroke="var(--primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                        </svg>
                                                                    </Link>{" "}
                                                                    <Link href={"#"} scroll={false} className="btn btn-danger light btn-sharp">
                                                                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M1.875 4.25H3.125H13.125" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M6.25 7.375V11.125" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            <path d="M8.75 7.375V11.125" stroke="#FF5B5B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                        </svg>
                                                                    </Link>
                                                                    
                                                                </td>
                                                            </tr>
                                                        ))}											
                                                    </tbody>
                                                </table>
                                                <div className="d-sm-flex text-center justify-content-between align-items-center">
                                                    <div className='dataTables_info'>
                                                        Showing {lastIndex - recordsPage + 1} to{" "}
                                                        {lastIndex}
                                                        {" "}of {tableData.length} entries
                                                    </div>
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers justify-content-center"
                                                        id="example2_paginate"
                                                    >
                                                        <Link
                                                            className="paginate_button previous disabled"
                                                            href="#" scroll={false}
                                                            onClick={prePage}
                                                        >
                                                            <i className="fa-solid fa-angle-left" />
                                                        </Link>
                                                        <span>
                                                            {number.map((n, i) => (
                                                                <Link href="#" scroll={false} className={`paginate_button ${currentPage === n ? 'current' : ''} `} key={i}
                                                                    onClick={() => changeCPage(n)}
                                                                >
                                                                    {n}

                                                                </Link>
                                                            ))}
                                                        </span>
                                                        <Link
                                                            className="paginate_button next"
                                                            href="#" scroll={false}
                                                            onClick={nextPage}
                                                        >
                                                            <i className="fa-solid fa-angle-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FineTuneModels;
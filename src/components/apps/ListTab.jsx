"use client"
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import { CSVLink } from 'react-csv';
import { IMAGES } from '@/constant/theme';
import { Dropdown } from 'react-bootstrap';
import Image from 'next/image';

const tableData = [
    {emplid: '1001', postion:'Software Engineer', week:'Monday', date:'12 Jan 2023', image:IMAGES.contact1, title:'Ricky Antony', email: 'ra@gmail.com'},    
    {emplid: '1002', postion:'App Developer', week:'Tuesday', date:'14 Feb 2023', image:IMAGES.contact2, title:'Ankites Risher', email: 'abc@gmail.com'},    
    {emplid: '1003', postion:'Computer Engineer', week:'Wednesday', date:'16 March 2023', image:IMAGES.contact3, title:'Ricky M', email: 'pqr@gmail.com'},    
    {emplid: '1004', postion:'Software Engineer', week:'Tuesday', date:'15 April 2023', image:IMAGES.contact1, title:'Elijah James', email: 'stuy@gmail.com',},    
    {emplid: '1005', postion:'Computer Engineer', week:'Friday', date:'13 May 2023', image:IMAGES.contact2, title:'Honey Risher', email: 'xyz@gmail.com'},    
    {emplid: '1006', postion:'App Developer', week:'Monday', date:'21 June 2023', image:IMAGES.contact2, title:'Honey Risher', email: 'xyz@gmail.com'},    
    {emplid: '1007', postion:'Software Engineer', week:'Tuesday', date:'22 July 2023', image:IMAGES.contact2, title:'Ankites Risher', email: 'abc@gmail.com'},    
    {emplid: '1008', postion:'Computer Engineer', week:'Wednesday', date:'24 Aug 2023', image:IMAGES.contact3, title:'Ricky M', email: 'pqr@gmail.com'},    
    {emplid: '1009', postion:'Software Engineer', week:'Monday', date:'20 Sep 2023', image:IMAGES.contact1, title:'Ricky Antony', email: 'ra@gmail.com',},    
    {emplid: '1010', postion:'Computer Engineer', week:'Tuesday', date:'02 Oct 2023', image:IMAGES.contact1, title:'Elijah James', email: 'stuy@gmail.com',},   
    {emplid: '1011', postion:'App Developer', week:'Friday', date:'03 Nov 2023', image:IMAGES.contact2, title:'Ankites Risher', email: 'abc@gmail.com'},    
    {emplid: '1012', postion:'Software Engineer', week:'Monday', date:'05 Dec 2023', image:IMAGES.contact1, title:'Ricky Antony', email: 'ra@gmail.com',},    
    {emplid: '1013', postion:'Computer Engineer', week:'Wednesday', date:'07 Jan 2023', image:IMAGES.contact1, title:'Elijah James', email: 'stuy@gmail.com',},    
    {emplid: '1014', postion:'App Developer', week:'Friday', date:'02 Feb 2023', image:IMAGES.contact3, title:'Ricky M', email: 'pqr@gmail.com'},    
    {emplid: '1015', postion:'Software Engineer', week:'Monday', date:'09 March 2023', image:IMAGES.contact2, title:'Honey Risher', email: 'xyz@gmail.com'},    
];

const headersTitle = [
    {label:'Employee ID', key:'emplid'}, 
    {label:'Postion', key:'postion'}, 
    {label:'Employee Name', key:'title'}, 
    {label:'Email Address', key:'email'}, 
    {label:'Date', key:'date'}, 
    {label:'Status', key:'week'}, 
]

const csvlink = {
    headers : headersTitle,
    data : tableData,
    filename: "csvfile.csv"
}

const ListTab = () => {       
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPage = 12;
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
    const checkboxFun = (type) => {
        setTimeout(() => {            
            const checkbox = document.querySelectorAll(".sorting_20 input");
            const motherCheckBox = document.querySelector(".sorting_asc_11 input");
            for (let i = 0; i < checkbox.length; i++) {
                const element = checkbox[i];
                if (type === "all") {
                    if (motherCheckBox.checked) {
                        element.checked = true;
                    } else {
                    element.checked = false;
                    }
                } else {
                    if (!element.checked) {
                    motherCheckBox.checked = false;
                    break;
                    } else {
                        motherCheckBox.checked = true;
                    }
                }
            }
        }, 100);
    };
    return (
        <>
            <div className="card">            
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1 ItemsCheckboxSec shorting">   
                        <div className="tbl-caption">
                            <h4 className="heading mb-0">User List</h4>
                            <div>
                                <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-2"><i className="fa-solid fa-file-excel" /> Export Report</CSVLink>                                 
                            </div>
                        </div>          
                        <div id="user-tbl_wrapper" className="dataTables_wrapper no-footer">
                            <table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                <thead>
                                    <tr>
                                        <th className="sorting_asc_11" >
                                            <div className="form-check custom-checkbox ms-0">
                                                <input type="checkbox" className="form-check-input checkAllInput" required="" 
                                                    onClick={() => checkboxFun("all")}
                                                />
                                                <label className="form-check-label" htmlFor="checkAll"></label>
                                            </div>
                                        </th>
                                        <th>User</th>
                                        <th>Email</th>
                                        <th>Position</th>
                                        <th>Date Of Joining</th>
                                        <th>Last Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.map((item, index)=>(
                                        <tr key={index}>
                                            <td className="sorting_20">
                                                <div className="form-check11custom-checkbox">
                                                    <input type="checkbox" className="form-check-input" 
                                                        id={`user${index+211}`} required="" 
                                                        onClick={() => checkboxFun()}
                                                    />
                                                    <label className="form-check-label" htmlFor={`user${index+211}`}></label>
                                                </div>
                                            </td>                                            
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={item.image} className="avatar rounded-circle" alt="" />
                                                    <p className="mb-0 ms-2">{item.title}</p>	
                                                </div>
                                            </td>
                                            <td>{item.email}</td>
                                            <td>{item.postion}</td>
                                            <td>{item.date}</td>
                                            <td>{item.week}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle as="div" className="btn-link i-false">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#737B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#737B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#737B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu-right" align="end">
                                                        <Dropdown.Item>Edit</Dropdown.Item>
                                                        <Dropdown.Item>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
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
            </div>   
        </>
    );
};


export default ListTab;
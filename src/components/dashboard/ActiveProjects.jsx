"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CSVLink } from 'react-csv';
import { IMAGES } from '@/constant/theme';

const tableData = [
    { name: "Batman", name2: 'Liam Risher', profile: IMAGES.contact1, progresStyle: "primary", progresValue: "53%", assigne: '3', status: 'Inprogress', duedate: '01 May 2023' },
    { name: "Mivy App", name2: 'Honey Risher', profile: IMAGES.contact2, progresStyle: "primary", progresValue: "50%", assigne: '3', status: 'Inprogress', duedate: '08 June 2023' },
    { name: "Crypto App", name2: 'Ankites Risher', profile: IMAGES.contact1, progresStyle: "danger", progresValue: "45%", assigne: '2', status: 'Pending', duedate: '14 Sep 2023' },
    { name: "Bender Project", name2: 'Oliver Noah', profile: IMAGES.contact8, progresStyle: "danger", progresValue: "30%", assigne: '3', status: 'Pending', duedate: '22 Oct 2023' },
    { name: "Canary", name2: 'Elijah James', profile: IMAGES.contact2, progresStyle: "success", progresValue: "40%", assigne: '4', status: 'Completed', duedate: '16 Nov 2023' },

    { name: "Canary", name2: 'Elijah James', profile: IMAGES.contact2, progresStyle: "success", progresValue: "40%", assigne: '4', status: 'Completed', duedate: '16 Nov 2023' },
    { name: "Mivy App", name2: 'Honey Risher', profile: IMAGES.contact2, progresStyle: "primary", progresValue: "50%", assigne: '3', status: 'Inprogress', duedate: '08 June 2023' },
    { name: "Batman", name2: 'Liam Risher', profile: IMAGES.contact1, progresStyle: "primary", progresValue: "53%", assigne: '3', status: 'Inprogress', duedate: '01 May 2023' },
    { name: "Bender Project", name2: 'Oliver Noah', profile: IMAGES.contact8, progresStyle: "danger", progresValue: "30%", assigne: '3', status: 'Pending', duedate: '22 Oct 2023' },
    { name: "Crypto App", name2: 'Ankites Risher', profile: IMAGES.contact1, progresStyle: "danger", progresValue: "45%", assigne: '2', status: 'Pending', duedate: '14 Sep 2023' },

    { name: "Mivy App", name2: 'Honey Risher', profile: IMAGES.contact2, progresStyle: "primary", progresValue: "50%", assigne: '3', status: 'Inprogress', duedate: '08 June 2023' },
    { name: "Batman", name2: 'Liam Risher', profile: IMAGES.contact1, progresStyle: "primary", progresValue: "53%", assigne: '3', status: 'Inprogress', duedate: '01 May 2023' },
    { name: "Bender Project", name2: 'Oliver Noah', profile: IMAGES.contact8, progresStyle: "danger", progresValue: "30%", assigne: '3', status: 'Pending', duedate: '22 Oct 2023' },
    { name: "Canary", name2: 'Elijah James', profile: IMAGES.contact2, progresStyle: "success", progresValue: "40%", assigne: '4', status: 'Completed', duedate: '16 Nov 2023' },
    { name: "Crypto App", name2: 'Ankites Risher', profile: IMAGES.contact1, progresStyle: "danger", progresValue: "45%", assigne: '2', status: 'Pending', duedate: '14 Sep 2023' },
];


const headers = [
    { label: "Project Name", key: "name" },
    { label: "Project Lead", key: "name2" },
    { label: "Status", key: "status" },
    { label: "Due Date", key: "duedate" },
];

const csvlink = {
    headers: headers,
    data: tableData,
    filename: "csvfile.csv"
}

const ActiveProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPage = 5;
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

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
      }, []);

    const chackboxFun = (type) => {
        setTimeout(()=>{
            const chackbox = document.querySelectorAll(".sorting_1 input");
            const motherChackBox = document.querySelector(".sorting_asc input");
            for (let i = 0; i < chackbox.length; i++) {
                const element = chackbox[i];
                if (type === "all") {
                    if (motherChackBox.checked) {
                        element.checked = true;
                    } else {
                        element.checked = false;
                    }
                } else {
                    if (!element.checked) {
                        motherChackBox.checked = false;
                        break;
                    } else {
                        motherChackBox.checked = true;
                    }
                }
            }
        },100)
    };
    return (
        <>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects shorting">

                        <div className="tbl-caption d-flex justify-content-between flex-wrap align-items-center">
                            <h4 className="heading mb-0">Active Projects</h4>
                            <div>
                                {isClient && (
                                 <CSVLink {...csvlink} className="btn btn-primary light btn-sm "><i className="fa-solid fa-file-excel" /> Export Report </CSVLink>
                                )}
                            </div>
                        </div>
                        <div id="projects-tbl_wrapper" className="dataTables_wrapper no-footer">
                            <table id="projects-tbl" className="table ItemsCheckboxSec dataTable no-footer mb-0">
                                <thead>
                                    <tr>
                                        <th className="sorting_asc" >
                                            <div className="form-check custom-checkbox ms-0">
                                                <input type="checkbox" className="form-check-input checkAllInput" required=""
                                                    onClick={() => chackboxFun("all")}
                                                />
                                                <label className="form-check-label" htmlFor="checkAll"></label>
                                            </div>
                                        </th>
                                        <th>Project Name</th>
                                        <th>Project Lead</th>
                                        <th>Progress</th>
                                        <th>Assignee</th>
                                        <th>Status</th>
                                        <th>Due Date</th>
                                    </tr>
                                </thead>
                               
                                <tbody>
                                    {records.map((item, index) => (
                                        <tr key={index}>
                                            <td className="sorting_1">
                                            <div className="form-check custom-checkbox">
                                                <input type="checkbox" onClick={() => chackboxFun()}
                                                    className="form-check-input" id={`projectBox${index+1}`} required="" 
                                                />
                                                <label className="form-check-label" htmlFor={`projectBox${index+1}`}></label>
                                            </div>
                                        </td>
                                            <td>{item.name}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image src={item.profile} className="avatar rounded-circle" alt="" />
                                                    <p className="mb-0 ms-2">{item.name2}</p>
                                                </div>
                                            </td>
                                            <td className="pe-0">
                                                <div className="tbl-progress-box">
                                                    <div className="progress">
                                                        <div
                                                            className={`progress-bar bg-${item.progresStyle}`}
                                                            style={{ width: item.progresValue, height: "5px", borderRadius: "4px" }} >
                                                        </div>
                                                    </div>
                                                    <span className="text-primary">{item.progresValue}</span>
                                                </div>
                                            </td>
                                            <td className="pe-0">
                                                <div className="avatar-list avatar-list-stacked">
                                                    {
                                                        item.assigne === '2' ?
                                                            <>
                                                                <Image src={IMAGES.contact9} className="avatar rounded-circle" alt="" />
                                                                <Image src={IMAGES.contact2} className="avatar rounded-circle" alt="" />
                                                            </>

                                                            :

                                                            item.assigne === '3' ?
                                                                <>
                                                                    <Image src={IMAGES.contact5} className="avatar rounded-circle" alt="" />
                                                                    <Image src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
                                                                    <Image src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
                                                                </>

                                                                :
                                                                item.assigne === '4' ?
                                                                    <>
                                                                        <Image src={IMAGES.contact9} className="avatar rounded-circle" alt="" />
                                                                        <Image src={IMAGES.contact8} className="avatar rounded-circle" alt="" />
                                                                        <Image src={IMAGES.contact7} className="avatar rounded-circle" alt="" />
                                                                        <Image src={IMAGES.contact6} className="avatar rounded-circle" alt="" />
                                                                    </>
                                                                    :

                                                                    <Image src={IMAGES.contact1} className="avatar rounded-circle" alt="" />

                                                    }
                                                </div>
                                            </td>
                                            <td className="pe-0">
                                                <span className={`badge light border-0 badge-${item.progresStyle}`}>{item.status}</span>
                                            </td>
                                            <td>
                                                <span>{item.duedate}</span>
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

export default ActiveProjects;
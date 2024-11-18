"use client"
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import Select from 'react-select';
import Collapse from 'react-bootstrap/Collapse';

import PageTitle from '@/layouts/PageTitle';

const options = [
    { value: '2', label: 'Published' },
    { value: '3', label: 'Draft' },
    { value: '4', label: 'Trash' },
    { value: '5', label: 'Private' },
    { value: '6', label: 'Pending' }
]

const tableData = [
    {number:"1", title:"User Registration", date:'03 Nov, 2024'},
    {number:"2", title:"User Forgot Password", date:'04 Nov, 2024'},
    {number:"3", title:"User Activation", date:'05 Nov, 2024'},
    {number:"4", title:"User Login", date:'06 Nov, 2024'},
    {number:"5", title:"User Account Locked", date:'07 Nov, 2024'},    
    {number:"6", title:"User Forgot Password", date:'04 Nov, 2024'},
    {number:"7", title:"User Activation", date:'05 Nov, 2024'},
];

const EmailTemplate = () =>{
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPage = 7;
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
	
//     const [deleteItem, setDeleteItem] = useState(tableData);
//     const handleDelete = ind => {
//         setDeleteItem(oldValues => {
//           return oldValues.filter((_, i) => i !== ind)
//         })
//     }
    return(
        <>
            <PageTitle motherMenu={'CMS'} activeMenu="Email Template" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">                    
                        <div className="filter cm-content-box box-primary">
                            <div className={`content-title`}>
                                <div className="cpa">
                                    <i className="fas fa-filter me-2"></i>Filter
                                </div>
                                <div className="tools">
                                    <Link href={"#"} scroll={false} className={`SlideToolHeader ${open ? 'collapse' : 'expand' }`}
                                        onClick={() => setOpen(!open)}
                                    >
                                        <i className="fas fa-angle-up"></i>
                                    </Link>
                                </div>
                            </div>                      
                            <Collapse in={open}>
                                <div className="cm-content-body form excerpt">
                                    <div className="card-body pb-3">
                                        <div className="row">
                                            <div className="col-xl-3 col-xxl-6">
                                                <input type="text" className="form-control mb-xl-0 mb-3" id="exampleFormControlInput1" placeholder="Title" />
                                            </div>
                                            <div className="col-xl-3 col-xxl-6">                                            
                                                <Select 
                                                    isSearchable = {false}
                                                    options={options} className="custom-react-select mb-3 mb-xxl-0"
                                                />
                                            </div>
                                            <div className="col-xl-3 col-xxl-6">
                                                <input type="date" name="datepicker" className=" form-control mb-xxl-0 mb-3" />
                                            </div>
                                            <div className="col-xl-3 col-xxl-6">
                                                <button className="btn btn-primary me-2" title="Click here to Search" type="button"><i className="fa-sharp fa-solid fa-filter me-1"></i>Filter</button>
                                                <button className="btn btn-danger light" title="Click here to remove filter" type="button">Remove</button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </Collapse>   
                        </div>
                        <div className="mb-3">
                            <ul className="d-flex align-items-center">
                                <li><Link href={"/add-email"} className="btn btn-primary">New Email Template</Link></li>
                            </ul>
                        </div>
                        <div className="filter cm-content-box box-primary ">
                            <div className={`content-title`}>
                                <div className="cpa">
                                    <i className="far fa-envelope me-2"></i> Email Template List
                                </div>
                                <div className="tools">
                                    <Link href={"#"} scroll={false} className={`SlideToolHeader ${open2 ? 'collapse' : 'expand' }`}
                                        onClick={() => setOpen2(!open2)}
                                    >
                                        <i className="fas fa-angle-up"></i>
                                    </Link>
                                </div>
                            </div>
                            <Collapse in={open2}>
                                <div className="cm-content-body form excerpt">
                                    <div className="card-body py-3">
                                        <div className="table-responsive">
                                            <div id="content_wrapper" className="dataTables_wrapper no-footer">
                                                <table className="table table-responsive-lg table-striped table-condensed flip-content">
                                                    <thead>
                                                        <tr>
                                                            <th className='text-black'>S.No</th>
                                                            <th className='text-black'>Title</th>
                                                            <th className='text-black'>Status</th>
                                                            <th className='text-black'>Modified</th>
                                                            <th className="text-end text-black">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {records.map((item, ind)=>(
                                                            <tr key={ind}>
                                                                <td>{item.number}</td>
                                                                <td>{item.title}</td>
                                                                <td><Link href={"#"} scroll={false}  className=" btn btn-primary btn-sm content-icon status m-0"><i className="fa-solid fa-check"></i> </Link></td>
                                                                <td>{item.date}</td>
                                                                <td className='text-end'>
                                                                    <Link href={"/add-email"} className="btn btn-warning btn-sm content-icon">
                                                                        <i className="fa fa-edit"></i>
                                                                    </Link>
                                                                    <Link href={"#"} scroll={false} className="btn btn-danger btn-sm content-icon ms-1"
                                                                        onClick={()=>handleDelete(ind)}
                                                                    >
                                                                        <i className="fa-solid fa-trash"></i>
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
                                </div>
                            </Collapse> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmailTemplate;
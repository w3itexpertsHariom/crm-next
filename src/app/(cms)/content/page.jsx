"use client"
import React, { useState, useRef, useEffect } from 'react';
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
    { number: "1", title: "Privacy Policy" },
    { number: "2", title: "Contact Us" },
    { number: "3", title: "Price" },
    { number: "4", title: "Blog" },
    { number: "5", title: "Faq" },
    { number: "6", title: "About us" },
    { number: "7", title: "Portfolio" },
    { number: "8", title: "Schedule" },
    { number: "9", title: "Under Maintenance" },
    { number: "10", title: "Comming Soon" },
    { number: "11", title: "Faq" },
    { number: "12", title: "About us" },
    { number: "13", title: "Portfolio" },
];

const Content = () => {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPage = 8;
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

    
    // const [deleteItem, setDeleteItem] = useState(tableData);
    // const handleDelete = ind => {
    //     setDeleteItem(oldValues => {
    //         console.log(oldValues, 'data from table');
    //         return oldValues.filter((_, i) => i !== ind)
    //     })
    // }
    
    
    return (
        <>
            <PageTitle activeMenu={'Content'} motherMenu={'CMS'} />
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="filter cm-content-box box-primary">
                            <div className="content-title">
                                <div className="cpa">
                                    <i className="fas fa-filter me-2"></i>Filter
                                </div>
                                <div className="tools">
                                    <Link href={"#"} scroll={false} className={`SlideToolHeader ${open ? 'collapse' : 'expand'}`}
                                        onClick={() => setOpen(!open)}
                                    >
                                        <i className="fas fa-angle-up"></i>
                                    </Link>
                                </div>
                            </div>

                            <Collapse in={open}>
                                <div className="cm-content-body form excerpt">
                                    <div className="card-body">
                                        <div className="row filter-row">
                                            <div className="col-xl-3 col-sm-6">
                                                <input type="text" className="form-control mb-xl-0 mb-3" id="exampleFormControlInput1" placeholder="Title" />
                                            </div>
                                            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-3">
                                                <Select
                                                    isSearchable={false}
                                                    options={options}
                                                    className="custom-react-select  "
                                                />
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <input type="date" name="datepicker" className=" form-control mb-xl-0 mb-3" />
                                            </div>
                                            <div className="col-xl-3 col-sm-6">
                                                <button className="btn btn-primary me-2" title="Click here to Search" type="button"><i className="fa fa-search me-1"></i>Filter</button>
                                                <button className="btn btn-danger light" title="Click here to remove filter" type="button">Remove</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Collapse>
                        </div>
                        <div className="mb-3">
                            <Link href={"/add-content"} scroll={false} className="btn btn-primary">Add Content</Link>
                        </div>
                        <div className="filter cm-content-box box-primary">
                            <div className={`content-title`}>
                                <div className="cpa">
                                    <i className="fas fa-file-word me-2"></i>Contact List
                                </div>
                                <div className="tools">
                                    <Link href={"#"} scroll={false} className={`SlideToolHeader ${open2 ? 'collapse' : 'expand'}`}
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
                                                            <th className="text-black text-end">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {records.map((item, ind) => (
                                                            <tr key={ind}>
                                                                <td>{item.number}</td>
                                                                <td>{item.title}</td>
                                                                <td>Published</td>
                                                                <td>18 Feb, 2023</td>
                                                                <td className='text-end'>
                                                                    <Link href={"/add-content"} className="btn btn-warning btn-sm content-icon me-1">
                                                                        <i className="fa fa-edit" />
                                                                    </Link>
                                                                    <Link href={"#"} scroll={false} className="btn btn-danger btn-sm content-icon ms-1"
                                                                        // onClick={() => handleDelete(ind)}
                                                                    >
                                                                        <i className="fa fa-times" />
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
export default Content;
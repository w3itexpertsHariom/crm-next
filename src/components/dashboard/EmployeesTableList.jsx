import React, {useState, useRef} from 'react';
import Link from 'next/link';
import { CSVLink } from 'react-csv';
import { IMAGES } from '@/constant/theme';
import InviteCustomer from '@/constant/ModalList';
import EmployeeOffcanvas from '@/constant/EmployeeOffcanvas';
import Image from 'next/image';

const tableData = [
    {emplid: '1001', image:IMAGES.contact1, contact:'+12 123 456 7890', title:'Ricky Antony', email: 'ra@gmail.com', gender:'Female', location:'India', status:'Active'},    
    {emplid: '1002', image:IMAGES.contact2, contact:'+12 123 456 7890', title:'Ankites Risher', email: 'abc@gmail.com', gender:'Male', location:'Brazil', status:'Active'},    
    {emplid: '1003', image:IMAGES.contact3, contact:'+12 123 456 7890', title:'Ricky M', email: 'pqr@gmail.com', gender:'Male', location:'France', status:'Active'},    
    {emplid: '1004', image:IMAGES.contact1, contact:'+12 123 456 7890', title:'Elijah James', email: 'stuy@gmail.com', gender:'Female', location:'Dubai', status:'Active'},    
    {emplid: '1005', image:IMAGES.contact2, contact:'+12 123 456 7890', title:'Honey Risher', email: 'xyz@gmail.com', gender:'Male', location:'USA', status:'Active'},    
    {emplid: '1006', image:IMAGES.contact2, contact:'+12 123 456 7890', title:'Honey Risher', email: 'xyz@gmail.com', gender:'Male', location:'USA', status:'Active'},    
    {emplid: '1007', image:IMAGES.contact2, contact:'+12 123 456 7890', title:'Ankites Risher', email: 'abc@gmail.com', gender:'Male', location:'Brazil', status:'Active'},    
    {emplid: '1008', image:IMAGES.contact3, contact:'+12 123 456 7890', title:'Ricky M', email: 'pqr@gmail.com', gender:'Male', location:'France', status:'Active'},    
    {emplid: '1009', image:IMAGES.contact1, contact:'+12 123 456 7890', title:'Ricky Antony', email: 'ra@gmail.com', gender:'Female', location:'India', status:'Active'},    
    {emplid: '1010', image:IMAGES.contact1, contact:'+12 123 456 7890', title:'Elijah James', email: 'stuy@gmail.com', gender:'Female', location:'Dubai', status:'Active'},   
    {emplid: '1011', image:IMAGES.contact2, contact:'+12 123 456 7890', title:'Ankites Risher', email: 'abc@gmail.com', gender:'Male', location:'Brazil', status:'Active'},    
    {emplid: '1012', image:IMAGES.contact1, contact:'+12 123 456 7890', title:'Ricky Antony', email: 'ra@gmail.com', gender:'Female', location:'India', status:'Active'},    
    {emplid: '1013', image:IMAGES.contact1, contact:'+12 123 456 7890', title:'Elijah James', email: 'stuy@gmail.com', gender:'Female', location:'Dubai', status:'Active'},    
    {emplid: '1014', image:IMAGES.contact3, contact:'+12 123 456 7890', title:'Ricky M', email: 'pqr@gmail.com', gender:'Male', location:'France', status:'Active'},    
    {emplid: '1015', image:IMAGES.contact2, contact:'+12 123 456 7890', title:'Honey Risher', email: 'xyz@gmail.com', gender:'Male', location:'USA', status:'Active'},    
];

const headersTitle = [
    {label:'Employee ID', key:'emplid'}, 
    {label:'Employee Name', key:'title'}, 
    {label:'Email Address', key:'email'}, 
    {label:'Contact Number', key:'contact'}, 
    {label:'Gender', key:'gender'}, 
    {label:'Location', key:'location'}, 
    {label:'Status', key:'status'}, 
]

const csvlink = {
    headers : headersTitle,
    data : tableData,
    filename: "csvfile.csv"
}

const EmployeesTableList = () => {
    const invite = useRef();
    const employe = useRef();
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
                            <h4 className="heading mb-0">Employees</h4>
                            <div>
                                <CSVLink {...csvlink} className="btn btn-primary light btn-sm me-2"><i className="fa-solid fa-file-excel" /> Export Report</CSVLink> 
                                <Link href="#" scroll={false} className="btn btn-primary btn-sm"
                                   onClick={()=>employe.current.showEmployeModal()}
                                >+ Add Employee</Link> {" "}
                                <button type="button" className="btn btn-secondary btn-sm" 
                                    onClick={() => invite.current.showInviteModal()}
                                >+ Invite Employee
                                </button>
                            </div>
                        </div>          
                        <div id="employee-tbl_wrapper" className="dataTables_wrapper no-footer">
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
                                        <th>Employee ID</th>
                                        <th>Employee Name</th>
                                        <th>Email Address</th>
                                        <th>Contact Number</th>
                                        <th>Gender</th>
                                        <th>Location</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.map((item, index)=>(
                                        <tr key={index}>
                                            <td className="sorting_20">
                                                <div className="form-check11custom-checkbox">
                                                    <input type="checkbox" className="form-check-input" 
                                                        id={`employees${index+211}`} required="" 
                                                        onClick={() => checkboxFun()}
                                                    />
                                                    <label className="form-check-label" htmlFor={`employees${index+211}`}></label>
                                                </div>
                                            </td>
                                            <td><span>{item.emplid}</span></td>
                                            <td>
                                                <div className="products">
                                                    <Image src={item.image} className="avatar avatar-md" alt="avat" />
                                                    <div>
                                                        <h6><Link href={"#"} scroll={false}>{item.title}</Link></h6>
                                                        <span>Web Designer</span>	
                                                    </div>	
                                                </div>
                                            </td>
                                            <td><Link href={"#"} scroll={false} className="text-primary">{item.email}</Link></td>
                                            <td>
                                                <span>{item.contact}</span>
                                            </td>
                                            <td>
                                                <span>{item.gender}</span>
                                            </td>	
                                            <td>
                                                <span>{item.location}</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-success light border-0">Active</span>
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
            <EmployeeOffcanvas 
                ref={employe}
                Title="Add Employee"
            />
            <InviteCustomer
                ref={invite}     
                Title="Invite Employee"
            />
        
        </>
    );
};


export default EmployeesTableList;
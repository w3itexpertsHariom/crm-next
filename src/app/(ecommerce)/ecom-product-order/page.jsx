"use client"
import React from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import PageTitle from "@/layouts/PageTitle";

function DropdonBlog(){
  return(
    <>
      <Dropdown className="text-sans-serif">          
          <Dropdown.Toggle as="div" variant="" className="i-false">
            <button className="btn btn-primary i-false tp-btn-light sharp" type="button" id="order-dropdown-0">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <circle fill="#000000" cx="12" cy="5" r="2"></circle>
                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                    <circle fill="#000000" cx="12" cy="19" r="2"></circle>
                  </g>
                </svg>
              </span>
              </button>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right border py-0" align="end">
            <div className="py-2">
              <Link className="dropdown-item" href="/ecom-product-order">Completed</Link>
              <Link className="dropdown-item" href="/ecom-product-order">Processing</Link>
              <Link className="dropdown-item" href="/ecom-product-order">On Hold</Link>
              <Link className="dropdown-item" href="/ecom-product-order">Pending</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item text-danger" href="/ecom-product-order">Delete</Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>
    </>
  )
}

const orderstable = [
  {
    id: 181,
    customer: "Ricky Antony",
    email: "ricky@example.com",
    date: "20/04/2024",
    address: "Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey 02149",
    shippingMethod: "Via Flat Rate",
    status: { label: "Completed", class: "badge-success" },
    price: 99,
    dropdown: <DropdonBlog />
  },
  {
    id: 182,
    customer: "Kin Rossow",
    email: "kin@example.com",
    date: "20/04/2024",
    address: "Kin Rossow, 1 Hollywood Blvd, Beverly Hills, California 90210",
    shippingMethod: "Via Free Shipping",
    status: { label: "Processing", class: "badge-primary" },
    price: 120,
    dropdown: <DropdonBlog />
  },
  {
    id: 183,
    customer: "Merry Diana",
    email: "merry@example.com",
    date: "30/04/2024",
    address: "Merry Diana, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Link Road",
    status: { label: "On Hold", class: "badge-secondary" },
    price: 70,
    dropdown: <DropdonBlog />
  },
  {
    id: 184,
    customer: "Bucky Robert",
    email: "bucky@example.com",
    date: "30/04/2024",
    address: "Bucky Robert, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Free Shipping",
    status: { label: "Pending", class: "badge-warning" },
    price: 92,
    dropdown: <DropdonBlog />
  },
  {
    id: 185,
    customer: "Rocky Zampa",
    email: "rocky@example.com",
    date: "30/04/2024",
    address: "Rocky Zampa, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Free Road",
    status: { label: "On Hold", class: "badge-secondary" },
    price: 120,
    dropdown: <DropdonBlog />
  },
  {
    id: 186,
    customer: "Ricky John",
    email: "ricky@example.com",
    date: "30/04/2024",
    address: "Ricky John, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Free Shipping",
    status: { label: "Processing", class: "badge-primary" },
    price: 145,
    dropdown: <DropdonBlog />
  },
  {
    id: 187,
    customer: "Cristofer Henric",
    email: "cristofer@example.com",
    date: "30/04/2024",
    address: "Cristofer Henric, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Flat Rate",
    status: { label: "Completed", class: "badge-success" },
    price: 55,
    dropdown: <DropdonBlog />
  },
  {
    id: 188,
    customer: "Brate Lee",
    email: "lee@example.com",
    date: "29/04/2024",
    address: "Brate Lee, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Link Road",
    status: { label: "On Hold", class: "badge-secondary" },
    price: 90,
    dropdown: <DropdonBlog />
  },
  {
    id: 189,
    customer: "Thomas Stephenson",
    email: "Stephenson@example.com",
    date: "29/04/2024",
    address: "Thomas Stephenson, 116 Ballifeary Road, Bamff",
    shippingMethod: "Via Flat Rate",
    status: { label: "Processing", class: "badge-primary" },
    price: 52,
    dropdown: <DropdonBlog />
  },
  {
    id: 190,
    customer: "Rocky Zampa",
    email: "rocky@example.com",
    date: "30/04/2024",
    address: "Rocky Zampa, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Free Road",
    status: { label: "On Hold", class: "badge-secondary" },
    price: 110,
    dropdown: <DropdonBlog />
  },
  {
    id: 191,
    customer: "Ricky John",
    email: "ricky@example.com",
    date: "30/04/2024",
    address: "Ricky John, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Free Shipping",
    status: { label: "Processing", class: "badge-primary" },
    price: 116,
    dropdown: <DropdonBlog />
  },
  {
    id: 192,
    customer: "Cristofer Henric",
    email: "cristofer@example.com",
    date: "30/04/2024",
    address: "Cristofer Henric, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Flat Rate",
    status: { label: "Completed", class: "badge-success" },
    price: 65,
    dropdown: <DropdonBlog />
  },
  {
    id: 193,
    customer: "Brate Lee",
    email: "lee@example.com",
    date: "29/04/2024",
    address: "Brate Lee, 1 Infinite Loop, Cupertino, California 90210",
    shippingMethod: "Via Link Road",
    status: { label: "On Hold", class: "badge-secondary" },
    price: 109,
    dropdown: <DropdonBlog />
  },
]

const ProductOrder = () => {
  const chackboxFun = (type) => {
    setTimeout(()=>{
      const chackbox = document.querySelectorAll(".product_order");
      const motherChackBox = document.querySelector(".product_order_single");      
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
      
    }, 100);
  };
	

  return (
    <div className="h-80">
        <PageTitle activeMenu="Product Order" motherMenu="Shop" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-sm mb-0 table-responsive-lg ">
                      <thead className="text-white bg-primary">
                        <tr>
                          <th className="align-middle">
                            <div className="form-check custom-checkbox checkbox-success">
                                <input type="checkbox" className="form-check-input  product_order_single" id="checkAll"
                                  onClick={() => chackboxFun("all")} 
                                />                          
                            </div>
                          </th>
                          <th className="align-middle">Order</th>
                          <th className="align-middle pr-7">Date</th>
                          <th className="align-middle minw200">Ship To</th>
                          <th className="align-middle text-end">Status</th>
                          <th className="align-middle text-end">Amount</th>
                          <th className="no-sort text-end" >Action</th>
                        </tr>
                      </thead>
                      <tbody id="orders">
                        {orderstable.map((elem, index)=>(
                          <tr className="btn-reveal-trigger" key={index}>
                              <td className="py-2">
                                <div className="form-check custom-checkbox checkbox-success">
                                  <input type="checkbox"  className="form-check-input product_order" id="checkbox"/>                                  
                                </div>
                              </td>
                              <td className="py-2">
                                <Link href="/ecom-product-order">
                                  <strong>#{elem.id}</strong>
                                </Link>{" "}
                                by <strong>{elem.customer}</strong>
                                <br />
                                <a href="mailto:ricky@example.com">{elem.email}</a>
                              </td>
                              <td className="py-2">{elem.date}</td>
                              <td className="py-2">
                                {elem.address}
                                <p className="mb-0 text-500">{elem.shippingMethod}</p>
                              </td>
                              <td className="py-2 text-end">                                
                                <span className={`badge badge-sm ${elem.status.class}`}>
                                  {elem.status.label}
                                  <span className="ms-1 fa fa-check" />
                                </span>
                                
                              </td>
                              <td className="py-2 text-end font-w600">${elem.price}</td>
                              <td className="py-2 text-end">
                                  <DropdonBlog />
                              </td>
                            </tr>
                          ))}                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ProductOrder;

import Link from "next/link";
import React from "react";

export const metadata = {
  title: "W3CRM - React NextJs Admin Dashboard Template",
  description: "W3CRM - React NextJs Admin Dashboard Template",
};
export default function page() {
  return (
    <>
      <div className="authincation h-100">
         <div className="container ">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-6">
                  <div className="error-page">
                     <div className="error-inner text-center">
                        <div className="dz-error">404</div>
                        <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                        <Link href={"/dashboard"} className="btn btn-secondary">BACK TO HOMEPAGE</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>  
    </>
  );
}

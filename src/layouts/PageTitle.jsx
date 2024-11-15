import React from "react";
import Link from "next/link";

const PageTitle = ({ motherMenu, activeMenu }) => {
	let path = [];  	
  	if (typeof window !== "undefined") {
		path = window.location.pathname.split("/");
  	}

  return (
		<>
			<div className="row page-titles mx-0">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link href={`/${path[path.length - 1]}`}>{motherMenu}</Link></li>
					<li className="breadcrumb-item active"><Link href={`/${path[path.length - 1]}`}>{activeMenu}</Link></li>
				</ol>
			</div>
		</>
    	
  );
};
export default PageTitle;
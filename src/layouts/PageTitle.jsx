import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PageTitle = ({ motherMenu, activeMenu }) => {
	const getPath = usePathname();
  	const [path, setPath] = useState([]);
	  useEffect(() => {
		if (getPath) {
		  setPath(getPath.split("/"));
		}
	  }, [getPath]);

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
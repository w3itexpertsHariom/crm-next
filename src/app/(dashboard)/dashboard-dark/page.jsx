"use client"

import React,{useContext, useEffect} from 'react';
//Import Components
import { ThemeContext } from "@/context/ThemeContext";
import MainPagetitle from '@/layouts/MainPagetitle';
import HomeComponent from '@/components/dashboard/HomeComponent';


const DashboardDark = () => {
	const { changeBackground } = useContext(ThemeContext);	
	useEffect(() => {
		changeBackground({ value: "dark", label: "Dark" });
	}, []);		
	return(
		<>			
			<MainPagetitle mainTitle="Dashboard" pageTitle="Dashboard Dark" parentTitle="Home"  />
			<div className="container-fluid">
				<HomeComponent />
			</div>			
		</>
	)
}
export default DashboardDark;
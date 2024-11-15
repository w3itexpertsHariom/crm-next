import { Fragment } from "react";
import MainPagetitle from '@/layouts/MainPagetitle';

import HomeComponent from '@/components/dashboard/HomeComponent';

export default function MainHome() {
    return (
      <Fragment>
        <MainPagetitle mainTitle="Dashboard" pageTitle="Dashboard" parentTitle="Home"  />
        <div className="container-fluid">
          <HomeComponent />				          
        </div>	       
      </Fragment>
    );
}
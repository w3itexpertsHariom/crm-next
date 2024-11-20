import React from "react";
import PageTitle from "@/layouts/PageTitle";
import dynamic from 'next/dynamic';

const EventCalendar = dynamic(() => import('@/components/Calendar/EventCalendar'), { ssr: false });

const Calendar = () => {
   return (
      <div className="h-80">
         <PageTitle activeMenu="Calerdar" motherMenu="App" />
         <div className="container-fluid">
            <EventCalendar />
         </div>
      </div>
   );
};

export default Calendar;

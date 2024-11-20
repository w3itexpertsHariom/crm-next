import React from "react";
import PageTitle from "@/layouts/PageTitle";

import EventCalendar from "@/components/calendar/EventCalendar";

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

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Card } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";

const EventCalendar = () => {
   const [calendarEvents, setCalendarEvents] = useState([
      { title: "Atlanta Monster", start: new Date("2024-11-07 00:00"), id: "99999991" },
      { title: "My Favorite Movie", start: new Date("2024-11-11 00:00"), id: "99999992" },
      { title: "Engagement Function", start: new Date("2024-11-17 00:00"), id: "99999993" },
      { title: "Marriage Function", start: new Date("2024-11-23 00:00"), id: "99999994" },
      { title: "Party With Friends", start: new Date("2024-11-26 00:00"), id: "99999995" },
      { title: "Atlanta Monster", start: new Date("2024-12-07 00:00"), id: "999911111" },
      { title: "My Favorite Movie", start: new Date("2024-12-11 00:00"), id: "9991112" },
      { title: "Engagement Function", start: new Date("2024-12-17 00:00"), id: "999922293" },
      { title: "Marriage Function", start: new Date("2024-12-23 00:00"), id: "99933394" },
      { title: "Party With Friends", start: new Date("2024-12-26 00:00"), id: "99555995" },
   ]);

   const [events] = useState([
      { title: "New Theme Release", id: "1", style: "primary" },
      { title: "My Event", id: "2", style: "warning" },
      { title: "Meet Manager", id: "3", style: "danger" },
      { title: "Create New Theme", id: "4", style: "info" },
      { title: "Project Launch", id: "5", style: "dark" },
      { title: "Meeting", id: "6", style: "secondary" },
   ]);

   const calendarComponentRef = useRef(null);

   useEffect(() => {
      const draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
         itemSelector: ".fc-event",
         eventData: (eventEl) => ({
            title: eventEl.getAttribute("title"),
            id: eventEl.getAttribute("data"),
         }),
      });
   }, []);

   const eventClick = (eventClick) => {
      Alert.fire({
         title: eventClick.event.title,
         html: `
            <div className="table-responsive">
               <table className="table">
                  <tbody>
                     <tr>
                        <td>Title</td>
                        <td><strong>${eventClick.event.title}</strong></td>
                     </tr>
                     <tr>
                        <td>Start Time</td>
                        <td><strong>${eventClick.event.start}</strong></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         `,
         showCancelButton: true,
         confirmButtonColor: "#d33",
         cancelButtonColor: "#3085d6",
         confirmButtonText: "Remove Event",
         cancelButtonText: "Close",
      }).then((result) => {
         if (result.value) {
            eventClick.event.remove();
            Alert.fire("Deleted!", "Your Event has been deleted.", "success");
         }
      });
   };

   return (
      <div className="animated fadeIn demo-app">
         <Row>
            <Col lg={3}>
               <Card>
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-intro-title mb-0">Calendar</h4>
                  </div>
                  <Card.Body>
                     <div id="external-events">
                        <p>Drag and drop your event or click in the calendar</p>
                        {events.map((event) => (
                           <div
                              key={event.id}
                              className={`fc-event external-event light btn-${event.style}`}
                              data-class={`bg-${event.style}`}
                              title={event.title}
                              data={event.id}
                           >
                              <i className="fa fa-move" />
                              <span>{event.title}</span>
                           </div>
                        ))}
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={9}>
               <Card>
                  <Card.Body>
                     <div className="demo-app-calendar" id="mycalendartest">
                        <FullCalendar
                           defaultView="dayGridMonth"
                           headerToolbar={{
                              start: "prev,next today",
                              center: "title",
                              end: "dayGridMonth,timeGridWeek,timeGridDay",
                           }}
                           rerenderDelay={10}
                           eventDurationEditable={false}
                           editable={true}
                           droppable={true}
                           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                           ref={calendarComponentRef}
                           weekends={true}
                           events={calendarEvents}
                           eventClick={eventClick}
                        />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default EventCalendar;
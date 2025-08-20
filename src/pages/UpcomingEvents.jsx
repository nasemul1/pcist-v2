import React, { useContext, useState } from "react";
import ComponentHeader from "../components/ComponentHeader";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import Events from "../components/Events";

const UpcomingEvents = () => {
  const { events } = useContext(UserContext);

  // pagination setup
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 20;

  // calculate pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  // date formatting function
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-full">
      <ComponentHeader title="Upcoming Events" route="Events" />
      <div className="w-full lg:w-[85%] max-w-[1200px] mx-auto py-10 px-5 lg:px-0">
        <Events event={"Solo"} place={"Event"} />
        <Events event={"Team"} place={"Event"} />
      </div>
    </div>
  );
};

export default UpcomingEvents;

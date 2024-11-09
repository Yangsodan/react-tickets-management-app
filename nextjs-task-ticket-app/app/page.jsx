import React from "react";
import TicketCard from "@/app/(components)/TicketCard";

const getTickets = async () => {
  try {
    const resp = await fetch("http://192.168.3.114:3000/api/Tickets", {
      method: "GET",
      cache: "no-store",
    });
    return resp.json();
  } catch (error) {
    console.error("Failed to get Tickets", error);
    return { ticket: [] };
  }
};

const Dashboard = async () => {
  const { tickets = [] } = (await getTickets()) || {};

  const categories = [...new Set(tickets?.map(({ category }) => category))];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          categories?.map((category, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h2>{category}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === category)
                  .map((ticket, index) => (
                    <TicketCard id={index} key={index} ticket={ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

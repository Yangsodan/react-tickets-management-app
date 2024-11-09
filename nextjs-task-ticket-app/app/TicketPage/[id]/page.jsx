import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketInfo = async (id) => {
  const resp = await fetch(`http://192.168.3.114:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!resp.ok) {
    throw new Error("Failed get ticket");
  }
  return resp.json();
};

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const isEditMode = id === "new" ? false : true;

  if (isEditMode) {
    var { ticketInfo } = await getTicketInfo(id);
  }
  return <TicketForm ticketInfo={ticketInfo} />;
};

export default TicketPage;

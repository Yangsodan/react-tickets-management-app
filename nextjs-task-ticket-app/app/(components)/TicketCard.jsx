import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDispaly from "./PriorityDispaly";
import Progressbar from "./Progressbar";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  return (
    <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
      <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
        <div className="flex mb-3">
          <PriorityDispaly priority={ticket.priority} />
          <div className="ml-auto">
            <DeleteBlock id={ticket._id} title={ticket.title} />
          </div>
        </div>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">
              {new Date(ticket.updatedAt).toLocaleString()}
            </p>
            <Progressbar progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TicketCard;

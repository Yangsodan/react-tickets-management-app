"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id, title }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    if (confirm(`delete ticket " ${title} " ?`)) {
      const resp = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: "DELETE",
      });

      if (resp.ok) {
        router.refresh();
      }
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;

import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-400";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        break;
      case "working on":
        color = "bg-yellow-200";
        break;
      case "not started":
        color = "bg-red-200";
        break;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusDisplay;

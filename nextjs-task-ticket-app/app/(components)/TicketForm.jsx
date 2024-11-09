"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = ({ ticketInfo }) => {
  const router = useRouter();

  let isEditMode = false;

  let startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "",
  };

  if (ticketInfo) {
    isEditMode = true;
    startingTicketData = {
      ...startingTicketData,
      ...ticketInfo,
    };
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fetchURL = "/api/Tickets";
    let requestBody = {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-type": "application/json",
      cache: "no-store",
    };

    if (isEditMode) {
      fetchURL += `/${formData._id}`;
      requestBody = {
        ...requestBody,
        method: "PUT",
      };
    }

    const resq = await fetch(fetchURL, requestBody);

    if (!resq.ok) {
      throw new Error("Failed on modify Ticket.");
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{isEditMode ? "Edit Ticket" : "Create Ticket"}</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required
          value={formData.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows={5}
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        {/* <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value={""}></option>
          <option value={parseInt(1)}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select> */}
        <label>Priority</label>
        <div>
          <label htmlFor="priority-1">1</label>
          <input
            type="radio"
            name="priority"
            id="1"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-2">2</label>
          <input
            type="radio"
            name="priority"
            id="2"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority">3</label>
          <input
            type="radio"
            name="priority"
            id="3"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
        </div>
        <label htmlFor="progress">Porgress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        ></input>

        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="working on">Working On</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={isEditMode ? "Edit Ticket" : "Create Ticket"}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default TicketForm;

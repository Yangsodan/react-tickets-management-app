import { TicketInfo } from "@/models/CommonType";

const apiEndPoint = "http://192.168.3.114:3000/api/Tickets";

interface ServerActionType {
  method: string;
  requestBody: any | null | undefined;
  epFix: string;
}

const serverAction = async (action: ServerActionType) => {
  const { method, requestBody, epFix } = action;
  const url = epFix ? `${apiEndPoint}/${epFix}` : apiEndPoint;
  try {
    const resp = await fetch(url, {
      method: method,
      body: requestBody,
    });
    if (resp.status === 500) {
      throw new Error("Bad Request");
    }
    return resp.json();
  } catch (error) {
    console.error("", error);
  }
};

export async function getAllTickets() {
  const data = await serverAction({
    method: "GET",
    requestBody: null,
    epFix: "",
  });
  return data.tickets;
}

export async function modTicket(isUpdate: boolean, ticket: TicketInfo) {
  let formData;
  let method = "PUT";
  let requestBody = JSON.stringify({ formData });
  let epFix = ticket._id;

  if (!isUpdate) {
    method = "POST";
    const { _id, updatedAt, ...rest } = ticket;
    formData = rest;
    requestBody = JSON.stringify({ formData });
    epFix = "";
  } else {
    formData = ticket;
    requestBody = JSON.stringify({ formData });
  }

  return await serverAction({
    method: method,
    requestBody: requestBody,
    epFix: epFix,
  });
}

export async function delTicket(id: string) {
  return await serverAction({ method: "DELETE", requestBody: null, epFix: id });
}

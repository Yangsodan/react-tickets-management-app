import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    const resp = await Ticket.findByIdAndUpdate(ticketData._id, {
      ...ticketData,
    });
    return NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "delete success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "delete failed", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const ticketInfo = await Ticket.findOne({ _id: id });
    return NextResponse.json({ ticketInfo }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "get ticket info failed", error },
      { status: 500 }
    );
  }
}

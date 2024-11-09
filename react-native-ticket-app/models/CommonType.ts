export interface TicketInfo {
  _id: string;
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  updatedAt: Date;
}

export interface TicketSubmitt {
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
}

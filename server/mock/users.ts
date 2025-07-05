import { v4 as uuid } from "uuid";
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: "ACTIVE" | "INACTIVE";
}

export const users: User[] = [
  {
    id: uuid(),
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    status: "ACTIVE",
  },
  {
    id: uuid(),
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob@example.com",
    status: "INACTIVE",
  },
];

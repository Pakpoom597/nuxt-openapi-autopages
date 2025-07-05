import { v4 as uuid } from "uuid";
import { users, type User } from "~/server/mock/users";

export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<User>>(event);

  if (!body.firstName || !body.lastName || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  const newUser: User = {
    id: uuid(),
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    status: "ACTIVE",
  };

  users.push(newUser);

  return newUser;
});

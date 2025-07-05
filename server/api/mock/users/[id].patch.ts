import { users, type User } from "~/server/mock/users";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody<Partial<User>>(event);

  const user = users.find((u) => u.id === id);

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: "User not found" });
  }

  Object.assign(user, {
    firstName: body.firstName ?? user.firstName,
    lastName: body.lastName ?? user.lastName,
    email: body.email ?? user.email,
    status: body.status ?? user.status,
  });

  return user;
});

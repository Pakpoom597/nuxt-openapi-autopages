import { users } from "~/server/mock/users";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const search = (query.search as string)?.toLowerCase() ?? "";
  const status = (query.status as string)?.toUpperCase();

  let result = users;

  if (status) {
    result = result.filter((user) => user.status === status);
  }

  if (search) {
    result = result.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search),
    );
  }

  return result;
});

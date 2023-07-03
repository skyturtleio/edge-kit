import * as db from "$lib/server/database";
import type { PageServerLoad } from "./$types";

export const load = (({ cookies }) => {
  const id = cookies.get("userid");

  if (!id) {
    cookies.set("userid", crypto.randomUUID(), { path: "/" });
  }

  return {
    todos: db.getTodos(id) ?? [],
  };
}) satisfies PageServerLoad;

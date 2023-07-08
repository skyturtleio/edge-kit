import type { PageServerLoad } from "./$types";

export const load = (() => {
	return {
		other_message: "Hello from page.server.ts",
		answer: 42,
	};
}) satisfies PageServerLoad;

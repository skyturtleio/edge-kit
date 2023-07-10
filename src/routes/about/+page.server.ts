import type { PageServerLoad } from "./$types";

// export const load = (() => {
// 	return {
// 		other_message: "Hello from page.server.ts",
// 		answer: 42,
// 		callsign: "Turtle",
// 	};
// }) satisfies PageServerLoad;

export const load = (() => {
	return {
		other_message: "Hello from page.server.ts",
		answer: 58,
	}
}) satisfies PageServerLoad

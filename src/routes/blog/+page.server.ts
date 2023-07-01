import { posts } from "./data";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
		})),
	};
}) satisfies PageServerLoad;

import { posts } from "../data";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post,
	};
}) satisfies PageServerLoad;

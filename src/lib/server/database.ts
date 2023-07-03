// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getTodos(userid: string | undefined) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: "Learn SvelteKit",
			done: false,
		}]);
	}

	return db.get(userid);
}

export interface Todo {
	id: string;
	description: string;
	done: boolean;
}

export function createTodo(userid: string, description: string) {
	if (description === "") {
		throw new Error("todo must have description");
	}

	const todos = db.get(userid);

	if (todos.find((todo: Todo) => todo.description === description)) {
		throw new Error("todos must be unique");
	}

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false,
	});
}

export function deleteTodo(userid: string, todoid: string) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo: Todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

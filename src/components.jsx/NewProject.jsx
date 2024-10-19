import Input from "./Input";

export default function NewProject() {
	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-center gap-4 my-4">
				<button className="text-stone-800 hover:text-stone-950 ">Cancel</button>
				<button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">
					Save
				</button>
			</menu>
			<div>
				<Input label="Title" />
				<Input label="Description" textarea />
				<Input label="Due Date" />
			</div>
		</div>
	);
}

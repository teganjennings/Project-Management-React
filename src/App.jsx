import { useState } from "react";
import NewProject from "./components.jsx/NewProject";
import NoProjectSelected from "./components.jsx/NoProjectSelected";
import SideBar from "./components.jsx/Sidebar";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		proejcts: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
}

export default App;

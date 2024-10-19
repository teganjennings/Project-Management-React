import NewProject from "./components.jsx/NewProject";
import SideBar from "./components.jsx/Sidebar";

function App() {
	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar />
			<NewProject />
		</main>
	);
}

export default App;

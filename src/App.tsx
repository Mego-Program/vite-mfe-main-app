import "./App.css";
import DashboardList from "./components/DashboardList";

interface Card {
  title: string;
  text: string;
  value: string;
}

const content: Card[] = [
  {
    title: "Add Project",
    text: `First, add a project that you
        would like to work on.`,
    value: "$22k",
  },
  {
    title: "Add Issue ",
    text: `Finally, add issues that you would like to work on.`,
    value: "$10k",
  },
  {
    title: "Total Projects ",
    text: `The project key is a unique identifier for a project.`,
    value: "15",
  },
  {
    title: "Ongoing  ",
    text: `You've probably heard of a project post-mortem.`,
    value: "03",
  },
];
function App() {
  return (
    <>
      <DashboardList contentList={content} />
    </>
  );
}

export default App;

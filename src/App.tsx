import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

// export type
export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoalProps = {
      id: Math.random(),
      title: goal,
      description: summary,
    };

    setGoals(() => {
      return [...goals, newGoal];
    });
  };

  // const handleDeleteGoal = (id: number) => {
  //   setGoals(prevGoals => {
  //     prevGoals.filter(goal => goal.id !== id)
  //   })}

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "Goal image" }}>
        <h1>Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

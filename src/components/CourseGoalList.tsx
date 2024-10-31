import CourseGoal from "./CourseGoal";
import { type CourseGoalProps as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoalProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  if (goals.length == 0) {
    return <InfoBox mode="hint">No goals found. Maybe add one?</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 5) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

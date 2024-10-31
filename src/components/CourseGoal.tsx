// interface CourseGoalProps {
//   title: string;
//   children: React.ReactNode;
// }

import { type PropsWithChildren } from "react";
import { type FC } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children, id, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>DELETE</button>
//     </article>
//   );
// }

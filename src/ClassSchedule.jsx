import { useContext } from "react";
import { AppContext } from "./App";

export default function ClassSchedule() {
  const { enrolledClasses, dropCourse } = useContext(AppContext);

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Drop</th>
          </tr>
        </thead>
        <tbody>
          {(
            enrolledClasses.map(course => (
              <tr key={course.courseNumber}>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
            <td>
                  <button onClick={() => dropCourse(course.courseNumber)}>Drop</button>
            </td>
          </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

import { useContext } from "react";

export default function ClassSchedule() {
  const { enrolledClasses } = useContext(AppContext); // <-- how do I use this AppContext if its not defined in this file? Do I need to import it?
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
          <tr>
            <td>OS1000</td>
            <td>Fundamentals of Open Source Operating Systems</td>
            <td>
              <button>Drop</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

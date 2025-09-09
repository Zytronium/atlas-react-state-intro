import { useEffect, useState } from "react";

export default function SchoolCatalog() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, SetSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query)
      return true; // Show all courses

    const num = (course.courseNumber || "").toLowerCase();
    const name = (course.courseName || "").toLowerCase();
    return num.includes(query) || name.includes(query);
  });

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => SetSearchQuery(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(filteredCourses) && filteredCourses.map((course, i) => (
          <tr key={i}>
            <td>{course.trimester}</td>
            <td>{course.courseNumber}</td>
            <td>{course.courseName}</td>
            <td>{course.semesterCredits}</td>
            <td>{course.totalClockHours}</td>
            <td>
              <button>Enroll</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

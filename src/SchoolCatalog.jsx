import { useEffect, useState } from "react";

export default function SchoolCatalog() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSort, setDataSort] = useState({ sortBy: 'trimester', ascending: true });

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

  const sortedCourses = filteredCourses.sort((a, b) => {
    const { sortBy, ascending } = dataSort;
    const dir = ascending ? 1 : -1;

    if (a[sortBy] < b[sortBy])
      return -dir;
    if (a[sortBy] > b[sortBy])
      return dir;
    return 0;
  });

  function sort(column) {
    setDataSort(prev => {
      // If already sorting by this column, toggle sort order (true = ascending, false = descending)
      if (prev.sortBy === column) {
        return { sortBy: column, ascending: !prev.ascending };
      }
      // Else, sort by this column, ascending order
      return { sortBy: column, ascending: true };
    });
  }

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th onClick={() => sort('trimester')} className={dataSort.sortBy === "trimester" ? "selected" : ""} >Trimester</th>
            <th onClick={() => sort('courseNumber')} className={dataSort.sortBy === "courseNumber" ? "selected" : ""} >Course Number</th>
            <th onClick={() => sort('courseName')} className={dataSort.sortBy === "courseName" ? "selected" : ""} >Courses Name</th>
            <th onClick={() => sort('semesterCredits')} className={dataSort.sortBy === "semesterCredits" ? "selected" : ""} >Semester Credits</th>
            <th onClick={() => sort('totalClockHours')} className={dataSort.sortBy === "totalClockHours" ? "selected" : ""} >Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(sortedCourses) && sortedCourses.map((course, i) => (
          <tr key={course.courseNumber}>
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

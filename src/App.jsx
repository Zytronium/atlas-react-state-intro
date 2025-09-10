import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import { createContext, useState } from "react";

export const AppContext = createContext({
  enrolledClasses: [],
  enrollCourse: () => {},
  dropCourse: () => {},
});

export default function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  function enrollCourse(course) {
    setEnrolledClasses(prev => {
      if (prev.some(c => c.courseNumber === course.courseNumber))
        return prev;
      return [...prev, course];
    });
  }

  function dropCourse(courseNumber) {
    setEnrolledClasses(prev => prev.filter(c => c.courseNumber !== courseNumber));
  }

  return (
    <AppContext.Provider value={{ enrolledClasses, enrollCourse, dropCourse }}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </AppContext.Provider>
  );
}

import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  return (
    <AppContext.Provider value={[enrolledClasses]}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </AppContext.Provider>
  );
}

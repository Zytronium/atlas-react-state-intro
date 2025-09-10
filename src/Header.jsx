import { useContext } from "react";
import { AppContext } from "./App";
import logo from "./assets/logo.png";

export default function Header() {
  const { enrolledClasses } = useContext(AppContext);
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">Classes Enrolled: {enrolledClasses.length}</div>
    </div>
  );
}

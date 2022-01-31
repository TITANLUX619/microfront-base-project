import Button from "./Button";
import { Link } from "react-router-dom";

const PageA = () => {
  return (
    <div>
      <h1>This is Page A</h1>
      <Link to="/pageB">To Page B</Link>
    </div>
  );
};

export default PageA;

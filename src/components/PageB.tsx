import { Link } from "react-router-dom";

const PageB = () => {
  return (
    <div>
      <h1>This is Page B</h1>
      <Link to="/pageA">To Page A</Link>
    </div>
  );
};

export default PageB;

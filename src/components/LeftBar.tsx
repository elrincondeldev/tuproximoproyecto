import Button from "./common/Button";
import { Link, useLocation } from "react-router-dom";

function LeftBar() {
  const location = useLocation();

  return (
    <div className="bg-white border-[1px] border-[#E1E3E8] rounded-md p-5">
      <Link to="/">
        <Button
          buttonName="Todos los proyectos"
          imageUrl="/images/Folder-open.svg"
          active={location.pathname === "/"}
        />
      </Link>
      <Link to="/frontend">
        <Button
          buttonName="Frontend"
          imageUrl="/images/frontend.svg"
          active={location.pathname === "/frontend"}
        />
      </Link>
      <Link to="/backend">
        <Button
          buttonName="Backend"
          imageUrl="/images/backend.svg"
          active={location.pathname === "/backend"}
        />
      </Link>
      <Link to="/fullstack">
        <Button
          buttonName="Full Stack"
          imageUrl="/images/fullstack.svg"
          active={location.pathname === "/fullstack"}
        />
      </Link>
    </div>
  );
}

export default LeftBar;

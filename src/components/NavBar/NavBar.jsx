import "./NavBar.scss";
import MenuList from "./MenuList/MenuList";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function isActiveOff() {
    setIsActive(!isActive);
  }
  return (
    <nav className="navgation_bar">
      <div className="logo"></div>
      <MenuList color={"white"} active={isActive} isActiveOff={isActiveOff} />
      <div className="menu_line" onClick={() => isActiveOff()}>
        {isActive ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </nav>
  );
}

export default NavBar;

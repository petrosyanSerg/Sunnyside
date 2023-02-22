import "./MenuList.scss";
function MenuList({ color, active, isActiveOff }) {
  return (
    <ul className={`menu ${color} ${active ? "actvie_menu" : ""}`}>
      <li className="menu_item" onClick={isActiveOff}>
        <a href="#about">About</a>
      </li>
      <li className="menu_item" onClick={isActiveOff}>
        <a href="#services">Services</a>
      </li>
      <li className="menu_item" onClick={isActiveOff}>
        <a
          href="https://github.com/petrosyanSerg?tab=repositories"
          target="_blank"
        >
          Projects
        </a>
      </li>
      <li className="menu_item" onClick={isActiveOff}>
        <a href="#footer">Contact</a>
      </li>
    </ul>
  );
}
export default MenuList;

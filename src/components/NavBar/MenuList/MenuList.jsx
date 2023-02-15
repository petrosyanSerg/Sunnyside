import "./MenuList.scss";
function MenuList({ color, active }) {
  return (
    <ul className={`menu ${color} ${active ? "actvie_menu" : ""}`}>
      <li className="menu_item">About</li>
      <li className="menu_item">Services</li>
      <li className="menu_item">Projects</li>
      <li className="menu_item">Contact</li>
    </ul>
  );
}
export default MenuList;

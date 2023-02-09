import "./Menu.scss"
export default function Menu(props) {
  return (
    <div className = {'menu ' + (props.menuOpen && 'active')}> 
      <ul>
        <li onClick={()=>{props.setMenuOpen(false)}}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>{props.setMenuOpen(false)}}>
            <a href="#skills">Skills</a>
        </li>
        <li onClick={()=>{props.setMenuOpen(false)}}>
            <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

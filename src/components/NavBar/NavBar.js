import "./NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faBars, faArrowRight } from '@fortawesome/fontawesome-free-solid'
export default function NavBar(props) {
  return (
    <div className={'navbar ' + (props.menuOpen && 'active')}>
      <div className="wrap">
        <div className="left">
          <a href="#intro" className="logo" >genius.</a> 
          <div className="itemContainer">
            <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
            <span>+91 9110536182</span> 
          </div>
          <div className="itemContainer">
            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <span>srinivasgupta58980@gmail.com</span> 
          </div>
        </div>
        <div className="right">
          <span className="hamburger" onClick={ () => props.setMenuOpen(!props.menuOpen)}> <FontAwesomeIcon icon={(!props.menuOpen?faBars:faArrowRight)}/> </span>
        </div>
      </div>
    </div>
  );
}

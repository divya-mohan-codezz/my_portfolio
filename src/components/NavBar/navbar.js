import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import ContactImg from '../../assets/contact.png'
import Menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">PortFolio</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">project</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=> {
          document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
        }}>
          <img src={ContactImg} alt="" className="desktopMenuImg"/>Contact Me</button>

         <img src={Menu} alt="Menu" className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}   className="listItem" onClick={()=>setShowMenu(false)}>PortFolio</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Project</Link>
          <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>




    </nav>
  )
}

export default Navbar

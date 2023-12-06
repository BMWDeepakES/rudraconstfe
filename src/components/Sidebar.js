import {AnimatePresence, motion} from 'framer-motion';
import {FaHome} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {PiToolboxBold} from 'react-icons/pi';
import {RiCheckboxMultipleBlankLine} from 'react-icons/ri';
import {FaBars,FaUserLock} from 'react-icons/fa';
import {BiSearch} from 'react-icons/bi';
import { useState } from 'react';

const routes=[
  {
    path:"/",
    name:"Home",
    icon: <FaHome/>,
  },
  {
    path:"/companyRegister",
    name:"Register Company",
    icon: <PiToolboxBold/>,
  },
  {
    path:"/sample",
    name:"Company List",
    icon: <RiCheckboxMultipleBlankLine/>,
  },
  {
    path:"/productRegister",
    name:"Register Product",
    icon: <PiToolboxBold/>,
  },
  {
    path:"/pricesheet",
    name:"Rate List",
    icon: <PiToolboxBold/>,
  },
  {
    path:"/signin",
    name:"Sign In",
    icon: <FaUserLock/>,
  },
];

const Sidebar = ({children}) => {
  const [isOpen,setIsOpen]=useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation={
    hidden:{
      width: 0,
      padding:0,
      opacity:0,
    },
    show:{
      width:"140px",
      padding: "5px 15px",
      opacity:1,
      transition:{
        duration:0.5,
      }
    }
  };

  const showAnimation={
    hidden:{
      width: 0,
      opacity:0,
      transition:{
        duration:0.7,
      }
    },
    show:{
      width:"auto",
      opacity:1,
      transition:{
        duration:0.5,
      }
    }
  }

  return <div className="main-container">
      <motion.div animate={{width: isOpen ? "220px" : "35px", transition:{
         duration:0.5,
         type:"spring",
         damping:10,
      }}} className="sidebar">
       <motion.div 
       variants={showAnimation}
       initial="hidden"
       animate="show"
       exit="hidden"
       className="top_section">
        { isOpen && <h2 className="logo">
          Rudra Contruction
        </h2>}
        <div className="bars">
          <FaBars onClick={toggle}/>
        </div>
       </motion.div>
       <div className="search">
          <div className="search_icon">
             <BiSearch/>
          </div>
          <AnimatePresence>
          {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder="Search" />}
          </AnimatePresence>
       </div>
       <section className="routes">
         {routes.map((route) => (
           <NavLink 
           activeClassName="active"
           to={route.path} key={route.name} className="link">
             <div className="icon">{route.icon}</div>
             <AnimatePresence>
             {isOpen && <motion.div 
             variants={showAnimation}
             initial="hidden"
             animate="show"
             exit="hidden"
             className="link_text">{route.name}</motion.div>}
             </AnimatePresence>
           </NavLink>
         ))}
       </section>
      </motion.div>
      <main>
        {children}
      </main>
  </div>;
}

export default Sidebar

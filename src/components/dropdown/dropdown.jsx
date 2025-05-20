import React from 'react'
import './dropdown.css'
import { MenuItems } from './menuItems'
import { Link } from 'react-router-dom'


export default function Dropdown() {

    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='dropdown'>
      <ul onClick={handleClick} className={click ? 'dropdown-menu-clicked' : 'dropdown-menu'}>

        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              
                <Link className={item.cName} to={item.path} onClick={() => setClick(false)} >
                  {item.title}
                </Link>
            </li>
            )
        }
        )}




      </ul>
    </div>
  )
}
 
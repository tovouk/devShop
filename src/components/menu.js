import React from 'react'
import Link from 'gatsby-link'

const Menu = () =>(
    <div style={{ 
      }}>
        <ul className="menu">
            <li className="menuItem" ><Link to="/">Home</Link></li>
            <li className="menuItem" ><Link to="/page-2/">Page 2</Link></li>
        </ul>
    </div>
)
    
export default Menu;
import React from 'react'
import Link from 'gatsby-link'

const Menu = () =>(
    <div>
        <ul style={{
            display:'flex',
            justifyContent:'space-evenly',
            listStyle:'none'
            
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-2/">Page 2</Link></li>
        </ul>
    </div>
)
    
export default Menu;
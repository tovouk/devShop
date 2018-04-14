import React from 'react'
import Link from 'gatsby-link'

const Menu = () =>(
    <div style={{
        background:'#EEEEEE'
    }}>
        <ul style={{
            width:'100vw',
            height:'auto',
            display:'flex',
            justifyContent:'space-evenly',
            background:'#666',
            listStyle:'none'
            
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-2/">Page 2</Link></li>
        </ul>
    </div>
)
    
export default Menu;
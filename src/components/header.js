import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <div>
    <Menu />
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        background: 'rebeccapurple',
        position:'relative',
        zIndex:1
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

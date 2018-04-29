import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div>
      <h1 style={{
      }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    
    <Menu />
  </div>
)

class Toggle extends React.Component  {
  constructor() {
    super()
    this.state = { view:false}
  } 

  
  toggleHeader(){
    this.setState({
      view:!this.state.view
    })
  }
  
  render() {
    return (
      <div style={{
        margin:"auto",
        textAlign:"right",
        background: 'rebeccapurple'
      }}
      >
        <button onClick={() => this.toggleHeader()}
        >View Header
        </button>
        { this.state.view ? <Header siteTitle={"DevShop"}/>:null}
      </div>
    )
  }
}


export default Header

import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <div style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        background: 'rebeccapurple',
        display:"flex",
        justifyContent:"space-between",
        height:"100vh",
        background:"url(https://images.unsplash.com/photo-1510843572979-e4b9e790fdd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=238526856465b28e7372a88c82ee05d5&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
  }}>
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

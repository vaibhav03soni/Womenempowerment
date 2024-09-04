import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
<nav>
<i className='logo'>WomenEmpowerment</i>
<Link to="/">Home</Link>
<Link to='/what'>About</Link>
<Link to='/Evente'>Evente</Link>
<Link to='/Gallary'>Gallary</Link>
<Link to='/Contact'>Contact</Link>
<Link to='/Register'>Register</Link>
<Link to='/Login'>Login</Link>
</nav>



        </>
  )
}

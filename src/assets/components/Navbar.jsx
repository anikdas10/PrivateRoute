import { useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user,signOutUser}=useContext(AuthContext);
    
    const links =
     <>
    <li> <NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/login'>Login</NavLink></li>
    <li> <NavLink to='/register'>Register</NavLink></li>
    <li> <NavLink to='/orders'>Orders</NavLink></li>
    </>

    const handleSignOut =()=>{
        signOutUser()
        .then(()=>{
            console.log('user signout successful');
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="navbar bg-base-100 container mx-auto p-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?
    <>
    <span>{user.email}</span>
    <button onClick={handleSignOut} className="btn ml-2">Sign Out</button>
    </>
    :<Link to='/login'>Login</Link>
   }
  </div>
</div>
    );
};

export default Navbar;
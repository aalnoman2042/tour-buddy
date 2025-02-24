
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      
      </div>
    
    </div>
    <a className="btn btn-ghost text-xl font-nico">tour Buddy</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a href="">About us</a></li>
      <li><a>Our Most Rated Guides</a></li>
      <li><a>Our Packages</a></li>
      <li><a>Most Desired Places</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#FFDA32] aspect-square px-7">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;
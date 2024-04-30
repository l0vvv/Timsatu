import images from "../"
const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img id="img1" src="../images/brand_logo.png" alt="logo" className="logo1"/>
        </div>
        <ul>
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Category</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item" onClick={(event) => {event.preventDefault(); ('#head')}}>Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;
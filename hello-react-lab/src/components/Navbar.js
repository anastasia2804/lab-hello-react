import ImgOne from "../images/img1.png";
import ImgTwo from "../images/img2.png";

function Navbar() {
    return (
        <div className="nav-container">
        <div>
            <img src={ImgOne} alt="logo"/>
        </div>
        <div>
            <img src={ImgTwo} alt="menu-icon"/>
        </div>
        </div>
    );
}

export default Navbar;
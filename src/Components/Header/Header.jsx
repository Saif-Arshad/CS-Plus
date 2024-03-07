import '../Header/Header.scss';
import {Link} from "react-router-dom";
function Header() {
  function handleLogoClick(e) {
    e.preventDefault();
    document.querySelector('.nav-toggle')?.classList.remove('open');
    document.querySelector('.menu-left')?.classList.remove('collapse');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleNavToggleClick() {
    document.querySelector('.nav-toggle')?.classList.toggle('open');
    document.querySelector('.menu-left')?.classList.toggle('collapse');
  }

  function handleMenuItemClick() {
    document.querySelector('.nav-toggle')?.classList.remove('open');
    document.querySelector('.menu-left')?.classList.remove('collapse');
  }

  return (
    <div>
      <header>
        <div className="headercontainer">
          <nav id="navigation">
            <div className="Logocontainer">
              <a to='/' className="logo" onClick={handleLogoClick}>
                <div className="stack" style={{ "--stacks": 3 }}>
                  <span style={{ "--index": 0 }}>&lt;Corporate Software/&gt;</span>
                  <span style={{ "--index": 1 }}>&lt;Corporate Software/&gt;</span>
                  <span style={{ "--index": 2 }}>&lt;Corporate Software/&gt;</span>
                </div>
              </a>
            </div>

            <a aria-label="mobile menu" className="nav-toggle" onClick={handleNavToggleClick}>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul className="menu-left">
              <li>
                <Link to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li>
              <Link to="/software" onClick={handleMenuItemClick}>
                  Products
                </Link>
              </li>
              <li>
              <Link to="/service" onClick={handleMenuItemClick}>
                  Services
                </Link>
              </li>
              <li>
              <Link to="/contact" onClick={handleMenuItemClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Your remaining JSX content */}
    </div>
  );
}

export default Header;
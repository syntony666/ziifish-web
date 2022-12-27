import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { introData } from '../data/intro.data';
const TopNavbar = () => {
  const navbarList = introData.map((intro) => {
    return { name: intro.name, id: intro.id };
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav navbar-dark mr-auto">
            {navbarList.map((nav) => (
              <li className="nav-item" key={nav.name}>
                <Link className="nav-link h2" href={`/shop/${nav.id}`}>
                  {nav.name}周邊
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;

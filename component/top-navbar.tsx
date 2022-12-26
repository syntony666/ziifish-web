import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

class TopNavBarObj {
  private _title: string;
  private _link: string;
  constructor(title: string, link: string) {
    this._title = title;
    this._link = link;
  }
  public getTitle() {
    return this._title;
  }
  public getLink() {
    return this._link;
  }
}
const TopNavBar = () => {
  const navList = [
    new TopNavBarObj('首頁', '/'),
    new TopNavBarObj('關於', '/about'),
    new TopNavBarObj('注意事項', '/notice'),
    new TopNavBarObj('價目表', '/price-list'),
    new TopNavBarObj('作品範例', '/exmaples'),
  ];

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg justify-content-center navbar-dark">
          <div id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto align-items-center">
              <a className="navbar-brand" href="/"></a>
              {navList.map((nav) => (
                <li className="nav-item" key={nav.getTitle()}>
                  <Link className="nav-link" href={nav.getLink()}>
                    {nav.getTitle()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopNavBar;

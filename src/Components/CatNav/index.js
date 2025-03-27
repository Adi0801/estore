import "./_cat-nav.scss";

const CatNav = () => {
  return (
    <div className="cat-nav-container container">
      <div>
        <ul>
          <li className="list-items">
            <a href="#">Mens</a>
          </li>
          <li className="list-items">
            <a href="#">Women</a>
          </li>
          <li className="list-items">
            <a href="#">Kids</a>
          </li>
          <li className="list-items">
            <a href="#">Best Offers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatNav;

import "./_side-nav.scss";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion">
        <div
          className="accordion-item individual-category"
          //To make work collaose accordion means by clicking it show and unshow accordion ->pants,shirt we need to import js cdn in global index.js then here linking the accordion with collapse accordion with id
          data-bs-target="#accordion-heading-one"
          data-bs-toggle="collapse"
        >
          <div className="accordion-header">
            <button className="accordion-button">
              <div className="category-title">
                <a href="#">Men</a>
              </div>
            </button>
          </div>
          <div
            className="accordion-collapse collapse show"
            id="accordion-heading-one"
          >
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  <a href="#">Coats</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shirt</a>
                </li>
                <li className="sub-items">
                  <a href="#">T-Shirt</a>
                </li>
                <li className="sub-items">
                  <a href="#">Jeans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

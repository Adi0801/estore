import { useDispatch, useSelector } from "react-redux";
import "./_cat-nav.scss";
import categorySlice from "../../Redux/Category/categorySlice";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/actions";
import { Link } from "react-router-dom";

const CatNav = () => {
  //to get the intial state
  const categories = useSelector((state) => state.categoryReducer.categories);
  const dispach = useDispatch();
  console.log(categories);

  //dispach the action
  useEffect(() => {
    dispach(getCategories());
  }, []);
  return (
    <div className="cat-nav-container container">
      <div>
        <ul>
          <li className="list-items">
            <Link to="/">Home</Link>
          </li>
          {categories.map((category) => {
            //so that only parent category men ,women ,kid get fetched
            if (category.parent_category_id === null) {
              return (
                <li className="list-items">
                  <a href="#">{category.category}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CatNav;

import { useDispatch, useSelector } from "react-redux";
import "./_side-nav.scss";
import { useEffect, useState } from "react";
import { getCategories } from "../../Redux/Category/actions";
import {
  filterByPrice,
  filterProducts,
} from "../../Redux/Product/productSlice";

const SideNav = () => {
  const dispatch = useDispatch();

  // Get categories from Redux store
  const categories = useSelector((state) => state.categoryReducer.categories);

  //fetching product data
  const fetchedProductData = useSelector((state) => state.productReducer);
  const [products, setProducts] = useState();
  const [minPriceLimit, setMinPriceLimit] = useState(10);
  const [maxPriceLimit, setMaxPriceLimit] = useState(130);

  // Dispatch action to fetch categories from DB
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  //while clicking sub category fetch whole product fetch latest data and setproduct with that
  //when status change of the api from load to sucess then use effect triggerd
  useEffect(() => {
    setProducts(fetchedProductData.products);
  }, [fetchedProductData.status]);

  //when clicked side bar sub category ,now we are sending whole product data and selected sub category to the reducer
  const filterData = (selectedCategory) => {
    const payload = { selectedCategory, products };
    dispatch(filterProducts(payload));
  };

  //showing value based upon change in range
  const setPriceLimit = (e, stateFlag) => {
    if (stateFlag === "max") {
      setMaxPriceLimit(e.target.value);
    } else if (stateFlag === "min") {
      setMinPriceLimit(e.target.value);
    }
  };

  //calling dispach for price filter
  const applyPriceFilter = () => {
    const payload = { products, minPriceLimit, maxPriceLimit };
    dispatch(filterByPrice(payload));
  };
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion my-3" id="accordionParent">
        {categories
          .filter((category) => category.parent_category_id === null) // Only parent categories
          .map((category, index) => (
            <div className="accordion-item individual-category" key={index}>
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#accordion-heading-${index}`}
                  aria-expanded="true"
                  aria-controls={`accordion-heading-${index}`}
                >
                  <div className="category-title">
                    <a href="#">{category.category}</a>
                  </div>
                </button>
              </div>

              <div
                className="accordion-collapse collapse"
                id={`accordion-heading-${index}`}
                data-bs-parent="#accordionParent"
              >
                <div className="accordion-body">
                  <ul>
                    {categories
                      .filter(
                        (subCategory) =>
                          //so the parent category is 1 means caegory id and if subcategory having id ha parent id comes under subcategory
                          subCategory.parent_category_id === category.id
                      ) // Only subcategories
                      .map((subCategory, subIndex) => (
                        <li className="sub-items" key={subIndex}>
                          <a href="#" onClick={() => filterData(subCategory)}>
                            {subCategory.category}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="price-filter-container">
        <div className="section-title">
          <h3>Filter By Price</h3>
        </div>
        <div>
          <label>Min : {minPriceLimit}</label>
          {/* form range bootstrap property enhance ui of range */}
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "min")}
          />
        </div>
        <div>
          <label>Max : {maxPriceLimit}</label>
          <input
            className="form-range"
            type="range"
            min={10}
            max={130}
            step={10}
            onChange={(e) => setPriceLimit(e, "max")}
          />
        </div>
        <button
          className="btn btn-outline-dark my-3"
          onClick={applyPriceFilter}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default SideNav;

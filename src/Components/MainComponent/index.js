import Product from "../Products";
import SideNav from "../SideNav";
import "./_main-component.scss";

const MainComponent = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* create a container of classname row to inline both component */}
        <div className="row">
          {/* Creat a grid system to postion sideNav and Product component */}
          <div className="col-lg-2 col-md-3 col-sm-4">
            <SideNav />
          </div>
          <div className="col-lg-10 col-md-9 col-sm-8">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

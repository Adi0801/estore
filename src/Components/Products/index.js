import "./_product.scss";

const Product = () => {
  //create a array list to show all the product
  const productData = [
    {
      pName: "Jacket",
      price: 45,
      img: "shop-1.jpg",
    },
    {
      pName: "Purse",
      price: 50,
      img: "shop-2.jpg",
    },
    {
      pName: "Dress",
      price: 38,
      img: "shop-3.jpg",
    },
    {
      pName: "Denim",
      price: 42,
      img: "shop-4.jpg",
    },
    {
      pName: "Boots",
      price: 65,
      img: "shop-5.jpg",
    },
    {
      pName: "Bag",
      price: 35,
      img: "shop-6.jpg",
    },
  ];
  return (
    //adding flex for better responsiveness ->add classname in root  container
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3  product-card">
            <div className="product-image-container">
              {/* require is used to select image from the path */}
              <img src={require("../../assets/images/shop/" + product.img)} />
            </div>
            <div className="product-info">
              <h5>
                <a href="#">{product.pName}</a>
                <p className="product-price">${product.price}</p>
                <div className="product-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

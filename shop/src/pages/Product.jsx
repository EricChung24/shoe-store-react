import product from "../assets/images/product.png";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import product5 from "../assets/images/product-5.png";
import product6 from "../assets/images/product-6.png";
import product7 from "../assets/images/product-7.png";
import product8 from "../assets/images/product-8.png";
import product9 from "../assets/images/product-9.png";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "PLATFORM 404",
      price: "NT$2,600",
      image: product,
      alt: "PLATFORM 404",
    },
    {
      id: 2,
      name: "PLATFORM 404",
      price: "NT$2,600",
      image: product1,
      alt: "PLATFORM 404",
    },
    {
      id: 3,
      name: "VM001",
      price: "NT$2,600",
      image: product2,
      alt: "VM001",
    },
    {
      id: 4,
      name: "Melty Kiss",
      price: "NT$4,000",
      image: product3,
      alt: "Melty Kiss",
    },
    {
      id: 5,
      name: "BOOMBLOK",
      price: "NT$3,200",
      image: product4,
      alt: "BOOMBLOK",
    },
    {
      id: 6,
      name: "BOOMBLOK",
      price: "NT$3,200",
      image: product5,
      alt: "BOOMBLOK",
    },
    {
      id: 7,
      name: "R:UNER",
      price: "NT$4,000",
      image: product6,
      alt: "R:UNER",
    },
    {
      id: 8,
      name: "Sugar Snap",
      price: "NT$4,000",
      image: product7,
      alt: "Sugar Snap",
    },
    {
      id: 9,
      name: "Neofoam",
      price: "NT$4,000",
      image: product8,
      alt: "Neofoam",
    },
    {
      id: 10,
      name: "Buttermood",
      price: "NT$4,000",
      image: product9,
      alt: "Buttermood",
    },
  ];

  const categories = ["所有商品", "慢跑鞋", "滑板鞋", "厚底鞋", "限定 / 聯名企劃"];

  return (
    <>
      

      <main className="container py-8 mb-4">
        {/* 麵包屑 */}
        <nav className="mb-6" aria-label="breadcrumb">
          <ol className="breadcrumb align-items-center mb-0">
            <li className="breadcrumb-item">
              <a href="/" className="breadcrumb-link">
                首頁
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/" className="breadcrumb-link">
                女鞋
              </a>
            </li>
            <li className="breadcrumb-item  active " aria-current="page">
              所有商品
            </li>
          </ol>
        </nav>

        <h1 className="h3 mt-6 py-1-5 mb-6">女鞋</h1>

        <div className="row">
          {/* 左側分類 */}
          <div className="col-md-2 d-none d-md-block">
            <nav>
              <ul className="category list-unstyled mb-0">
                {categories.map((item, index) => (
                  <li className="mb-4" key={item}>
                    <a
                      href="#"
                      className={`d-block py-3 list-title ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 右側商品列表 */}
          <div className="col-12 col-md-10">
            <div className="row">
              {products.map((item) => (
                <div className="col-6 col-md-4 mb-12 mb-md-6 " key={item.id}>
                  <a href="/product" className="d-block text-decoration-none  text-dark">
                    <img
                      className="img-fluid mb-3 mb-md-2"
                      src={item.image}
                      alt={item.alt}
                    />
                    <h2 className="h6 mb-1 mb-md-0 text-center">{item.name}</h2>
                    <p className="md-p mb-0 text-center">{item.price}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
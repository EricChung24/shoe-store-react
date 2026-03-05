import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
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
  return (
    <>
      

      <main className="container py-8 mb-4">
        {/* 麵包屑導航列 */}
        <nav className="mb-6">
          <ul className="d-flex breadcrumb align-items-center mb-6">
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
            <li className="breadcrumb-item active">所有商品</li>
          </ul>
        </nav>

        <h1 className="h3 mt-6 py-1-5 mb-6">女鞋</h1>

        <div className="row">
          {/* category */}
          <div className="col-2">
            <nav className="d-sm-none">
              <ul className="category">
                <li className="mb-4">
                  <a href="#" className="d-block py-3 active list-title">
                    所有商品
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="d-block py-3 list-title">
                    慢跑鞋
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="d-block py-3 list-title">
                    滑板鞋
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="d-block py-3 list-title">
                    厚底鞋
                  </a>
                </li>
                <li>
                  <a href="#" className="d-block py-3 list-title">
                    限定 / 聯名企劃
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* product-list */}
          <div className="col-10 col-md-4">
            <div className="row">
              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product} alt="PLATFORM 404" />
                    <h2 className="h6 mb-1 mb-md-0">PLATFORM 404</h2>
                    <p className="md-p">NT$2,600</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product1} alt="PLATFORM 404" />
                    <h2 className="h6 mb-1 mb-md-0">PLATFORM 404</h2>
                    <p className="md-p">NT$2,600</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product2} alt="VM001" />
                    <h2 className="h6 mb-1 mb-md-0">VM001</h2>
                    <p className="md-p">NT$2,600</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product3} alt="Melty Kiss" />
                    <h2 className="h6 mb-1 mb-md-0">Melty Kiss</h2>
                    <p className="md-p">NT$4,000</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product4} alt="BOOMBLOK" />
                    <h2 className="h6 mb-1 mb-md-0">BOOMBLOK</h2>
                    <p className="md-p">NT$3,200</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product5} alt="BOOMBLOK" />
                    <h2 className="h6 mb-1 mb-md-0">BOOMBLOK</h2>
                    <p className="md-p">NT$3,200</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product6} alt="R:UNER" />
                    <h2 className="h6 mb-1 mb-md-0">R:UNER</h2>
                    <p className="md-p">NT$4,000</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-6">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product7} alt="Sugar Snap" />
                    <h2 className="h6 mb-1 mb-md-0">Sugar Snap</h2>
                    <p className="md-p">NT$4,000</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2">
                <div className="mb-12 mb-md-8">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product8} alt="Neofoam" />
                    <h2 className="h6 mb-1 mb-md-0">Neofoam</h2>
                    <p className="md-p">NT$4,000</p>
                  </a>
                </div>
              </div>

              <div className="col-4 col-md-2 d-none d-md-block">
                <div className="mb-12 mb-md-8">
                  <a href="/product">
                    <img className="mb-3 mb-md-2" src={product9} alt="Buttermood" />
                    <h2 className="h6 mb-1 mb-md-0">Buttermood</h2>
                    <p className="md-p">NT$4,000</p>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

    </>
  );
}
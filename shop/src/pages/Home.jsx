import product from "../assets/images/product.png";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";
import product5 from "../assets/images/product-5.png";
import product6 from "../assets/images/product-6.png";
import product7 from "../assets/images/product-7.png";

export default function Home() {
  return (
    <>
      <div className="bg-img position-relative mb-5">
        <h1 className="d-flex position-absolute text-white flex-column fw-bolder">StoryShop</h1>
        <p className="position-absolute hero-slogan">"Every Step, A New Story."</p>
        <button className="btn btn-primary-300 position-absolute fw-bolder hero-cta">Take the Step</button>
      </div>

      <div className="container justify-content-center d-flex flex-column">
        <div className="text-center mb-7">
          <h2 className="fs-1 mb-6">New Arrival</h2>
          <p className="fs-3 fw-bold">本月最新上架</p>
        </div>

        <div className="w-100 mb-10">
          <div className="row g-3 new-arrival-grid">
            <div
              className="col-12 col-md-6 new-arrival-item"
             
            >
              <img className="img-fluid w-100" src={product} alt="Nightwave" />
              <div>
                <p className="fs-1 text-center">Nightwave</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,800</del>
                    <p className="fs-5 text-danger">NT$3,500</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 new-arrival-item"
             
            >
              <img className="img-fluid w-100" src={product1} alt="Crimson Grove" />
              <div>
                <p className="fs-1 text-center">Crimson Grove</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,500</del>
                    <p className="fs-5 text-danger">NT$3,500</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 new-arrival-item"
             
            >
              <img className="img-fluid w-100" src={product2} alt="Mistglow" />
              <div>
                <p className="fs-1 text-center">Mistglow</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,600</del>
                    <p className="fs-5 text-danger">NT$3,200</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-6 new-arrival-item"
             
            >
              <img className="img-fluid w-100" src={product3} alt="Frost Lily" />
              <div>
                <p className="fs-1 text-center">Frost Lily</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,700</del>
                    <p className="fs-5 text-danger">NT$3,600</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-3">熱門推薦</h2>

        <div className="row g-3 mb-10 popular-grid">
          <div className="col-6 col-md-3 position-relative popular-item">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-white bg-danger fw-bold">熱銷 NO.1</p>
            <img className="img-fluid w-100" src={product4} alt="Twilight Mist" />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">Twilight Mist</p>
            </div>
          </div>

          <div className="col-6 col-md-3 position-relative popular-item">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-white bg-primary-500 fw-bold">補貨到店</p>
            <img className="img-fluid w-100" src={product7} alt="Mistglow" />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">Mistglow</p>
            </div>
          </div>

          <div className="col-6 col-md-3 position-relative popular-item">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-primary-500 bg-primary-100 fw-bold">限定配色</p>
            <img className="img-fluid w-100" src={product5} alt="Crimson Grove" />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">Crimson Grove</p>
            </div>
          </div>

          <div className="col-6 col-md-3 position-relative popular-item">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-white bg-danger-200 fw-bold">即將登場</p>
            <img className="img-fluid w-100" src={product6} alt="Coming Soon" />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">Coming Soon</p>
            </div>
          </div>
        </div>

        <h2>系列精選</h2>

        <div className="row g-3 mt-1 mb-10 series-puzzle">
          <div className="col-12 col-lg-6">
            <a href="#" className="puzzle-card puzzle-card--lg">
              <img src={product1} alt="Nightwave 系列" />
              <div className="puzzle-overlay">
                <p className="puzzle-title mb-1">Nightwave 系列</p>
                <span className="puzzle-sub">日夜切換的都會跑旅</span>
              </div>
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <a href="#" className="puzzle-card puzzle-card--sm">
                  <img src={product2} alt="Crimson Grove 系列" />
                  <div className="puzzle-overlay">
                    <p className="puzzle-title mb-1">Crimson Grove</p>
                    <span className="puzzle-sub">霧紅層次與街頭節奏</span>
                  </div>
                </a>
              </div>

              <div className="col-12 col-sm-6">
                <a href="#" className="puzzle-card puzzle-card--sm">
                  <img src={product3} alt="Mistglow 系列" />
                  <div className="puzzle-overlay">
                    <p className="puzzle-title mb-1">Mistglow</p>
                    <span className="puzzle-sub">輕量腳感，全天舒適</span>
                  </div>
                </a>
              </div>

              <div className="col-12">
                <a href="#" className="puzzle-card puzzle-card--wide">
                  <img src={product4} alt="限定聯名系列" />
                  <div className="puzzle-overlay">
                    <p className="puzzle-title mb-1">限定聯名系列</p>
                    <span className="puzzle-sub">跨界合作，數量有限</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


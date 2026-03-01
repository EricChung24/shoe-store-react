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
        <h1 className="d-flex position-absolute text-white flex-column fw-bolder">
          StoryShop
        </h1>
        <p className="position-absolute hero-slogan">
          "Every Step, A New Story."
        </p>
        <button className="btn btn-primary-300 position-absolute fw-bolder">
          Take the Step
        </button>
      </div>

      <div className="container justify-content-center d-flex flex-column">
        {/* =========================
            New Arrival（新品上市）
            手機：1 欄
            md↑：2 欄
            ========================= */}
        <div className="text-center mb-7">
          <h2 className="fs-1 mb-6">New Arrival</h2>
          <p className="fs-3 fw-bold">新品上市</p>
        </div>

        <div className="w-100 mb-10">
          <div className="row g-3">
            {/* ✅ col-12 col-md-6：手機 1 欄，平板以上 2 欄 */}
            <div className="col-12 col-md-6">
              <img
                className="img-fluid w-100"
                src={product}
                alt="Nightwave"
              />
              <div>
                <p className="fs-1 text-center">Nightwave</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,800元 </del>
                    <p className="fs-5 text-danger">NT$3,500元</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <img
                className="img-fluid w-100"
                src={product1}
                alt="Crimson Grove"
              />
              <div>
                <p className="fs-1 text-center">Crimson Grove</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,500元 </del>
                    <p className="fs-5 text-danger">NT$3,500元</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <img
                className="img-fluid w-100"
                src={product2}
                alt="Mistglow"
              />
              <div>
                <p className="fs-1 text-center">Mistglow</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,600元 </del>
                    <p className="fs-5 text-danger">NT$3,200元</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <img
                className="img-fluid w-100"
                src={product3}
                alt="Frost Lily"
              />
              <div>
                <p className="fs-1 text-center">Frost Lily</p>
                <div className="d-flex justify-content-center">
                  <div>
                    <del className="text-muted fw-300">NT$4,700元 </del>
                    <p className="fs-5 text-danger">NT$3,600元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            熱銷補貨
            手機：2 欄
            md↑：4 欄
            ========================= */}
        <h2 className="mb-3">熱銷補貨</h2>

        <div className="row g-3 mb-10">
          {/* ✅ col-6 col-md-3：手機 2 欄，平板以上 4 欄 */}
          <div className="col-6 col-md-3 position-relative">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-white bg-danger fw-bold">
              熱銷NO.1
            </p>

            <img
              className="img-fluid w-100"
              src={product4}
              alt="Twilight Mist"
            />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">
                Twilight Mist
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3 position-relative">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-white bg-primary-500 fw-bold">
              限量商品
            </p>

            <img
              className="img-fluid w-100"
              src={product7}
              alt="Mistglow"
            />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">
                Mistglow
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3 position-relative">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-primary-500 bg-primary-100 fw-bold">
              獨家販售
            </p>

            <img
              className="img-fluid w-100"
              src={product5}
              alt="Crimson Grove"
            />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">
                Crimson Grove
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3 position-relative">
            <p className="position-absolute top-0 start-0 m-2 px-2 py-1 text-white bg-danger-200 fw-bold">
              即將推出!
            </p>

            <img
              className="img-fluid w-100"
              src={product6}
              alt="Coming Soon"
            />
            <div>
              <p className="fs-5 mt-2 fw-bolder bg-primary-100 text-center">
                ???
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            依系列選購（拼圖）
            手機：自然往下排
            lg↑：左右拼圖
            ========================= */}
        <h2>依系列選購</h2>

        <div className="row g-3 mt-1 mb-10 series-puzzle">
          {/* 左：大圖 */}
          <div className="col-12 col-lg-6">
            <a href="#" className="puzzle-card puzzle-card--lg">
              <img src={product1} alt="Nightwave系列" />
              <div className="puzzle-overlay">
                <p className="puzzle-title mb-1">Nightwave 系列</p>
                <span className="puzzle-sub">探索夜行靈感</span>
              </div>
            </a>
          </div>
          {/* 右：兩張小圖 + 一張橫圖 */}
          <div className="col-12 col-lg-6">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <a href="#" className="puzzle-card puzzle-card--sm">
                  <img
                    src={product2}
                    alt="Crimson Grove系列"
                  />
                  <div className="puzzle-overlay">
                    <p className="puzzle-title mb-1">Crimson Grove</p>
                    <span className="puzzle-sub">穩定支撐・耐走</span>
                  </div>
                </a>
              </div>

              <div className="col-12 col-sm-6">
                <a href="#" className="puzzle-card puzzle-card--sm">
                  <img src={product3} alt="Mistglow系列" />
                  <div className="puzzle-overlay">
                    <p className="puzzle-title mb-1">Mistglow</p>
                    <span className="puzzle-sub">輕量日常・百搭</span>
                  </div>
                </a>
              </div>

              <div className="col-12">
                <a href="#" className="puzzle-card puzzle-card--wide">
                  <img src={product4} alt="限定企劃" />
                  <div className="puzzle-overlay">
                    <p className="puzzle-title mb-1">限定企劃</p>
                    <span className="puzzle-sub">每一步都是新故事</span>
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


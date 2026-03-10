import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function formatPrice(value) {
  return `NT$${Number(value).toLocaleString("en-US")}`;
}

export default function ProductList() {
  const [products, setProducts] = useState(() => {
    try {
      const cached = sessionStorage.getItem("products_cache");
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(products.length === 0);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function fetchProducts() {
      try {
        const res = await axios.get("http://localhost:3001/products");
        if (mounted) {
          const nextProducts = res.data ?? [];
          setProducts(nextProducts);
          sessionStorage.setItem("products_cache", JSON.stringify(nextProducts));
          setError("");
        }
      } catch {
        if (mounted) {
          if (products.length === 0) {
            setError("產品資料讀取失敗，請先啟動 json-server。");
          }
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(
    () => ["慢跑鞋", "訓練鞋", "休閒鞋", "聯名款", "配件"],
    []
  );

  return (
    <main className="container py-8 mb-4">
      <nav className="mb-6" aria-label="breadcrumb">
        <ol className="breadcrumb align-items-center mb-0">
          <li className="breadcrumb-item">
            <a href="/" className="breadcrumb-link">
              首頁
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            產品列表
          </li>
        </ol>
      </nav>

      <h1 className="h3 mt-6 py-1-5 mb-6">產品列表</h1>

      <div className="row">
        <div className="col-md-2 d-none d-md-block">
          <nav>
            <ul className="category list-unstyled mb-0">
              {categories.map((item, index) => (
                <li className="mb-4" key={item}>
                  <a
                    href="#"
                    className={`d-block py-3 list-title ${index === 0 ? "active" : ""}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="col-12 col-md-10">
          {error && products.length === 0 && <p className="text-danger mb-0">{error}</p>}

          {loading && products.length === 0 && (
            <div className="row">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="col-6 col-md-4 mb-12 mb-md-6" key={`skeleton-${index}`}>
                  <div className="placeholder-glow">
                    <span
                      className="placeholder w-100 d-block mb-3"
                      style={{ height: "240px" }}
                    ></span>
                    <span className="placeholder col-8 d-block mx-auto mb-2"></span>
                    <span className="placeholder col-4 d-block mx-auto"></span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {products.length > 0 && (
            <div className="row">
              {products.map((item) => (
                <div className="col-6 col-md-4 mb-12 mb-md-6" key={item.id}>
                  <a href="/product" className="d-block text-decoration-none text-dark">
                    <img
                      className="img-fluid mb-3 mb-md-2"
                      src={item.image}
                      alt={item.alt || item.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <h2 className="h6 mb-1 mb-md-0 text-center">{item.name}</h2>
                    <p className="md-p mb-0 text-center">{formatPrice(item.price)}</p>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

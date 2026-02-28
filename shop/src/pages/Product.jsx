import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        setError("商品資料載入失敗");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) return <div className="container py-5">資料載入中...</div>;
  if (error) return <div className="container py-5 text-danger">{error}</div>;

  return (
    <section className="container py-5">
      <h1 className="fw-bold mb-4">商品列表</h1>

      <div className="row g-4">
        {products.map((item) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: "240px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h2 className="fs-6 fw-bold">{item.title}</h2>
                <p className="text-muted small mb-2">{item.category}</p>
                <p className="fw-bold text-danger mt-auto mb-0">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ProductList from "../pages/Product";

vi.mock("axios");

describe("ProductList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
  });

  it("renders products from API and formats price", async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          name: "PLATFORM 404",
          price: 2600,
          image: "/images/products/product.png",
          alt: "PLATFORM 404",
        },
      ],
    });

    render(<ProductList />);

    expect(await screen.findByText("PLATFORM 404")).toBeInTheDocument();
    expect(screen.getByText("NT$2,600")).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3001/products");
  });

  it("renders error when API fails and no cache exists", async () => {
    axios.get.mockRejectedValueOnce(new Error("network error"));

    render(<ProductList />);

    expect(
      await screen.findByText("產品資料讀取失敗，請先啟動 json-server。")
    ).toBeInTheDocument();
  });

  it("uses cached products immediately before API resolves", async () => {
    sessionStorage.setItem(
      "products_cache",
      JSON.stringify([
        {
          id: 9,
          name: "Neofoam",
          price: 4000,
          image: "/images/products/product-8.png",
          alt: "Neofoam",
        },
      ])
    );

    axios.get.mockResolvedValueOnce({ data: [] });

    render(<ProductList />);

    expect(screen.getByText("Neofoam")).toBeInTheDocument();
    expect(screen.getByText("NT$4,000")).toBeInTheDocument();

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });
});

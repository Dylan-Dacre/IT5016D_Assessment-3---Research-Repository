import { useEffect, useState, useRef } from "react";
import api from "../../api";
import ProductList from "./ProductList";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import PaginationControls from "./PaginationControls";
import ScrollToTopArrow from "./ScrollToTop";
import "./ProductPage.css";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const transitioningPage = useRef(false);

  useEffect(() => {
    // We use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
    // to clean up so that we don’t introduce a memory leak
    // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await api.getProducts(page);
        if (!result.ok) {
          throw new Error("API Error");
        }
        const data = await result.json();
        if (!abortController.signal.aborted) {
          setProducts(data.products);
          setTotalPages(data.totalPages);
          transitioningPage.current = false;
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(true);
          transitioningPage.current = false;
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // If we are transitioning pages, we want to scroll to the top of the page
    if (transitioningPage.current) {
      fetchData();
      scrollToTop();
    } else {
      fetchData();
    }

    return () => abortController.abort();
  }, [page]);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle the previous page
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      transitioningPage.current = true;
    }
  };

  // Handle the next page
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      transitioningPage.current = true;
    }
  };

  return (
    <main className="main-layout section-padding main-back">
      {loading && <Loader />}
      {error && <ErrorMessage message="Error fetching products" />}
      <ProductList products={products} className="main-content" />
      <PaginationControls
        onPrev={handlePrevPage}
        onNext={handleNextPage}
        currentPage={page}
        totalPages={totalPages}
      />
      <ScrollToTopArrow />
    </main>
  );
};

export default ProductPage;

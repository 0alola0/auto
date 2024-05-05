'use client'
import React, { useEffect, useState } from "react";
import AppBreadcrumbs from "./components/AppBreadCrumbs";
import AppSearch from "./components/AppSearch";
import AppDisplay from "./components/AppDisplay";
import { fetchAllProducts } from "@/utils";
import Pagination from "./components/AppPagination";

const page = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState({ id: 1, title: "თარიღი კლებადი" });
  const [sortTime, setSortTime] = useState({ id: "3w", title: "ბოლო 3 კვირა" });
  const [filters, setFilters] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllProducts(currentPage, sortOrder, sortTime, filters);
        setProducts(data.data);
        setTotalPages(data.data.meta.last_page);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, [currentPage, sortOrder, sortTime, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <section className="container">
        <AppBreadcrumbs breadcrumbs={["მთავარი", "ძიება", "იყიდება"]} />
        <div className="flex flex-col md:flex-row gap-5">
          <AppSearch total={products?.meta?.total} setSearcher={setFilters}/>
          <AppDisplay total={products?.meta?.total} items={products.items} setSortOrder={setSortOrder} setSortTime={setSortTime}/>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  );
};

export default page;

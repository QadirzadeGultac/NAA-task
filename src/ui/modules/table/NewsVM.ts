import { useState, useMemo } from "react";
import { useGetNews } from "../../../app/api/news.api";
import useNewsColumn from "./page-data";
import type { NewsItemDTO } from "./TAddUpdate";

const NewsVM = () => {
  const { columns } = useNewsColumn();
  const { data } = useGetNews();
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePage, setActivePage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((item: NewsItemDTO) => {
      const matchCategory =
        categoryFilter === "all" || String(item.category) === categoryFilter;
      const matchStatus =
        statusFilter === "all" || String(item.status) === statusFilter;
      const matchSearch = item.title
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      return matchCategory && matchStatus && matchSearch;
    });
  }, [data, categoryFilter, statusFilter, searchQuery]);
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (value: string | null) => {
    if (value) {
      setItemsPerPage(Number(value));
      setActivePage(1);
    }
  };

  return {
    columns,
    paginatedData,
    totalPages,
    activePage,
    setActivePage,
    handleItemsPerPageChange,
    itemsPerPage,
    categoryFilter,
    setCategoryFilter,
    statusFilter,
    setStatusFilter,
    searchQuery,
    setSearchQuery,
  };
};

export default NewsVM;
'use client';

import { IMaterial } from "@/app/(public)/model/produto";
import { GetProducts } from "@/app/(public)/services/get-products";
import React, { useState, useEffect } from "react";
import { Pagination } from "semantic-ui-react";

export default function ProdutoPaginacao() {
  const [materiais, setMateriais] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      const products = await GetProducts();
      setMateriais(products);

      const pageSize = 10; 
      const totalPages = Math.ceil(products.length / pageSize);
      setTotalPages(totalPages);
    }

    fetchProducts();
  }, []);

  const handlePageChange = (event: any, { activePage }: any) => {
    setActivePage(activePage);
  };

  const renderMateriais = () => {
    const pageSize = 10; 
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const materiaisPaginados = materiais.slice(startIndex, endIndex);

    return materiaisPaginados.map((material: IMaterial) => (
      <div key={material.id}>{material.nome}</div>
    ));
  };

  return (
    <div>
      {renderMateriais()}
      <Pagination
        activePage={activePage}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

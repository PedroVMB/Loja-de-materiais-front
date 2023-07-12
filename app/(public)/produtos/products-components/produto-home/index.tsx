'use client';

import { IMaterial } from "@/app/(public)/model/produto";
import { GetProducts } from "@/app/(public)/services/get-products";
import ProdutoCard from "../cards";



export default async function ProdutoHome() {
  const materiais = await GetProducts();
  return (
    <>
      <div>

        <div>
          <h2>Produtos: </h2>
        </div>

        <div>
          <ul>
            {materiais.map((material: IMaterial) => <li>
              <ProdutoCard
                nome={material.nome}
                valor={material.valor}
                descricao={material.descricao}
                foto={material.foto}
              />
            </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
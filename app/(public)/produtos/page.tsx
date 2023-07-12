import ProdutoPaginacao from "./products-components/paginacao";
import ProdutoHome from "./products-components/produto-home";

export default async function ProdutosPage() {
  return<>
    <ProdutoHome />
    <ProdutoPaginacao />
  </>
}
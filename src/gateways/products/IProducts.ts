import {
  paginationOptions,
  Product,
  ProductDTO,
  ProductList,
} from "../../types";

export interface IProductsClient {
  listAllProducts: (options: paginationOptions) => Promise<ProductList>;
  showProduct: (productId: string) => Promise<Product>;
  createProduct: (productData: ProductDTO) => Promise<Product>;
  updateProduct: (productData: Product) => Promise<Product>;
  deleteProduct: (productId: string) => Promise<void>;
}

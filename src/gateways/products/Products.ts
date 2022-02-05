import GetCLient from "../../pb/loader";
import { IProductsClient } from "./IProducts";
import { ProductDTO, paginationOptions, Product } from "../../types";

export class ProductsClient implements IProductsClient {
  private productsClient;

  constructor() {
    this.productsClient = GetCLient({
      serviceName: "ProductService",
      address: "localhost:8088",
      fileName: "product",
    });
  }

  listAllProducts = async (options: paginationOptions) => {
    return await this.productsClient.listAllProducts(options);
  };
  showProduct = async (productId: string) => {
    return await this.productsClient.showProduct({ id: productId });
  };
  createProduct = async (productData: ProductDTO) => {
    return await this.productsClient.createProduct(productData);
  };
  updateProduct = async (productData: Product) => {
    return await this.productsClient.updateProduct(productData);
  };
  deleteProduct = async (productId: string) => {
    return await this.productsClient.deleteProduct({ id: productId });
  };
}

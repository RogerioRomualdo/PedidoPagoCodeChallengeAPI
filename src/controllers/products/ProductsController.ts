import { Request, Response } from "express";
import { ProductsClient } from "../../gateways/products/Products";
import { HttpStatusCodes } from "../../helpers/errorHandling";
import { paginationOptions, ProductDTO } from "../../types";
import { IProductsController } from "./IProductsController";

export class ProductsController implements IProductsController {
  constructor(private productsClient: ProductsClient) {}

  listAllProducts = async (
    request: Request<{}, {}, {}, paginationOptions>,
    response: Response
  ) => {
    try {
      const { currentPage, pageSize } = request.query;

      const products = await this.productsClient.listAllProducts({
        currentPage,
        pageSize,
      });

      response.status(HttpStatusCodes.OK).send(products);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  showProduct = async (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => {
    try {
      const { id } = request.params;

      const product = await this.productsClient.showProduct(id);

      response.status(HttpStatusCodes.OK).send(product);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  createProduct = async (
    request: Request<{}, {}, ProductDTO, {}>,
    response: Response
  ) => {
    try {
      const { ...pharmacyData } = request.body;

      const product = await this.productsClient.createProduct(pharmacyData);

      response.status(HttpStatusCodes.OK).send(product);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  updateProduct = async (
    request: Request<{ id: string }, {}, ProductDTO, {}>,
    response: Response
  ) => {
    try {
      const { ...productData } = request.body;
      const { id } = request.params;

      const product = await this.productsClient.updateProduct({
        id,
        ...productData,
      });

      response.status(HttpStatusCodes.OK).send(product);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  deleteProduct = async (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => {
    try {
      const { id } = request.params;

      await this.productsClient.deleteProduct(id);

      response.status(HttpStatusCodes.OK).send();
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
}

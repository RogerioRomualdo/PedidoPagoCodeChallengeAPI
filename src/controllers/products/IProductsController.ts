import { Request, Response } from "express";
import { paginationOptions, ProductDTO } from "../../types";

export interface IProductsController {
  listAllProducts: (
    request: Request<{}, {}, {}, paginationOptions>,
    response: Response
  ) => Promise<void>;
  showProduct: (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => Promise<void>;
  createProduct: (
    request: Request<{}, {}, ProductDTO, {}>,
    response: Response
  ) => Promise<void>;
  updateProduct: (
    request: Request<{ id: string }, {}, ProductDTO, {}>,
    response: Response
  ) => Promise<void>;
  deleteProduct: (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => Promise<void>;
}

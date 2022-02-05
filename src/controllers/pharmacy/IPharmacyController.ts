import { Request, Response } from "express";
import { paginationOptions, PharmacyDTO } from "../../types";

export interface IPharmacyController {
  listAllPharmacies: (
    request: Request<{}, {}, {}, paginationOptions>,
    response: Response
  ) => Promise<void>;
  showPharmacy: (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => Promise<void>;
  createPharmacy: (
    request: Request<{}, {}, PharmacyDTO, {}>,
    response: Response
  ) => Promise<void>;
  updatePharmacy: (
    request: Request<{ id: string }, {}, PharmacyDTO, {}>,
    response: Response
  ) => Promise<void>;
  deletePharmacy: (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => Promise<void>;
  linkProductsToPharmacy: (
    request: Request<{ id: string }, {}, { productIds: Array<string> }, {}>,
    response: Response
  ) => Promise<void>;
}

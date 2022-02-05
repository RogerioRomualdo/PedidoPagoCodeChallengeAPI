import { Request, Response } from "express";
import { PharmacyClient } from "../../gateways/pharmacy/Pharmacy";
import { HttpStatusCodes } from "../../helpers/errorHandling";
import { paginationOptions, PharmacyDTO } from "../../types";
import { IPharmacyController } from "./IPharmacyController";

export class PharmacyController implements IPharmacyController {
  constructor(private pharmacyClient: PharmacyClient) {}

  listAllPharmacies = async (
    request: Request<{}, {}, {}, paginationOptions>,
    response: Response
  ) => {
    try {
      const { currentPage, pageSize } = request.query;

      const pharmacies = await this.pharmacyClient.listAllPharmacies({
        currentPage,
        pageSize,
      });

      response.status(HttpStatusCodes.OK).send(pharmacies);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  showPharmacy = async (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => {
    try {
      const { id } = request.params;

      const pharmacy = await this.pharmacyClient.showPharmacy(id);

      response.status(HttpStatusCodes.OK).send(pharmacy);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  createPharmacy = async (
    request: Request<{}, {}, PharmacyDTO, {}>,
    response: Response
  ) => {
    try {
      const { ...pharmacyData } = request.body;

      const pharmacy = await this.pharmacyClient.createPharmacy(pharmacyData);

      response.status(HttpStatusCodes.Created).send(pharmacy);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  updatePharmacy = async (
    request: Request<{ id: string }, {}, PharmacyDTO, {}>,
    response: Response
  ) => {
    try {
      const { ...phramacyData } = request.body;
      const { id } = request.params;

      const pharmacy = await this.pharmacyClient.updatePharmacy({
        id,
        ...phramacyData,
      });

      response.status(HttpStatusCodes.OK).send(pharmacy);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  deletePharmacy = async (
    request: Request<{ id: string }, {}, {}, {}>,
    response: Response
  ) => {
    try {
      const { id } = request.params;

      await this.pharmacyClient.deletePharmacy(id);

      response.status(HttpStatusCodes.OK).send({});
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
  linkProductsToPharmacy = async (
    request: Request<{ id: string }, {}, { productIds: Array<string> }, {}>,
    response: Response
  ) => {
    try {
      const { productIds } = request.body;
      const { id: pharmacyId } = request.params;

      const pharmacy = await this.pharmacyClient.linkProductsToPharmacy(
        pharmacyId,
        productIds
      );

      response.status(HttpStatusCodes.OK).send(pharmacy);
    } catch (e) {
      response.status(HttpStatusCodes.InternalServerError).send(e);
    }
  };
}

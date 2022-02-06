import GetCLient from "../../pb/loader";
import { paginationOptions, Pharmacy, PharmacyDTO } from "../../types";
import { IPharmacyClient } from "./IPharmacy";

import dotenv from "dotenv";
dotenv.config();

export class PharmacyClient implements IPharmacyClient {
  private productsClient;

  constructor() {
    this.productsClient = GetCLient({
      serviceName: "PharmacyService",
      address: `${process.env.MS_HOST}:${process.env.MSPHARMACY_PORT}`,
      fileName: "pharmacy",
    });
  }

  listAllPharmacies = async (options: paginationOptions) => {
    return await this.productsClient.listAllPharmacies(options);
  };
  showPharmacy = async (pharmacyId: string) => {
    return await this.productsClient.showPharmacy({ id: pharmacyId });
  };
  createPharmacy = async (pharmacyData: PharmacyDTO) => {
    return await this.productsClient.createPharmacy(pharmacyData);
  };
  updatePharmacy = async (pharmacyData: Pharmacy) => {
    return await this.productsClient.updatePharmacy(pharmacyData);
  };
  deletePharmacy = async (pharmacyId: string) => {
    return await this.productsClient.deletePharmacy({ id: pharmacyId });
  };
  linkProductsToPharmacy = async (
    pharmacyId: string,
    productIds: Array<string>
  ) => {
    return await this.productsClient.linkProductsToPharmacy({
      pharmacyId,
      productIds,
    });
  };
}

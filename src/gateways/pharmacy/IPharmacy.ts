import {
  paginationOptions,
  Pharmacy,
  PharmacyDTO,
  PharmacyList,
  PharmacyWithProducts,
} from "../../types";

export interface IPharmacyClient {
  listAllPharmacies: (options: paginationOptions) => Promise<PharmacyList>;
  showPharmacy: (pharmacyId: string) => Promise<PharmacyWithProducts>;
  createPharmacy: (pharmacyData: PharmacyDTO) => Promise<Pharmacy>;
  updatePharmacy: (pharmacyData: Pharmacy) => Promise<Pharmacy>;
  deletePharmacy: (pharmacyId: string) => Promise<void>;
  linkProductsToPharmacy: (
    pharmacyId: string,
    productIds: Array<string>
  ) => Promise<PharmacyWithProducts>;
}

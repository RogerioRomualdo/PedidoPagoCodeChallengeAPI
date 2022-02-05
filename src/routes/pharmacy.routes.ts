import { Router } from "express";
import { PharmacyController } from "../controllers/pharmacy/PharmacyController";
import { PharmacyClient } from "../gateways/pharmacy/Pharmacy";

const pharmacyClient = new PharmacyClient();
const pharmacyController = new PharmacyController(pharmacyClient);

const router = Router();

router.get("/pharmacies", pharmacyController.listAllPharmacies);
router.get("/pharmacies/:id", pharmacyController.showPharmacy);
router.post("/pharmacies", pharmacyController.createPharmacy);
router.put("/pharmacies/:id", pharmacyController.updatePharmacy);
router.delete("/pharmacies/:id", pharmacyController.deletePharmacy);

router.post(
  "/pharmacies/:id/products",
  pharmacyController.linkProductsToPharmacy
);

export default router;

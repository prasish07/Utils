import { Router } from "express";
import multer from "multer";

import {
  headerComponent,
  inputHeaderComponent,
  getContentWrapperComponent,
  getFooter,
  getMenuItems,
  getOtherToolsComponent,
  getOtherToolsItems,
  getOutputHeaderComponent,
  runCode,
  getCopyToast,
  readTheUploadedFile,
} from "../controller/component.controller.js";

const router = Router();

// Set up the multer storage for file uploads
const storage = multer.memoryStorage();

// Create a multer instance with the defined storage
const upload = multer({ storage });

router.route("/header").get(headerComponent);

router.route("/inputHeader").get(inputHeaderComponent);

router.route("/outputHeader").get(getOutputHeaderComponent);

router.route("/contentWrapper").get(getContentWrapperComponent);

router.route("/othersTools").get(getOtherToolsComponent);

router.route("/runCode").post(runCode);

router.route("/footer").get(getFooter);

router.route("/menu").get(getMenuItems);

router.route("/otherToolsEjs").get(getOtherToolsItems);

router.route("/copy").get(getCopyToast);

router.route("/uploadFile").post(upload.single("myFile"), readTheUploadedFile);

export default router;

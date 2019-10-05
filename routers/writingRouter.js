import express from "express";
import routes from "../routes";
import {
  writing,
  upload,
  writingDetail,
  editWriting,
  deleteWriting
} from "../controllers/writingController";

const writingRouter = express.Router();

writingRouter.get("/", writing);
writingRouter.get(routes.upload, upload);
writingRouter.get(routes.writingDetail, writingDetail);
writingRouter.get(routes.editWriting, editWriting);
writingRouter.get(routes.deleteWriting, deleteWriting);

export default writingRouter;

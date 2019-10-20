import express from "express";
import routes from "../routes";
import {
  writing,
  writingDetail,
  editWriting,
  deleteWriting,
  getUpload,
  postUpload
} from "../controllers/writingController";

const writingRouter = express.Router();

writingRouter.get("/", writing);

writingRouter.get(routes.upload, getUpload);
writingRouter.post(routes.upload, postUpload);

writingRouter.get(routes.writingDetail(), writingDetail);
writingRouter.get(routes.editWriting, editWriting);
writingRouter.get(routes.deleteWriting, deleteWriting);

export default writingRouter;

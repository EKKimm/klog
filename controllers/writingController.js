import routes from "../routes";

export const writing = (req, res) => res.render("writing");

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, mainText }
  } = req;
  //할일: 글 업로드 및 저장
  res.redirect(routes.writingDetail(1234));
};

export const writingDetail = (req, res) =>
  res.render("writingDetail", { pageTitle: "Writing Detail" });
export const editWriting = (req, res) =>
  res.render("editWriting", { pageTitle: "Edit Writing" });
export const deleteWriting = (req, res) =>
  res.render("deleteWriting", { pageTitle: "Delete Writing" });

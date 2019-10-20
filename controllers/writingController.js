export const writing = (req, res) => res.render("writing");
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const writingDetail = (req, res) =>
  res.render("writingDetail", { pageTitle: "Writing Detail" });
export const editWriting = (req, res) =>
  res.render("editWriting", { pageTitle: "Edit Writing" });
export const deleteWriting = (req, res) =>
  res.render("deleteWriting", { pageTitle: "Delete Writing" });

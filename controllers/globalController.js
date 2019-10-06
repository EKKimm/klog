export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const search = (req, res) => {
  //console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req;
  //console.log(searchingBy);
  res.render("search", { pageTitle: "Search", searchingBy });
};

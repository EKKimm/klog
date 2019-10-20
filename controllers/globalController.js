import { writings } from "../db";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", writings });

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  //console.log(req.body);
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    //해야할 일 : 사용자 등록
    //해야할 일 : 사용자 로그인
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const search = (req, res) => {
  //console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req;
  //console.log(searchingBy);
  res.render("search", { pageTitle: "Search", searchingBy, writings });
};

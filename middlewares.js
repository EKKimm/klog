import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Klog";
  res.locals.routes = routes;
  next();
};

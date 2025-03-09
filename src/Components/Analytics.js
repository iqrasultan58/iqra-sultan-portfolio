import ReactGA from "react-ga4";

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

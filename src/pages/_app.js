import PropTypes from "prop-types";
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  pageProps: PropTypes.object,
  Component: PropTypes.element,
};

export default MyApp;

import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {NavBar, FooterNav, FooterMeta, FooterCopy} from "views/_sections";
import {Drawer, ScrollTop} from "views/_components";
import animateScrollTo from "animated-scroll-to";
import {connect} from "react-redux";

import routes from "routes.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);
//test
function _Landing(props) {
  useEffect(() => {
    const anchor = window.location.hash.toLowerCase();
    if (anchor) {
      let elem = document.querySelector(anchor);
      if (elem) {
        setTimeout(function() {
          animateScrollTo(elem);
        }, 500);
      }
    }
  });

  const {navOpen} = props;
  return (
    <>
      {!navOpen && <ScrollTop />}
      <Drawer />
      <NavBar />
      {switchRoutes}
      <FooterNav />
      <FooterMeta />
      <FooterCopy />
    </>
  );
}

const mapStateToProps = state => {
  const {navOpen} = state;
  return {
    navOpen
  };
};

const Landing = connect(
  mapStateToProps,
  null
)(_Landing);

export default Landing;

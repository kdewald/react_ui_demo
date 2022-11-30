import React from "react";
import MuiButton from "@mui/material/Button";
import { NavLink, withRouter } from "react-router-dom";
// import { globalHistory as history } from '@reach/router'
import parse from "url-parse";

export const externalUrlGen = ({
  destination,
  qs = {},
  href,
  langLocation = "",
}: any) => {
  let url;

  // Split the language and the location
  const langLocationSplitted = langLocation.split("-");
  const language = langLocationSplitted[0] || "en";
  const location = langLocationSplitted[1] || "us";

  switch (destination) {
    default:
      url = (href || "")
        .replace("{lang}", language)
        .replace("{location}", location);
      break;
  }

  const finalHref = parse(url, true);
  // Merge the original URL query params with the new ref
  finalHref.set("query", Object.assign({}, finalHref.query, qs));
  return finalHref.toString();
};

// For internal URLs use the Link component.
const InternalLink = ({
  children,
  to,
  activeClassName,
  activeStyle,
  exact,
  strict,
  isActive,
  location,
  staticContext,
  ...otherProps
}: any) => {
  return (
    <NavLink
      to={to}
      activeClassName={activeClassName}
      activeStyle={activeStyle}
      exact={exact}
      strict={strict}
      isActive={isActive}
      location={location}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};

const ExternalLink = ({ component, children, ...props }: any) => {
  if (
    component &&
    component.options &&
    component.options.name === "MuiButton"
  ) {
    return (
      <MuiButton {...props} rel="noopener">
        {children}
      </MuiButton>
    );
  } else {
    if (children) {
      return (
        <NavLink {...props} rel="noopener">
          {children}
        </NavLink>
      );
    } else {
      return <NavLink {...props} rel="noopener" />;
    }
  }
};

const Link = ({ children, ...props }: any) => {
  // Decide what Link to use. If there's no "to" parameter, then it's an external link. Handle it like that
  //console.log("props.to", props.to);
  if (!props.to) {
    return <ExternalLink {...props}>{children}</ExternalLink>;
  } else {
    return <InternalLink {...props}>{children}</InternalLink>;
  }
};

export default withRouter(Link);

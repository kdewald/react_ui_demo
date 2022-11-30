import React from "react";
import { useIntl } from "react-intl";
import makeStyles from '@mui/styles/makeStyles';
import { useLocation, useHistory } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { getMenu } from "./structure";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const { formatMessage: i18n } = useIntl();

  const { pathname: currentPathname } = useLocation();
  const history = useHistory();

  const [value, setValue] = React.useState(currentPathname);

  const handleChange = (event, newValue) => {
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      {getMenu("MainMenu").map((menuItem) => {
        return (
          <BottomNavigationAction
            label={i18n({ id: menuItem.i18nNamespace })}
            key={menuItem.key}
            value={menuItem.path}
            icon={<menuItem.Icon />}
          />
        );
      })}
    </BottomNavigation>
  );
}

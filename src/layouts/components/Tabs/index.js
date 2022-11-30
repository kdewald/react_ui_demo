import React from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TabLabel from "./TabLabel";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: theme.spacing(8),
    borderBottom: "1px solid",
    //borderBottomColor: theme.palette.divider,
  },
  tabs: {
    // flexGrow: 1,
    height: theme.spacing(6),
    marginTop: theme.spacing(2),
  },
  tab: {
    textTransform: "none",
    // height: theme.spacing(6),
    // marginTop: theme.spacing(2),
    // minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(4),
    padding: 0,
    "&:hover": {
      color: theme.colors.main.prussianBlue,
      opacity: 1,
    },
    "&$selected": {
      borderBottom: "1px solid",
      borderColor: theme.palette.primary.main,
      border: 0,
      color: "white",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: theme.colors.main.prussianBlue,
    },
  },
}));

export default function TopBarWithTabs({ onClickTab, activeTab }) {
  const classes = useStyles();

  const tabs = [
    { id: "1", label: "Conversation 1" },
    { id: "2", label: "Conversation with the person 2" },
    { id: "3", label: "Conversation 3" },
    { id: "4", label: "Conversation 4" },
    { id: "5", label: "Conversation 5" },
    { id: "6", label: "Conversation 6" },
    { id: "7", label: "Conversation 7" },
    { id: "8", label: "Conversation 8" },
    { id: "9", label: "Conversation 10" },
    { id: "10", label: "Conversation 10" },
    { id: "11", label: "Conversation 11" },
  ];

  function handleCloseTab(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <Tabs
      className={classes.tabs}
      value={activeTab}
      onChange={onClickTab}
      variant="scrollable"
      scrollButtons
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable conversations list"
      allowScrollButtonsMobile
    >
      {tabs.map((t) => (
        <Tab
          className={classes.tab}
          label={
            <TabLabel
              {...t}
              icon={<WhatsAppIcon />}
              onDelete={handleCloseTab}
            />
          }
          id={t.id}
          key={`conv-tab-${t.id}`}
        />
      ))}
    </Tabs>
  );
}

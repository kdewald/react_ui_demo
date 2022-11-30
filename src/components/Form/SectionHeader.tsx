import React from "react";
import { Typography } from "@mui/material";

type Props = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }: Props) => {
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </React.Fragment>
  );
};

export default SectionHeader;

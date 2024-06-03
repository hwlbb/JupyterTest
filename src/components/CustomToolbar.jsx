import { Toolbar, styled } from "@mui/material";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 48,
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    minHeight: 48,
  },
}));

export default CustomToolbar;

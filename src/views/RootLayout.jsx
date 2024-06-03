import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import CustomToolbar from "../components/CustomToolbar";

function RootLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <HeaderBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: `calc(100% - 48px)`,
            p: 0,
          }}
        >
          <CustomToolbar />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default RootLayout;

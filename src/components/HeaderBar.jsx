import { AppBar, Box, styled } from "@mui/material";
import { Link } from "react-router-dom"; // 引入 Link 组件
import CustomToolbar from "./CustomToolbar";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "none",
  height: 48,
  [theme.breakpoints.up("sm")]: {
    height: 48,
  },
}));

const CustomLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(2),
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "0.9rem",
}));
function HeaderBar() {
  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <img
          className="logo-image"
          src="/pbvr_logo.svg"
          alt="logo"
          draggable="false"
          style={{ marginRight: "auto" }} // 将logo推到左边
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            flexGrow: 1,
            marginLeft: "24px",
          }}
        >
          <CustomLink to="/competitions">竞赛</CustomLink>
          <CustomLink to="/datasets">数据集</CustomLink>
          <CustomLink to="/models">模型</CustomLink>
          <CustomLink to="/editor">编辑器</CustomLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="user-avatar"
            src="/user.svg"
            alt="user avatar"
            draggable="false"
            style={{
              marginLeft: "auto",
              width: 24,
              height: 24,
              borderRadius: "50%",
            }} // 将头像推到右边
          />
        </Box>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default HeaderBar;

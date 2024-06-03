import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h3" fontWeight="bold">发生错误</Typography>
      <Typography mt={2}>对不起，发生了意外错误</Typography>
      <Typography mt={2}><i>{error.statusText || error.message}</i></Typography>
    </Box>
  );
}

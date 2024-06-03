import { Box, Typography } from "@mui/material";

export default function NoContent() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" >
      <Typography variant="h3" fontWeight="bold">暂无内容</Typography>
      <Typography mt={2}>此页面暂无内容，仅编辑器可用</Typography>
    </Box>
  );
}

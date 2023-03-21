import { Box } from "@chakra-ui/react";
import Banner from "@/patterns/Banner";

const ShoppableVideo = ({ shoppabledata }) => {
  const { title, breadcrumb } = shoppabledata;
  return (
    <Box>
      <Banner title={title} breadcrumb={breadcrumb} />
    </Box>
  );
};
export default ShoppableVideo;

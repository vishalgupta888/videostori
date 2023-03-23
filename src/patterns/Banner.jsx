import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Heading,
} from "@chakra-ui/react";
const Banner = ({ title, breadcrumb }) => {
  return (
    <Center flexDirection="column" h={["40vh", "50vh"]} bg="light_bg.blue">
      <Heading mx="auto">{title}</Heading>
      {breadcrumb && (
        <Breadcrumb mt="1em" textAlign={"center"}>
          {breadcrumb.map((item, index) => {
            return (
              <BreadcrumbItem
                color="text.base"
                isCurrentPage={item.isCurrentPage}
                key={index + item.link}
              >
                <BreadcrumbLink href={item.link}>{item.text}</BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      )}
    </Center>
  );
};

export default Banner;

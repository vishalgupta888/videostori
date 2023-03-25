import Banner from "@/patterns/Banner";
import { blogText } from "@/constants/layoutConstants";
import ImageTextTable from "../ImageTextTable";

const Blog = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Blog", link: "blog", isCurrentPage: true },
  ];
  return (
    <>
      <Banner title="Latest Blog" breadcrumb={breadcrumbs} />
      <ImageTextTable imageTextdata={blogText} />
    </>
  );
};
export default Blog;

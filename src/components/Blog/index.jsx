import Banner from "@/patterns/Banner";
import { blogText } from "@/constants/layoutConstants";
import ImageTextTable from "../ImageTextTable";

const Blog = () => {
  return (
    <>
      <Banner title="Latest Blog" />
      <ImageTextTable imageTextdata={blogText} index={2} />
    </>
  );
};
export default Blog;

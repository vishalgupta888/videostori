import { NextSeo } from "next-seo";

const SEOContainer = ({ seoData }) => {
  return (
    seoData && (
      <NextSeo
        title={seoData.title}
        description={seoData.description}
        url={seoData.url}
        image={seoData.image}
        openGraph={{
          url: seoData.url,
          title: seoData.title,
          description: seoData.description,
          images: [
            {
              url: seoData.image,

              alt: "Og Image Alt",
            },
          ],
          site_name: seoData.title,
        }}
        twitter={{
          handle: "@handle",
          site: seoData.title,
          cardType: "summary_large_image",
        }}
      />
    )
  );
};
export default SEOContainer;

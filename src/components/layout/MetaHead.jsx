import Head from "next/head";

const MetaHead = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "8World"}</title>
      <meta
        name="description"
        content={
          description ||
          "팰월드 정보를 검색을 통해서 쉽게 확인하세요."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "8World"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://www.8world.co.kr"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="8World" />
    </Head>
  );
};
export default MetaHead;
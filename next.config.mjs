
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const getConfig = async () => {
  const remarkGfm = (await import('remark-gfm')).default;
  const rehypePrettyCode = (await import('rehype-pretty-code')).default;
  const withMDX = createMDX({
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]]
    }
  });
  return withMDX({
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    images: { unoptimized: true }, // simpler local dev
  // experimental: {
  //   mdxRs: true
  // }
  });
};

export default getConfig();

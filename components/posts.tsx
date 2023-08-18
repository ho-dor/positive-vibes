export const Posts = ({ posts }: { posts: string[] }) => {
  return <>{posts.map((post) => post)}</>;
};

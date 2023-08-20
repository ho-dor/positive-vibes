export const Post = ({ post }: { post: string }) => {
  return (
    <div className='min-w-full m-2 ml-4 shadow-xl p-6 rounded-lg'>
      <h1>{post}</h1>
      <div className='border-solid border-1 border-gray-500' />
    </div>
  );
};

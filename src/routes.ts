export {}

export const blog = (params: { category: string; blogId: string }) =>
  `/blog/${params.category}/${params.blogId}`

export const home = () => '/'

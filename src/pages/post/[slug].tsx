import React from "react";
import BaseLayout from "components/layouts/BaseLayout";
// import * as PostUtils from "utils/PostUtils";

type IProps = {
  post: any
}

const Post = ({ post }: IProps) => {
  return (
    <BaseLayout>
      <post.react />
    </BaseLayout>
  )
}
Post.getInitialProps = async function ({ query }: any) {
  console.log("getInitialProps", query);
  const { slug } = query;
  const post = await import(`content/posts/${slug}.md`);
  return {
    post
  }
}

export default Post;

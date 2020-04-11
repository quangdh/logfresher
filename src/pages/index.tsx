import React from "react";
import BaseLayout from "components/layouts/BaseLayout";
// import {react as HomeContent} from "content/pages/Home.md";
import Link from 'next/link';
import * as PostUtils from "utils/PostUtils";

type IProps = {
  posts: any[]
}

const Home: React.FC<IProps> = ({ posts }: IProps) => {
  return (
    <BaseLayout>
      {posts.map(blogName => {
        const slug = blogName.substring(0, blogName.length - 3);
        return (
          <Link href={`/posts/${slug}`}>
            <a>{blogName}</a>
          </Link>
        )
      })}
    </BaseLayout>
  )
}

export async function getStaticProps() {
  try {
    const posts = await PostUtils.loadPosts();
    return {
      props: {
        posts
      },
    }
  } catch (error) {
    return {
      props: { posts: [] },
    }
  }
}

export default Home;

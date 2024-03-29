import React, { Suspense } from 'react'
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { next: { revalidate: 3600 } });
  if (!res) {
    throw new Error("Something went wrong");
  }
  return res.json()
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/20097993/pexels-photo-20097993/free-photo-of-a-yellow-train-traveling-over-a-bridge-in-a-city.jpeg" alt="" fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20097993/pexels-photo-20097993/free-photo-of-a-yellow-train-traveling-over-a-bridge-in-a-city.jpeg" width={50} height={50} alt="" />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage

import React from 'react'
import styles from './postCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/20097993/pexels-photo-20097993/free-photo-of-a-yellow-train-traveling-over-a-bridge-in-a-city.jpeg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard

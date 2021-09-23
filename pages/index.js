import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { storeImageData } from '@resoc/img-data'

export default function Home() {
  return (
    <div className={styles.container}>
      No need for content, really
    </div>
  )
}

export async function getStaticProps(context) {
  const title = "Automated social image for NextJS on Netlify";
  const description = "With getStaticProps and a Netlify Function";
  const imgSlug = 'homepage';

  await storeImageData(
    'resoc-image-data.json',
    imgSlug, {
      template: 'default',
      values: {
        title,
        mainImageUrl: 'https://resoc.io/assets/img/demo/photos/pexels-photo-371589.jpeg',
        textColor: '#ffffff',
        backgroundColor: '#20552a'
      }
    }
  );

  return {
    props: {
      title,
      description,
      imgSlug
    }
  }
}

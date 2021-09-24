import styles from '../styles/Home.module.css'
import { storeImageData } from '@resoc/img-data'

export default function Home() {
  return (
    <div className={styles.container}>
      No need for content, really
    </div>
  )
}

const prepareStaticProps = async (title, description, imgSlug) => {
  await storeImageData(
    'resoc-image-data.json',
    imgSlug, {
      template: 'default',
      values: { title, description }
    }
  );

  return {
    props: {
      title,
      description,
      imgSlug
    }
  };
}

export async function getStaticProps(context) {
  return await prepareStaticProps(
    "Automated social images for NextJS on Netlify",
    "With getStaticProps and @resoc/netlify-plugin-social-image",
    "homepage"
  );
}

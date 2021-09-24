import styles from '../styles/Home.module.css'
import { storeImageData } from '@resoc/img-data'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Automated Social Images on Netlify
          <br/>
          With Next.js
        </h1>

        <p className={styles.description}>
          Using the <a href="https://www.npmjs.com/package/itdk">
            Resoc image template development kit
          </a> and <a href="https://www.npmjs.com/package/@resoc/netlify-plugin-social-image">
            Resoc social image Netlify build plugin
          </a>
        </p>

        <div className={styles.grid}>
          <a href="https://developers.facebook.com/tools/debug" className={styles.card}>
            <h2>Try &rarr;</h2>
            <p>Submit this page to the Facebook debugger, or share it on a social network.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Follow the tutorial and build this app yourself.</p>
          </a>
        </div>
      </main>
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

// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Card from '../components/modules/card/card';
import Form from '../components/modules/form/form';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.index__logo}>
        <Image src="/img/logo.svg" alt="logo" width={116.34} height={24} />
      </div>
      <Card />
      <Form />
    </div>

  );
}

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      window.location.replace('https://classwidgets.rinlit.cn/');
      setShouldRender(false);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <Layout>
      <main className={styles.heroBanner}>
        <div className={styles.contentContainer}>
          <h1>提示</h1>
          <h2>您当前正处于开发环境</h2>
          <br />
          <a href="/user_docs" className={styles.link}>用户文档</a>
          <a href="/dev_docs" className={styles.link}>开发者文档</a>
          <a href="/standards" className={styles.link}>社区规范</a>
        </div>
      </main>
    </Layout>
  );
}

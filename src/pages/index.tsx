import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src="/img/axe/axentax-logo.png" alt="axentax logo" style={{height: '120px', marginRight: '10px'}} />
            <h1 className="hero__title">{siteConfig.title}</h1>
          </div>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start">
            Axentax Quickstart - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation - 次世代型サウンドスクリプト`}
      description="Axentaxは、自由度と精密さを両立した次世代型サウンドスクリプト言語です。本ドキュメントでは基本操作から応用テクニックまでを網羅します。<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

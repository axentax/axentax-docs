import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'シンプルな文法でパワフルに表現',
    Svg: require('@site/static/img/axe/icon-1-simple-powerful.svg').default,
    description: (
      <>
        Axentaxは直感的な記法で、高度な奏法や音楽表現をシンプルに実現できます。複雑な構造を簡潔に書き、音楽制作の可能性を広げましょう。
      </>
    ),
  },
  {
    title: '演奏テクニックを自在に操る',
    Svg: require('@site/static/img/axe/icon-2-flexible-control.svg').default,
    description: (
      <>
        自由度の高いマッピングやステップ奏法により、演奏表現を精密に制御できます。思いもよらない音楽的アイデアが次々と広がります。
      </>
    ),
  },
  {
    title: '思いつきを即座に音楽へ',
    Svg: require('@site/static/img/axe/icon-3-instant-idea.svg').default,
    description: (
      <>
        Axentaxはスケールやアルペジオを瞬時に展開。ひらめいたアイデアをすぐさま試し、あなたの創造力をスピーディーに刺激します。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

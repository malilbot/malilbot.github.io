import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tons of features',
    Svg: require('../../static/img/youtube.svg').default,
    description: (
      <>
        Malil comes with features you dont see in any other bot.
      </>
    ),
  },
  {
    title: 'Great documentation',
    Svg: require('../../static/img/documentation.svg').default,
    description: (
      <>
        Malil is a bot with great documentation and support.
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('../../static/img/documentation.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tons of features',
    description: (
      <>
        Malil comes with features you dont see in any other bot.
      </>
    ),
  },
  {
    title: 'Great documentation',
    description: (
      <>
        Malil is a bot with great documentation and support.
      </>
    ),
  },
  {
    title: 'Utility',
    description: (
      <>
        Malil has lots of utility commands that may come useful.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
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

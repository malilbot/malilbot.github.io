import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../css/HomepageFeatures';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>

				<div className={styles.buttons}>
					<p>
						<Link
							className="buttonWrapper button button--secondary button--lg"
							to="/docs/intro"
						>
							Malil documentation
						</Link>
					</p>
					<p></p>
					<p>
						<Link className="button button--secondary button--lg" to="/invite">
							Invite Malil
						</Link>
					</p>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	return (
		<Layout
			title={`Home page`}
			description="Malil the all in one discord bot <head />"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}

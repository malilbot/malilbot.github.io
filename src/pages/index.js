import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));
function HomepageHeader() {
	const classes = useStyles();
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>

				<div className={classes.root}>
					<p>
						<Button variant="contained" color="primary" href="/docs/intro">
							Malil documentation
						</Button>
					</p>

					<p>
						<Button variant="contained" color="primary" href="/invite">
							Invite Malil
						</Button>
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

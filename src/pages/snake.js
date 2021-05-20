import React from 'react';
import Layout from '@theme/Layout';
import Snake from '../components/Snake';

export default function Home() {
	return (
		<Layout
			title={`Home page`}
			description="Malil the all in one discord bot <head />"
		>
			<Snake />
		</Layout>
	);
}

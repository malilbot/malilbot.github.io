import React from 'react';
import Layout from '@theme/Layout';
import Button from '@material-ui/core/Button';
export default function Home() {
	return (
		<Layout
			title={`Home page`}
			description="Malil the all in one discord bot <head />"
		>
			<Button variant="contained" color="primary" href="/">
				back
			</Button>
			<Button variant="contained" color="primary" href="/json/interfaces">
				interfaces
			</Button>
			<Button variant="contained" color="primary" href="/json/jstojson">
				jsontojs
			</Button>
			<Button variant="contained" color="primary" href="/json/jsonsorter">
				jsonsorter
			</Button>
		</Layout>
	);
}

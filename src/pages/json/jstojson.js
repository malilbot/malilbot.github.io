import React from 'react';
import Layout from '@theme/Layout';
import TextField from '@material-ui/core/TextField';
import styles from './jstojson.module.css';
import Button from '@material-ui/core/Button';
export default function Home() {
	const [textInput, setTextInput] = React.useState('');

	const handleChange = (event) => {
		try {
			const parsed = JSON.parse(event.target.value);
			const string = JSON.stringify(parsed);
			setTextInput(string);
		} catch (e) {
			setTextInput(e);
		}
	};
	return (
		<Layout
			title={`Home page`}
			description="Malil the all in one discord bot <head />"
		>
			<div className={styles.container}>
				<TextField
					onChange={handleChange}
					id="filled-multiline-static"
					label="javascript object"
					multiline
					rows={15}
					variant="filled"
					style={{
						width: '50rem',
						backgroundColor: '#303846',
					}}
					inputProps={{
						style: { color: 'white' },
					}}
				/>

				<TextField
					value={textInput}
					id="filled-multiline-static"
					label="json object here"
					multiline
					rows={15}
					variant="filled"
					style={{
						width: '50rem',
						backgroundColor: '#303846',
					}}
					inputProps={{
						style: { color: 'white' },
					}}
				/>
			</div>
		</Layout>
	);
}

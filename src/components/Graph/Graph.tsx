import React from "react";
import PropTypes from "../../../node_modules/prop-types";

interface IProps {
	data: Array<{
		label: string;
		valor: number;
	}>;
}

const Graph = ({ data }: IProps) => {
	const mapval = (
		val: number,
		valmin: number,
		valmax: number,
		min: number,
		max: number
	): number => {
		return ((val - valmin) * (max - min)) / (valmax - valmin) + min;
	};

	const w = 400;
	const h = 300;
	let path = `0,${h}`;
	let minval = data[0].valor;
	let maxval = data[0].valor;
	let spacing = w / (data.length - 1);
	for (let i = 1; i < data.length; i++) {
		let val = data[i].valor;
		if (val > maxval) {
			maxval = val;
		}
		if (val < minval) {
			minval = val;
		}
	}
	for (let j = 0; j < data.length; j++) {
		let obj = data[j].valor;
		path += ` ${spacing * j},${mapval(obj, minval, maxval, h, 0)}`;
	}

	path += ` ${w},${h}`;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			viewBox="0 0 400 300"
			style={{ display: "block" }}
		>
			<defs>
				<linearGradient id="inner-gradient" gradientTransform="rotate(90)">
					<stop offset="0" stopColor="#3370f5" />
					<stop offset="1" stopColor="#ee5aa2" />
				</linearGradient>
			</defs>
			<polygon stroke="#fff" fill="url(#inner-gradient)" strokeWidth={2} points={path} />
		</svg>
	);
};

Graph.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			valor: PropTypes.number,
		}).isRequired
	).isRequired,
};

export default Graph;

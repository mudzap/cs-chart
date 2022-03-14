import React from "react";
import PropTypes from "prop-types";
import "./Graph.css";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export interface IProps {
	data: Array<{
		name: string;
		value: number;
	}>;
}

const Graph = ({ data }: IProps) => {
	const CustomTooltip = ({
		active,
		payload,
		label,
	}: {
		active?: any;
		payload?: any;
		label?: any;
	}) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p>{`${label} : ${payload[0].value}`}</p>
				</div>
			);
		}

		return null;
	};
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
				<defs>
					<linearGradient id="inner-gradient" gradientTransform="rotate(90)">
						<stop offset="0" stopColor="#3370f5" />
						<stop offset="1" stopColor="#ee5aa2" />
					</linearGradient>
				</defs>
				<XAxis hide dataKey="name" />
				<Tooltip content={<CustomTooltip />} cursor={false} />
				<Area
					activeDot={{ stroke: "#fff", fill: "#0009" }}
					type="linear"
					dataKey="value"
					stroke="#fff"
					strokeWidth={2}
					fillOpacity={1}
					fill="url(#inner-gradient)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

Graph.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.number,
		}).isRequired
	).isRequired,
};

export default Graph;

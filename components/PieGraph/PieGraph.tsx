import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PieGraph.css";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface IProps {
	data: Array<{
		name: string;
		value: number;
		percentage?: Array<string>;
	}>;
}

const renderCustomizedLabel = (props: any) => {
	let { cx, cy, midAngle, innerRadius, outerRadius, value, color, startAngle, endAngle, percentage } = props;
    const RADIAN = Math.PI / 180;
    const diffAngle = endAngle - startAngle;
    const delta = ((360-diffAngle)/15)-1;
    const radius = innerRadius + (outerRadius - innerRadius);
    const x = cx + (radius+delta) * Math.cos(-midAngle * RADIAN);
    const y = cy + (radius+(delta*delta)) * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill={color} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontWeight="normal">
		<tspan x={x} y={y - 10} style={{ fontWeight: 400 }}>{`${percentage[0]}`}</tspan>
		<tspan x={x} y={y + 10} style={{ fontWeight: 800 }}>{`${percentage[1]}`}</tspan>
      </text>
    );
};

const renderCustomizedLabelLine = (props: any) => {
    let { cx, cy, midAngle, innerRadius, outerRadius, color, startAngle, endAngle } = props;
    const RADIAN = Math.PI / 180;
    const diffAngle = endAngle - startAngle;
    const radius = innerRadius + (outerRadius - innerRadius);
    let path='';
    for(let i=0;i<((360-diffAngle)/15);i++){
      path += `${(cx + (radius+i) * Math.cos(-midAngle * RADIAN))},${(cy + (radius+i*i) * Math.sin(-midAngle * RADIAN))} `
    }
    return (
      <polyline points={path} stroke={color} fill="none" />
    );
};

const COLORS = ["#FF4895", "#6E4FE9", "#1766FF", "#2D42FF"];

const PieGraph = ({ data }: IProps) => {
	const [data2, setData2] = useState<IProps["data"]>();

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < data.length; i++) {
			total += data[i].value;
		}
		for (let i = 0; i < data.length; i++) {
			let temp = data;
			temp[i] = {
				...temp[i],
				percentage: [temp[i].name, `${((temp[i].value / total) * 100).toFixed(1)}%`],
			};
			setData2([...data]);
		}
	}, [data]);

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
				<Pie
					data={data2}
					dataKey="value"
					nameKey="percentage"
					cx="50%"
					cy="50%"
					startAngle={90}
					endAngle={450}
					outerRadius="50%"
					fill="#82ca9d"
					label={renderCustomizedLabel}
					labelLine={false}
					stroke={"none"}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
};

PieGraph.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			value: PropTypes.number,
		}).isRequired
	).isRequired,
};

export default PieGraph;

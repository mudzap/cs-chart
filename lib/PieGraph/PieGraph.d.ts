/// <reference types="react" />
import PropTypes from "prop-types";
import "./PieGraph.css";
interface IProps {
    data: Array<{
        name: string;
        value: number;
        percentage?: Array<string>;
    }>;
}
declare const PieGraph: {
    ({ data }: IProps): JSX.Element;
    propTypes: {
        data: PropTypes.Validator<PropTypes.InferProps<{
            name: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<number>;
        }>[]>;
    };
};
export default PieGraph;

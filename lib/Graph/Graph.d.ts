/// <reference types="react" />
import PropTypes from "prop-types";
import "./Graph.css";
export interface IProps {
    data: Array<{
        name: string;
        value: number;
    }>;
}
declare const Graph: {
    ({ data }: IProps): JSX.Element;
    propTypes: {
        data: PropTypes.Validator<PropTypes.InferProps<{
            name: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<number>;
        }>[]>;
    };
};
export default Graph;

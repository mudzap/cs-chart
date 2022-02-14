/// <reference types="react" />
import PropTypes from "prop-types";
interface IProps {
    data: Array<{
        label: string;
        valor: number;
    }>;
}
declare const Graph: {
    ({ data }: IProps): JSX.Element;
    propTypes: {
        data: PropTypes.Validator<PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            valor: PropTypes.Requireable<number>;
        }>[]>;
    };
};
export default Graph;

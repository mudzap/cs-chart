/// <reference types="react" />
interface IProps {
    data: Array<{
        label: string;
        valor: number;
    }>;
}
declare const Graph: {
    ({ data }: IProps): JSX.Element;
    propTypes: {
        data: any;
    };
};
export default Graph;

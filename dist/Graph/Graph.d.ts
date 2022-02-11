interface IProps {
    data: Array<{
        label: string;
        valor: number;
    }>;
}
declare const Graph: {
    ({ data }: IProps): any;
    propTypes: {
        data: any;
    };
};
export default Graph;

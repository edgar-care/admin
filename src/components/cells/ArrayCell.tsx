export function ArrayCell({ value }: ArrayCellProps) {
    return (
        <div className={"flex flex-row gap-2"}>
            {value && value.length && value.map((element: any) => <p>{element}</p>)}
        </div>
    );
}

export interface ArrayCellProps {
    value: any;
};

export default ArrayCell;
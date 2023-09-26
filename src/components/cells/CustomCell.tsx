export function CustomCell({ value }: CustomCellProps) {
    return (
        <div className={""}>
            custom {value}
        </div>
    );
}

export interface CustomCellProps {
    value: any;
};

export default CustomCell;
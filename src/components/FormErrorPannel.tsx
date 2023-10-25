export function FormErrorPannel({ errors }: FormErrorPannelProps) {
    const errorKeys = Object.keys(errors)

    if (errorKeys.length === 0) return <div></div>
    return (
        <div className="bg-red-500 p-2 rounded text-white">
            {(errorKeys || []).map((key: any, index: number) => {
                const error = errors[key];
                switch(error?.type) {
                    case 'required':
                        return <div key={index}>Le champ {key} est obligatoire</div>
                    default:
                        return <div key={index}>{error?.message}</div>
                }
            })}
        </div>
    );
}

export interface FormErrorPannelProps {
    errors: any;
}

export default FormErrorPannel;
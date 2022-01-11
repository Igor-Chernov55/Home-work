import React from 'react'
import RangeMaterialUI from "./RangeMaterialUI";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: number
    setValue2: (value: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        ...props
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <RangeMaterialUI
                value={props.value ? props.value : 45}
                setValue2={props.setValue2}
            />
        </>
    )
}

export default SuperDoubleRange

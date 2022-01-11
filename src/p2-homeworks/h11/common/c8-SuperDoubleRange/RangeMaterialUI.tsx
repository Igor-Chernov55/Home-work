import * as React from 'react';
import {ChangeEvent, ReactEventHandler} from 'react';
import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

interface Props {
    children: React.ReactElement;
    value: number;
    setValue2: (value: number) => void
}

function ValueLabelComponent(props: Props) {
    const {children, value, setValue2} = props;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(+e.currentTarget.value)
    }

    return (
        <Tooltip
            enterTouchDelay={0}
            placement="top"
            title={value}
            onChange={changeHandler}
        >

            {children}
        </Tooltip>
    );
}

const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': {display: 'none'},
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

type PropsRange = {
    setValue2: (value: number) => void
value: number
}

export default function RangeMaterialUI(props: PropsRange) {

    const changeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        console.log('eeeeevtn', value)
        props.setValue2(value as number)
    }
    return (
        <Box sx={{width: 320}}>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={props.value}
                onChange={changeHandler}
            />
        </Box>
    );
}

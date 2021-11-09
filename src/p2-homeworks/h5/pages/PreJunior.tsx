import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW4 from '../../h4/HW4'
import HW3 from "../../h3/HW3";
import {v1} from "uuid";
import HW6 from "../../h6/HW6";

function PreJunior() {

    const container = {
        display: 'block',
        padding: '20px'

    }
    return (
        <div style={container}>

            <div><HW1/>
                <HW2/>
                <HW3 _id={v1()} name={'some'}/>
                <HW4/>
                <HW6/>
            </div>
        </div>
    )
}


export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз
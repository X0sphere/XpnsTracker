import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width,height} =useWindowSize()
    console.log(width,height);
    const moveOrb = keyframes`
        0%{
            transform: translate(0,0);
        }
        50%{
            transform: translate(${width}px,${height}px);
        }
        100%{
            transform: translate(0,0);
        }
    `


    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        border-radius: 50%;
        background: linear-gradient(360deg,#F56692 0%,#F2984A 50%);
        filter: blur(400px);
        animation : ${moveOrb} 7s alternate linear infinite; 
    `;
  return (
    <OrbStyled> Orb </OrbStyled>
  )
}

export default Orb;
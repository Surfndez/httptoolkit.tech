import * as React from 'react';

import { styled, media } from '../styles';

const PhoneOutline = styled.div`
    border-radius: 24px;
    background-color: #c8c8c8;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2);
    border: 1px solid #a8a8a8;

    box-sizing: border-box;

    padding: 40px 6px;

    position: relative;
`;

const PhoneScreen = styled.div`
    background-color: #000;
    height: 480px;
    width: 270px;

    > img {
        width: 100%;
        height: 100%;
    }
`;

const HomeButton = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);

    width: 20%;
    height: 26px;
    border-radius: 12px;

    background-color: #a8a8a8;
`;

export const PhoneContainer = styled((p) =>
    <PhoneOutline className={p.className}>
        <PhoneScreen>
            { p.children }
        </PhoneScreen>
        <HomeButton />
    </PhoneOutline>
)``;
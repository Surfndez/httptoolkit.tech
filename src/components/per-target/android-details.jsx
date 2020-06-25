import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled } from '../../styles';

import { PhoneContainer } from '../phone-container';

import * as connectedScreenshot from '../../images/android-app-connected.png';

const DetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    margin: 60px 0 20px;
    max-height: 480px;

    > ${PhoneContainer} {
        flex-basis: 100%;
        flex-shrink: 0;
        margin: -40px 20px;
    }
`;

const DetailsContent = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
    background-color: ${p => p.theme.mainBackground};
    padding: 20px 40px 0 20px;

    width: calc((100% - 324px) / 2);
    flex-grow: 1;

    & + & {
        margin-top: 20px;
    }

    h3 {
        text-transform: uppercase;
        ${p => p.theme.fontSizeSubheading};
        color: ${p => p.theme.mainSubtleColor};
        font-weight: bold;

        padding-bottom: 10px;
        padding-right: 18px;
    }

    p {
        ${p => p.theme.fontSizeText};
        line-height: 1.3;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    position: relative;

    > svg {
        position: absolute;
        top: 11px;
        right: 20px;
        height: 48px;
        color: ${p => p.theme.mainColor};
        font-size: 2em;
        width: 1em;
        opacity: 0.2;
        z-index: 0;
    }

    strong a {
        color: ${p => p.theme.popColor};
    }
`;

export const AndroidDetails = () => <DetailsContainer>
    <DetailsContent>
        <FontAwesomeIcon icon={['fal', 'search']} />

        <h3>
            Debug HTTP from any Android device
        </h3>
        <p>
            Scan a QR code on the device to start setup, or remotely connect debuggable devices via ADB.
        </p>
        <p>
            Reconnect again later in one tap.
        </p>
        <p>
            Supports Android Lollipop and later (that means v5 / API level 21+)
        </p>
    </DetailsContent>

    <DetailsContent>
        <FontAwesomeIcon icon={['fal', 'wrench']} />

        <h3>Self-driving setup</h3>
        <p>
            No messing around with certificate files and wifi settings.
        </p>
        <p>
            Click the button, accept permissions, start capturing traffic.
        </p>
    </DetailsContent>

    <PhoneContainer>
        <img
            src={connectedScreenshot}
            alt="Screenshot of the Android app, successfully connected"
        />
    </PhoneContainer>

    <DetailsContent>
        <FontAwesomeIcon icon={['fal', 'lock-open']} />

        <h3>Capture & inspect encrypted HTTPS</h3>
        <p>
            Immediately view HTTPS on any device from apps that trust user-installed certificates, like Chrome.
        </p>
        <p>
            Enable trust in your own app with <a
                href="/docs/guides/android#intercepting-traffic-from-your-own-android-app"
                target="_blank"
                rel='noopener noreferrer'
            >one tiny manifest change</a>.
        </p>
        <p>
            On emulators & rooted devices, easily intercept HTTPS from <em>any</em> app, with automatic injection of a system certificate authority.
        </p>
    </DetailsContent>

    <DetailsContent>
        <h3>Want the full details?</h3>
        <p>Take a look at the <strong><a
            href="/docs/guides/android"
            target="_blank"
            rel='noopener noreferrer'
        >
            in-depth guide to Android HTTP debugging
        </a></strong>.</p>
    </DetailsContent>
</DetailsContainer>
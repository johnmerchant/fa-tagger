import styled from '@emotion/styled';
import * as colors from './colors';
import {H3} from './typography';

export const IconPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    min-width: 200px;
    min-height: 240px;
    background-color: ${colors.LIGHTER};
    margin: 20px;
    border-radius: 20px;
`;

export const IconPanelHeading = styled(H3)`
    color: ${colors.WHITE};
`;

export const IconPanelIcon = styled.div`
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const IconPanelTags = styled.div`
    display: flex;
    flex-grow: 1;
`;
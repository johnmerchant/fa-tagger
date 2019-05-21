import styled, {keyframes} from 'styled-components';
import * as colors from './colors';

const rotate = keyframes`
    to { -webkit-transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid ${colors.WHITE};
    border-radius: 50%;
    border-top-color: ${colors.LIGHT};
    animation: ${rotate} 1s ease-in-out infinite;
    -webkit-animation: ${rotate} 1s ease-in-out infinite;
`;
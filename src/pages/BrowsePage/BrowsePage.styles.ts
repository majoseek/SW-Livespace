import { Card } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.section`
    display: grid;
    flex: 1;
    grid-gap: 64px;
    grid-template-columns: repeat(auto-fill, 500px);
    justify-content: center;
`;

export const BrowseCard = styled(Card)`
    height: fit-content;
`;

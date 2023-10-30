import { Card } from 'antd';
import styled from 'styled-components';

export const DetailsCard = styled(Card)`
    height: fit-content;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const DetailsImg = styled.img`
    max-width: 1000px;
`;

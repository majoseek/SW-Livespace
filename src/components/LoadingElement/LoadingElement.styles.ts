import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

export const Wrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
`;

export const LoadingIcon = styled(LoadingOutlined)`
    &&& {
        font-size: 64px;
    }
`;

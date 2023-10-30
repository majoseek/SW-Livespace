import * as Styled from './LoadingElement.styles';
import { Spin, Typography } from 'antd';

type Props = {
    title?: string | JSX.Element;
};

const LoadingElement = ({ title }: Props) => {
    return (
        <Styled.Wrapper>
            {title && <Typography.Title>{title}</Typography.Title>}
            <Spin indicator={<Styled.LoadingIcon spin />} />
        </Styled.Wrapper>
    );
};

export default LoadingElement;

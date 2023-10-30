import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store/store';

type Props = {
    children: JSX.Element;
};

const AppProviders = ({ children }: Props) => (
    <ReduxProvider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
    </ReduxProvider>
);
export default AppProviders;

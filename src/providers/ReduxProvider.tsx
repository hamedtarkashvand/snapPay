import type { FC, ReactNode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '../store';

type ReduxProviderProps = {
    children:ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({children}) => {
        return (
            <StoreProvider store={store}>
                {children}
            </StoreProvider>
        );
}
export default ReduxProvider;
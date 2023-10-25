
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/className';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>

        </div >
    );
};

export default App;
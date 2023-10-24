
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/className';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE</button>

        </div>
    );
};

export default App;
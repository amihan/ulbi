import { classNames } from 'shared/lib/className';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                className={cls.mainLink}
                theme={AppLinkTheme.SECONDARY}
            >
                Главная
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.SECONDARY}
            >
                О сайте
            </AppLink>
        </div>
    </div>
);

export default Navbar;

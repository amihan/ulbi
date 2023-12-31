import { classNames } from 'shared/lib/className/className';
import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;

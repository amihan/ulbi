import { classNames } from 'shared/lib/className/className';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import LoginModule from 'features/AuthByUserName/ui/LoginModal/LoginModule';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                Войти
            </Button>

            <LoginModule isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;

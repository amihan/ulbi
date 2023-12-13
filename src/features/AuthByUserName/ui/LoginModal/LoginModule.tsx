import { classNames } from 'shared/lib/className/className';
import Modal from 'shared/ui/Modal/Modal';
import cls from './LoginModule.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModuleProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModule = ({ className, isOpen, onClose }: LoginModuleProps) => (
    <Modal
        className={classNames(cls.LoginModule, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);

export default LoginModule;

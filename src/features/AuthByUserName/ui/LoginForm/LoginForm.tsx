import { classNames } from 'shared/lib/className/className';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('Введите логин')}
            />

            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />

            <Button
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;

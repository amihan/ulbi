import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('testing btn', () => {
    test('render btn', () => {
        render(<Button>Testing</Button>);
        expect(screen.getByText('Testing')).toBeInTheDocument();
    });

    test('width only first param', () => {
        render(<Button theme={ThemeButton.CLEAR}>Testing</Button>);
        expect(screen.getByText('Testing')).toHaveClass('clear');
        screen.debug();
    });
});

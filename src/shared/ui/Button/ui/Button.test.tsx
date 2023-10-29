import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('testing btn', () => {
    test('render btn', () => {
        render(<Button>Testing</Button>);
        expect(screen.getByText('Testing')).toBeInTheDocument();
    });
});

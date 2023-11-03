import { fireEvent, screen } from '@testing-library/react';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('testing Sideber', () => {
    test('render btn', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('render btn', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

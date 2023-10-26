import { lazy } from 'react';

// @ts-expect-error
export const MainPageAsync = lazy(async () => await import('./MainPage'));

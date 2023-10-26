import { lazy } from 'react';

// @ts-expect-error
// eslint-disable-next-line no-return-await
export const MainPageAsync = lazy(async () => await import('./MainPage'));

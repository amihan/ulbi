import { lazy } from 'react';

// @ts-expect-error
// eslint-disable-next-line no-return-await
export const AboutPageAsync = lazy(async () => await import('./AboutPage'));

import { Locale } from 'next-intl';
import { ReactNode } from 'react';

declare type SearchParams = string | string[] | undefined;

declare type RouteProps = {
  params: { locale: Locale };
  searchParams: SearchParams;
};
declare type LayoutProps = {
  children: ReactNode;
} & Pick<RouteProps, 'params'>;

declare type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

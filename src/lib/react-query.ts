import { UseMutationOptions, DefaultOptions, QueryClient } from '@tanstack/react-query';

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60
  }
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
  defaultOptions: queryConfig
});

export type ApiFnReturnType<Fn extends (...args: unknown[]) => Promise<unknown>> = Awaited<
  ReturnType<Fn>
>;

export type QueryConfig<T extends (...args: unknown[]) => object> = Omit<
  ReturnType<T>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<Fn extends (...args: unknown[]) => Promise<unknown>> =
  UseMutationOptions<Awaited<ReturnType<Fn>>, Error, Parameters<Fn>[0]>;

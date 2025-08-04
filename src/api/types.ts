import { UseQueryOptions } from '@tanstack/react-query'

export type QueryOptions<TData, TVariables = undefined> = {
    variables: TVariables;
} & Omit<UseQueryOptions<TData>, 'queryKey' | 'queryFn'>;
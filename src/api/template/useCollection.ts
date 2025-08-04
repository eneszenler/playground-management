import {useQuery} from '@tanstack/react-query'
import {apiClient} from '../apiClient'
import type {QueryOptions} from '../types'

type ResponseType = {
    id: string
}

type Response = {
    data: ResponseType[]
}

export function apiRequest() {
    return apiClient<Response>({
        path: '/falan-filan',
        queryParams: {
            param1: 'xd'
        },
    })
}

export function useCollection(
    options?: QueryOptions<Response, undefined>,
) {
    return useQuery({
        queryKey: ['collection-key'],
        queryFn: () => apiRequest(),
        staleTime: 1000 * 60 * 5,
        ...options,
    })
}
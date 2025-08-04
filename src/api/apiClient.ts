const API_BASE = import.meta.env.VITE_API_BASE

export interface ApiClientOptions extends Omit<RequestInit, 'method' | 'body'> {
    path: string
    queryParams?: Record<string, string | number | boolean | undefined>
}

function buildUrl(path: string, queryParams?: Record<string, unknown>): string {
    if (!queryParams) return `${API_BASE}${path}`
    const qs = new URLSearchParams(
        Object.entries(queryParams).reduce<Record<string, string>>((acc, [k, v]) => {
            if (v !== undefined && v !== null) acc[k] = String(v)
            return acc
        }, {}),
    ).toString()
    return `${API_BASE}${path}${qs ? `?${qs}` : ''}`
}

export async function apiClient<T = unknown>({
                                                 path,
                                                 queryParams,
                                                 modifyResponse,
                                                 headers: initHeaders,
                                                 ...init
                                             }: ApiClientOptions & {
    modifyResponse?: (raw: Response & { jsonParsed: unknown }) => Promise<T>
}): Promise<T> {
    const headers: HeadersInit = {
        'Accept-Language': navigator.language,
        "Content-Type": "application/json",
        ...initHeaders,
    }

    const res = await fetch(buildUrl(path, queryParams), {
        ...init,
        method: 'GET',
        headers,
    })

    if (!res.ok) {
        const err = (await res.json().catch(() => undefined)) as { message?: string } | undefined
        throw new Error(err?.message ?? res.statusText)
    }

    const jsonParsed = (await res.json().catch(() => undefined)) as unknown

    if (modifyResponse) {
        return modifyResponse({...res, jsonParsed})
    }

    return jsonParsed as T
}

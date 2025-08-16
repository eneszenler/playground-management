import {MenuType} from "@/layout/menu.tsx"

function flattenMenu(items: MenuType[], map = new Map<string, MenuType>()) {
    for (const it of items) {
        map.set(normalizeUrl(it.url), it)
        if (it.children?.length) flattenMenu(it.children, map)
    }
    return map
}

function normalizeUrl(url: string) {
    if (!url) return "/"
    if (url !== "/" && url.endsWith("/")) return url.slice(0, -1)
    return url
}

function titleCase(slug: string) {
    return slug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
}

function accumulatePaths(pathname: string) {
    const clean = normalizeUrl(pathname)
    if (clean === "/") return ["/"]
    const parts = clean.split("/").filter(Boolean)
    const acc: string[] = []
    for (let i = 0; i < parts.length; i++) {
        const p = "/" + parts.slice(0, i + 1).join("/")
        acc.push(p)
    }
    return acc
}

export function buildBreadcrumb(menu: MenuType[], pathname: string) {
    const map = flattenMenu(menu)
    const segments = accumulatePaths(pathname)

    const result = [] as { href: string; label: string }[]

    for (const seg of segments) {
        const item = map.get(seg)
        if (item) {
            result.push({href: item.url, label: item.title})
        } else {
            const name = seg.split("/").filter(Boolean).pop() || "Home"
            result.push({href: seg, label: seg === "/" ? "Home" : titleCase(name)})
        }
    }

    const seen = new Set<string>()
    return result.filter((x) => {
        const key = x.href
        if (seen.has(key)) return false
        seen.add(key)
        return true
    })
}
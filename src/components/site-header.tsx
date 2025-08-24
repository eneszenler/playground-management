import {useEffect, useMemo, useState} from "react"

import {useLocation} from "react-router-dom"

import {Separator} from "@/components/ui/separator"
import {SidebarTrigger} from "@/components/ui/sidebar"
import {ModeToggle} from "@/components/mode-toggle"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {buildBreadcrumb} from "@/utils/breadcrumb"

import type {MenuType} from "@/layout/menu"
import {cn} from "@/lib/utils"

type Props = {
    menu: MenuType[]
}

export function SiteHeader(props: Props) {
    const {menu} = props
    const location = useLocation()
    const pathname = location.pathname

    const crumbs = useMemo(() => buildBreadcrumb(menu, pathname), [menu, pathname])

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setOffset(document.body.scrollTop || document.documentElement.scrollTop)
        }

        // Add scroll listener to the body
        document.addEventListener('scroll', onScroll, {passive: true})

        // Clean up the event listener on unmount
        return () => document.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={cn(
                'z-50 h-16 header-fixed peer/header sticky top-0 w-[inherit]',
                offset > 10 && 'shadow',
            )}
        >
            <div className={cn(
                'relative flex h-full items-center gap-3 p-4 sm:gap-4',
                offset > 10 &&
                'after:bg-background/20 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-lg'
            )}>
                <SidebarTrigger variant='outline' className='max-md:scale-125'/>

                <Separator orientation='vertical' className='h-6'/>

                <Breadcrumb>
                    <BreadcrumbList>
                        {crumbs.map((c, i) => {
                            const isLast = i === crumbs.length - 1
                            return (
                                <div key={c.href} className="flex items-center">
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage>{c.label}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={c.href}>{c.label}</BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                    {!isLast && <BreadcrumbSeparator/>}
                                </div>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="ml-auto flex items-center gap-2">
                    <ModeToggle/>
                </div>
            </div>
        </header>
    )
}
import {getCookie} from "@/lib/cookies"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {menu} from "./menu"

export default function Layout({children}: { children: React.ReactNode }) {
    const defaultOpen = getCookie('sidebar_state') !== 'false'
    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar menu={menu}/>
            <SidebarInset>
                <SiteHeader menu={menu}/>
                <main className="p-4">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
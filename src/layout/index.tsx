import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/app-sidebar"
import {menu} from "@/layout/menu"

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar menu={menu}/>
            <main>
                <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>
    )
}
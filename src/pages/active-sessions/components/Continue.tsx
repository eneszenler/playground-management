import {Play} from "lucide-react"

import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"
import {Input} from "@/components/ui/input"

export default function Continue() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button size="icon">
                    <Play/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4">
                <Button variant="destructive" className="w-full">Continue Now</Button>
                <Separator className="my-4"/>
                <div className="flex items-center justify-center gap-2">
                    <Button className="w-full">5 mins ago</Button>
                    <Button className="w-full">10 mins ago</Button>
                </div>
                <Separator className="my-4"/>
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input type="number" min={0} placeholder="e.g., 15 minutes ago"/>
                    <Button type="submit" variant="outline" disabled>
                        Continue
                    </Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
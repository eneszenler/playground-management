import {ColumnDef} from "@tanstack/react-table"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import type {SubscriberType} from "../types"

export const columns: ColumnDef<SubscriberType>[] = [
    {
        id: "fullName",
        header: "Name",
        accessorFn: (row) => `${row.name} ${row.lastName}`,
        cell: ({getValue}) => <div className="font-medium">{String(getValue())}</div>,
        size: 220,
    },
    {
        accessorKey: "mail",
        header: "E-mail",
        size: 260,
    },
    {
        accessorKey: "phone",
        header: "Phone",
        size: 320,
    },
    {
        id: "parentFullName",
        header: "Parent",
        accessorFn: (row) => `${row.parentName} ${row.parentLastName}`,
        size: 220,
    },
    {
        accessorKey: "parentMail",
        header: "Parent E-mail",
        size: 260,
    },
    {
        accessorKey: "startDate",
        header: "Start",
        cell: ({getValue}) => new Date(String(getValue())).toLocaleDateString(),
        size: 120,
    },
    {
        accessorKey: "endDate",
        header: "End",
        cell: ({getValue}) => new Date(String(getValue())).toLocaleDateString(),
        size: 120,
    },
    {
        accessorKey: "purchasedHours",
        header: "Purchased",
        size: 120,
    },
    {
        accessorKey: "usedHours",
        header: "Used",
        size: 100,
    },
    {
        id: "remainingHours",
        header: "Remaining",
        accessorFn: (row) => row.purchasedHours - row.usedHours,
        sortingFn: "basic",
        size: 120,
    },
    {
        accessorKey: "isActive",
        header: "Status",
        cell: ({getValue}) => {
            const active = Boolean(getValue())
            return (
                <Badge variant={active ? "default" : "secondary"}>
                    {active ? "Active" : "Inactive"}
                </Badge>
            )
        },
        enableSorting: true,
        size: 120,
    },
    {
        id: "actions",
        header: "",
        cell: ({row}) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">⋯</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-36">
                    <DropdownMenuItem onClick={() => console.log("View", row.original.id)}>View</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log("Edit", row.original.id)}>Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log("Delete", row.original.id)} className="text-red-600">
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
        enableSorting: false,
        size: 64,
    },
]
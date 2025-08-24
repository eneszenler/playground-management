import {columns} from "./components/columns"
import {DataTable} from "./components/data-table"
import {subscribers} from "./components/data"

export default function SubscribersPage() {
    return (
        <DataTable columns={columns} data={subscribers}/>
    )
}
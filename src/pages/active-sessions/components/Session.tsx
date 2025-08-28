import {Badge} from "@/components/ui/badge"
import {Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent, CardAction} from "@/components/ui/card"
import {Progress} from "@/components/ui/progress"
import useHelpers from "@/helpers/useHelpers"

import Continue from "./Continue"
import Complete from "./Complete"
import Pause from "./Pause"
import type {BookingType} from "../types"

type Props = {
    data: BookingType
}

export default function Session(props: Props) {
    const {data} = props

    const {formatFullName} = useHelpers()

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{formatFullName(data.customerName, data.customerLastName)}</CardTitle>
                <CardDescription>
                    {data.tableName}
                </CardDescription>
                <CardAction className="flex gap-2">
                    <Badge variant="outline">55₺</Badge>
                    {data.status === 'Active' ? <Pause/> : <Continue/>}
                </CardAction>
            </CardHeader>
            <CardContent>
                <Progress value={33}/>
                <div className="w-full flex justify-between text-sm mt-2">
                    <div>
                        50m passed
                    </div>
                    <div>
                        Price ↑ in 10m
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Complete/>
            </CardFooter>
        </Card>
    )
}
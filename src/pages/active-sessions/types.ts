export type BookingType = {
    id: number
    tableName: string
    customerName?: string
    customerLastName?: string
    customerParentName?: string
    customerParentLastName?: string
    customerPhone?: string
    customerMail?: string
    customerParentPhone?: string
    customerParentMail?: string
    subscriberId?: number
    startTime: string // datetime
    endTime?: string  // datetime
    status: 'Active' | 'Paused'
}
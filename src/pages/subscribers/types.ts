export type SubscriberType = {
    id: number;
    name: string;
    lastName: string;
    parentName: string;
    parentLastName: string;
    phone: string;
    mail: string;
    parentPhone: string;
    parentMail: string;
    startDate: string; // ISO date format
    endDate: string;   // ISO date format
    purchasedHours: number;
    usedHours: number;
    isActive: boolean;
}
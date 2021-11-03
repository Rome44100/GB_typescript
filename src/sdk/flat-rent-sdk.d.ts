export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number): Date

export interface FlatRentSdk {
    get(id: number): Promise<object|null>
    search(parameters: object): object[]
    book(flatId: number, checkInDate: Date, checkOutDate: Date): number
}

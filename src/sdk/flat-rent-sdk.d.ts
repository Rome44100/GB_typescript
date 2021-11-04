export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number): Date

export class FlatRentSdk {
  get(id: string): Promise<object|null>

  search(parameters: {
      city: string;
      checkInDate: Date;
      checkOutDate: Date;
      priceLimit?: number;
  }): Promise<unknown>

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number

  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;
  
  _resetTime(date: Date): void;

  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;

  _generateDateRange(from: Date, to: Date): Date[];

  _generateTransactionId: () => number;

  _areAllDatesAvailable(flat: object, dateRange: Date[]): boolean;

  _formatFlatObject(flat: object, nightNumber: number): object;

  _readDatabase(): object;

  _writeDatabase(database: object[]): void;

  _syncDatabase(database: object[]): void;
}

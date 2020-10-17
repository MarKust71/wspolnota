export interface ApartmentInterface {
    apartment: number;
    name: string;
    meters: any[];
}

export interface Action {
    apartment: number;
    meter: number;
    value: string;
}

import { Dispatch } from 'react';

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

export interface MeterInputInterface {
    apartment: number;
    meter: number;
    state: any;
    dispatch: Dispatch<Action>;
}

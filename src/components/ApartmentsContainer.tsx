import React, { useReducer } from 'react';
import { Button, Container, createStyles } from '@material-ui/core';
import { ApartmentInterface, Action } from './interface';
import Apartment from './Apartment';
import { makeStyles } from '@material-ui/core/styles';

const apartments = [
    { apartment: 1, name: 'Mazurkiewicz', meters: [{ id: 1 }, { id: 2 }] },
    { apartment: 2, name: 'Gołębiowski', meters: [{ id: 1 }, { id: 2 }] },
    { apartment: 3, name: 'Lewandowska', meters: [{ id: 1 }] },
    { apartment: 4, name: 'Napierała', meters: [{ id: 1 }] },
    { apartment: 5, name: 'Zarębska', meters: [{ id: 1 }] },
    { apartment: 6, name: 'Tuszyńska', meters: [{ id: 1 }, { id: 2 }] },
    { apartment: 7, name: 'Nowaczyk', meters: [{ id: 1 }] },
    { apartment: 8, name: 'Ryszkiewicz', meters: [{ id: 1 }, { id: 2 }] }
];

export const stateKey = (apartment: number, meter: number) => {
    return `apartment-${apartment}-meter-${meter}`;
};

const initValues = (apartments: ApartmentInterface[]) => {
    const states: any = {};
    apartments.map(item => {
        const { apartment, meters } = item;
        meters.map(item => {
            const key = stateKey(apartment, item.id);
            states[key] = '';
            return null;
        });
        return null;
    });
    return states;
};

const reducer = (state: any, action: Action) => {
    const { apartment, meter, value } = action;
    const key = stateKey(apartment, meter);
    const object: any = {};
    object[key] = value;
    return { ...state, ...object };
};

export function ApartmentsContainer() {
    const [state, dispatch] = useReducer(reducer, initValues(apartments));
    const styles = useStyles();
    return (
        <Container fixed maxWidth="xs" className={styles.container}>
            <div className={styles.apartments}>
                {apartments.map(item => {
                    const { apartment, name, meters } = item;
                    return (
                        <Apartment
                            key={`apartment-${apartment}`}
                            apartment={apartment}
                            name={name}
                            meters={meters}
                            state={state}
                            dispatch={dispatch}
                        />
                    );
                })}
            </div>
            <Button
                variant="contained"
                onClick={() => console.log(state)}
                fullWidth
            >
                Wyślij
            </Button>
        </Container>
    );
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#eae7dc'
        },
        apartments: {
            height: 'calc(100vh - 120px)',
            overflowY: 'scroll',
            marginBottom: 10
        },
        button: {}
    })
);

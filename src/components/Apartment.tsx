import React, { Dispatch } from 'react';
import { Box, Card, CardContent, createStyles } from '@material-ui/core';
import MeterInput from './MeterInput';
import { Action, ApartmentInterface } from './interface';
import { makeStyles } from '@material-ui/core/styles';

interface ApartmentInterfaceExtended extends ApartmentInterface {
    state: any;
    dispatch: Dispatch<Action>;
}

export default function Apartment({
    apartment,
    name,
    meters,
    state,
    dispatch
}: ApartmentInterfaceExtended) {
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                <div className={styles.labelContainer}>
                    <div> {`Lokal #${apartment}:`}</div>&nbsp;
                    <div className={styles.labelName}> {`${name}`}</div>
                </div>
                <Box className={styles.box}>
                    {meters.map(item => {
                        const { id } = item;
                        return (
                            <MeterInput
                                key={`apartment-${apartment}-meter-${id}`}
                                apartment={apartment}
                                meter={id}
                                state={state}
                                dispatch={dispatch}
                            />
                        );
                    })}
                </Box>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(() =>
    createStyles({
        box: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        card: {
            background: '#d8c3a5',
            marginBottom: 5,
            borderRadius: 5
        },
        labelContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        labelName: {
            fontWeight: 700
        }
    })
);

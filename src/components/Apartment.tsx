import React, { Dispatch } from 'react';
import { Box, Card, CardContent, createStyles } from '@material-ui/core';
import MeterInput from './MeterInput';
import { Action, ApartmentInterface } from './interface';
import { makeStyles } from '@material-ui/core/styles';

interface ApartmentInterfaceExtended extends ApartmentInterface {
    state: any;
    dispatch: Dispatch<Action>;
}

export default function Apartment(props: ApartmentInterfaceExtended) {
    const { apartment, name, meters, state, dispatch } = props;
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
                {`Lokal #${apartment}: ${name}`}
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
        card: {}
    })
);

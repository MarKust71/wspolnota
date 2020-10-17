import React, { Dispatch } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Action } from './interface';
import { stateKey } from './ApartmentsContainer';

export interface MeterInput {
    apartment: number;
    meter: number;
    state: any;
    dispatch: Dispatch<Action>;
}

export default function MeterInput(props: MeterInput) {
    const classes = useStyles();
    const { apartment, meter, state, dispatch } = props;
    let value = state[stateKey(apartment, meter)];
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id={`apartment-${apartment}-meter-${meter}`}
                label={`Licznik #${meter}`}
                variant="outlined"
                size="small"
                value={value}
                onChange={event => {
                    dispatch({
                        apartment: apartment,
                        meter: meter,
                        value: event.target.value
                    });
                }}
            />
        </form>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '15ch'
            }
        }
    })
);

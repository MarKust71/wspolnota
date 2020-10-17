import React, { Dispatch } from 'react';
import { Box, Card, CardContent } from '@material-ui/core';
import MeterInput from './MeterInput';
import { Action, ApartmentInterface } from './interface';

interface ApartmentInterfaceExtended extends ApartmentInterface {
    state: any;
    dispatch: Dispatch<Action>;
}

export default function Apartment(props: ApartmentInterfaceExtended) {
    const { apartment, name, meters, state, dispatch } = props;
    return (
        <Card>
            <CardContent>
                {`Lokal #${apartment}: ${name}`}
                <Box display="flex" flexDirection="row" justifyContent="center">
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

// const styles = createStyles({});

import React from 'react';
import './InfoBox.scss';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({extraClass, title, cases, total, loading, onClick , active}) {
    return loading ? (

        <Card className="infoBox">
            <Typography color="textSecondary">
                <span className="infoBox__loading">Loading...</span>
            </Typography>
        </Card>

    ) : (
            <Card className={`infoBox ${extraClass} ${active && 'infoBox--active'}`} onClick={onClick}>
                <CardContent className="infoBox__inner">
                    <Typography color="textSecondary">{title}</Typography>
                    <h5><span>+{cases}</span></h5>
                    <Typography color="textSecondary" className="total"><span>{total}</span> Total</Typography>
                </CardContent>
            </Card>
        )
}
export default InfoBox

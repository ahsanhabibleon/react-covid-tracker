import React from 'react'
import { Card } from '@material-ui/core'
import './CasesByCountry.scss'
import { makeStyles } from '@material-ui/core/styles'
import numeral from 'numeral'

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        textAlign: 'left',
        width: "100%",
        color: theme.palette.text.secondary,
    },
    title: {
        marginBottom: '1rem'
    }
}));

function CasesByCountry({ tableData }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <h3 className={classes.title}>Live Cases by Country</h3>
            <div className="table__wrapper">
                <table className="table">
                    <tbody>
                        {tableData.map((tr, index) => (
                            <tr key={index}>
                                <td>{tr.country}</td>
                                <th><strong>{numeral(tr.cases).format(0, 0)}</strong></th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default CasesByCountry

import React, { useEffect, useState } from 'react'
import './Table.css'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ConversionTable = (props) => {
    const [rate, setRate] = useState(0);
    useEffect(() => {
        setRate(parseFloat((props.rate).toFixed(5)));
    })
    const arr = [1, 5, 10, 25, 50, 100, 500, 1000];
    return (
        <div id='mainDiv'>
            <div id='tableDiv'>
                <h3 id='tableHeading'>Convert {props.from} to {props.to}</h3>
                <Table id='table' variant="outlined">
                    <TableHead>
                        <TableRow>
                            <TableCell>{props.from}</TableCell>
                            <TableCell>{props.to}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1 {props.from}</TableCell>
                            <TableCell>{rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5 {props.from}</TableCell>
                            <TableCell>{5 * rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>10 {props.from}</TableCell>
                            <TableCell>{10 * rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>25 {props.from}</TableCell>
                            <TableCell>{25 * rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>50 {props.from}</TableCell>
                            <TableCell>{50 * rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>100 {props.from}</TableCell>
                            <TableCell>{100 * rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>500 {props.from}</TableCell>
                            <TableCell>{500 * rate} {props.to}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1000 {props.from}</TableCell>
                            <TableCell>{1000 * rate} {props.to}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div id='tableDiv'>
                <h3 id='tableHeading'>Convert {props.to} to {props.from}</h3>
                <Table id='table' variant="outlined">
                    <TableHead>
                        <TableRow>
                            <TableCell>{props.to}</TableCell>
                            <TableCell>{props.from}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arr.map((num) => <TableRow>
                            <TableCell>{num} {props.to}</TableCell>
                            <TableCell>{num / rate} {props.from}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ConversionTable
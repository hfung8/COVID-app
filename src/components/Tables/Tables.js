import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Tables = ( confirmedCountries )  => {

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

      const classes = useStyles();

    console.log(confirmedCountries.places);
    var places;
    var countries = [];
    var row;

    if (confirmedCountries.places !== null){
        places = JSON.parse(confirmedCountries.places);
        console.log(places);

        for( var i = 0; i < places.length; i++){
            var country = new Object();
            country.countryRegion = places[i].countryRegion;
            country.confirmed = places[i].confirmed;
            country.deaths = places[i].deaths;
            country.recovered = places[i].recovered;
            countries.push(country);
        }
        console.log(countries);
    }

    console.log(row);


return (
    <div>
       <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="right">Confirmed</TableCell>
                <TableCell align="right">Deaths</TableCell>
                <TableCell align="right">Recovered</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
          {countries.map((country, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {country.countryRegion}
              </TableCell>
              <TableCell align="right">{country.confirmed}</TableCell>
              <TableCell align="right">{country.deaths}</TableCell>
              <TableCell align="right">{country.recovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
        </TableContainer>
    </div>
)
}


export default Tables;
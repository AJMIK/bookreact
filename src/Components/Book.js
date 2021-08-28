import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Book() {
    return (
    <Grid container>
        <Grid item xs={12} sm={12} md={12}></Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Typography>BOOK DETAILS</Typography>
            <TextField
            type="text"
            variant="outlined"
            label="Book Name"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Discription"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Publisher Name"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Author Name"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            type="text"
            variant="outlined"
            label="Distributor Name"
            fullWidth
            required
            margin="normal"
            />
            <Button
            type="submit"
            variant="contained"
            color="primary"
            >SUBMIT</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}></Grid>
    </Grid>
    )
}

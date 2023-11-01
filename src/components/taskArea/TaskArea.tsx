import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react'


export const TaskArea: FC = (): ReactElement => {
    return (
      <Grid item xs={8} md={8} px={4}>
        {" "}
        <h2>Main content area</h2>
      </Grid>
    );
}
import React, { FC, ReactElement } from 'react'
import { Grid } from '@mui/material'

const Dashboard :FC= ():ReactElement => {
  return (
      <div>
          <Grid container p={0} m={0} >
              <Grid item ></Grid>
              <Grid  item></Grid>
          </Grid>
    </div>
  )
}

export default Dashboard
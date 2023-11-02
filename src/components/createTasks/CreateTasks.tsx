import  { FC, ReactElement } from 'react'
import { Box, Typography } from '@mui/material'


export const CreateTask: FC = (): ReactElement => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" width="100%" p={3} m={4} >
            <Typography component="h2" variant="h6" > Create Tasks</Typography>
        </Box>
    )
}
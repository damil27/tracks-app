import { FC, ReactElement } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import dayjs from 'dayjs';
import { ItaskHeader } from './Interface/ItaskHeader';
import PropTypes from "prop-types"


export const TaskHeader: FC <ItaskHeader> = (props): ReactElement => {
    const { title = "this is default Title", date= new Date() } = props
    
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography>{title}</Typography>
          </Box>
          <Box>
            <Chip variant="filled" label={dayjs(date).format("dddd, M YYYY")} />
          </Box>
        </Box>
      </>
    );
}

TaskHeader.propTypes = {
    title: PropTypes.string,
    date:PropTypes.instanceOf(Date)

}
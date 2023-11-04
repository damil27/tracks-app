import{ FC, ReactElement } from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import { ItaskCounter } from './ItaskCounter'
import { Status } from '../createTasks/enum/status'
import PropTypes  from 'prop-types'

export const TaskCounter: FC<ItaskCounter> = ({ count=  0, status = Status.todo}): ReactElement => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap:"15px"
            }} >
                <Avatar sx={{
                    backgroundColor: "transparent",
                    width: "86px",
                    height: "86px",
                    border:"3px solid",
                    borderColor: `${status === Status.todo ? "error.light": status  === Status.inProgress ? 'warning.light': 'success.light' }`
                   
                }} >
                    <Typography color="white">{ count}</Typography>
                </Avatar>
                <Typography>{ status.toUpperCase()}</Typography>
            </Box>
        </>
    )
}
TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed])
}
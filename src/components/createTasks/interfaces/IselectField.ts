import { Idisabled } from './Idisabled'
import { SelectChangeEvent } from '@mui/material'



interface ImenuItems{
    value?: string;
    label?: string
}
export interface IselectField extends Idisabled{
    name?: string;
    value?: string;
    label?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items?: ImenuItems[]
}
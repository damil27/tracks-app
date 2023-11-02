import React from 'react'
import { Idisabled } from "./Idisabled"

export interface ITextField extends Idisabled {
    onChange?: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void

}
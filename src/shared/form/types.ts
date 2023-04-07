import { ChangeEvent } from "react"

export interface InputProps {
    id: string,
    label: string,
    name: string,
    error?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}
import { ButtonHTMLAttributes } from "react"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string
}

export default function Button({children, ...props}: ButtonProps) {
    return <button {...props}>{children}</button>
}


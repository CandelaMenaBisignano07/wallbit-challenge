"use client"
import { createContext, useState } from "react";
import { Dispatch, SetStateAction, ReactNode } from "react";
export type ErrorContextType ={
    setError: Dispatch<SetStateAction<string | null>>;
    error:string|null
}
export const ErrorContext = createContext<undefined|ErrorContextType>(undefined)

export default function ErrorContextProvider({children}:{children:ReactNode}){
    const [error, setError] = useState<null|string>(null)
    return(
        <ErrorContext.Provider value={{setError, error}}>{children}</ErrorContext.Provider>
    )
}
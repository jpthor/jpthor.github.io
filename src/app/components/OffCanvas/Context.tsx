import React, { createContext, useReducer } from 'react'
import { ProviderProps } from './Props'

type State = {
    isOpen: boolean
}

type Action = { type: 'open' } | { type: 'close' }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'open':
            return {
                isOpen: true
            }
        case 'close':
            return {
                isOpen: false
            }
        default:
            return state
    }
}



interface ContextProps {
    isOpen?: boolean
    handleOpen?: () => void
    handleClose?: () => void
    randomId: string
}

export const AppContext = createContext<ContextProps>({
    isOpen: false,
    randomId: ''
})

export function OffcanvasProvider({
    children,
    onOpen,
    onClose
}: ProviderProps) {
    const [{ isOpen }, dispatch] = useReducer(reducer, {
        isOpen: false
    })

    const handleOpen = () => {
        dispatch({ type: 'open' })
        if (onOpen) onOpen()
    }
    const handleClose = () => {
        dispatch({ type: 'close' })
        if (onClose) onClose()
    }

    return (
        <AppContext.Provider value={{ isOpen, handleOpen, handleClose, randomId: "new" }}>
            <div className="simple-offcanvas-component d-flex align-items-center">{children}</div>
        </AppContext.Provider>
    )
}

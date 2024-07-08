import React, { useContext } from 'react'
import { AppContext } from './Context'
import { TriggerProps } from './Props'
import Image from 'next/image'

export function Trigger({
    component = 'button',
    className = 'offcanvas-trigger',
    styles = {},
    children
}: TriggerProps) {
    const { handleOpen, randomId } = useContext(AppContext)

    return (
        <Image width={50} height={50} src="/img/text-center.svg"  id="menu-ico" alt='Menu' onClick={handleOpen} />
    )
}

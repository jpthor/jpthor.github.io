import React, { useCallback, useContext, useEffect } from 'react'
import scss from './OffCanvas.module.scss'
import { AppContext } from './Context'
import { OffcanvasProps } from './Props'
import { navbarCopy } from '../../copy'
import Image from 'next/image'


export function Offcanvas({
    title = navbarCopy.title,
    position = 'right',
    backdrop = true,
    allowClickAway = true,
    allowEsc = true,
    allowScroll = true,
    className = 'simple-offcanvas',
    styles = {},
    children
}: OffcanvasProps) {
    const { handleClose, isOpen, randomId } = useContext(AppContext)

    const onClickOutside = useCallback(() => {
        if (!allowClickAway) return

        if (isOpen) {
            if (handleClose) handleClose()
        }
    }, [allowClickAway, isOpen, handleClose])

    const onEscKey = useCallback(
        (event: KeyboardEvent) => {
            if (!allowEsc) return

            if (event.key === 'Escape') {
                if (isOpen) {
                    if (handleClose) handleClose()
                }
            }
        },
        [allowEsc, isOpen, handleClose]
    )

    useEffect(() => {
        document.addEventListener('keydown', onEscKey, false)
        return () => document.removeEventListener('keydown', onEscKey)
    }, [onEscKey])

    // useEffect(() => {
    //     if (isOpen) {
    //         document.getElementsByClassName("OffCanvas_backdrop__-Fmj- ")[0].addEventListener('click', onClickOutside, false)
    //         return () => document.getElementsByClassName("OffCanvas_backdrop__-Fmj- ")[0].removeEventListener('click', onClickOutside)
    //     }
    // }, [onClickOutside])

    useEffect(() => {
        if (!allowScroll) {
            if (isOpen) document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen, allowScroll])

    return (
        <>
            <div
                id={`offcanvas_${randomId}`}
                className={`${scss.offcanvas} ${scss[position]} ${isOpen ? scss.show : ''
                    } ${className}  text-bg-dark`}
                tabIndex={-1}
                style={styles}
                role="dialog"
                aria-labelledby={scss.title}
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
                aria-hidden="true"
            >
                <div className={scss.header}>
                    <h5 className={scss.title}>{title}</h5>
                    <button
                        className={scss.close}
                        onClick={handleClose}
                        type="button"
                        tabIndex={0}
                        aria-label="Close"
                    />
                </div>
                <div className={scss.body}>
                    <div className="px-5 py-2">
                        <ul className="navbar-nav text-end">
                            {navbarCopy.links.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <a href={link.href} className="nav-link" onClick={handleClose}>{link.title}</a>
                                </li>
                            ))}
                        </ul>

                        <ul className="w-100 p-0 d-flex position-fixed bottom-0" style={{ listStyle: "none" }}>
                            {navbarCopy.socials.map((social, index) => (
                                <li key={index} className="p-social">
                                    <a target={social.target} href={social.href} >
                                        <Image width={30} height={30} src={social.image} alt={social.title} />
                                    </a>
                                </li>

                            ))}

                        </ul>
                    </div>
                </div>
            </div>
            {backdrop && (
                <div onClick={handleClose} className={`${scss.backdrop} ${isOpen ? scss.show : ''}`} />
            )}
        </>
    )
}

'use client'

import { useState } from "react"
import Button from "../../../components/Button"
import { withScrollLock } from "@/lib/withScrollLock"
import { Close } from '../../../components/IconLibrary'

const CLOSE = <Close size={16} styles="text-white"/>

interface BtnSupportProps {
    checkoutURL: string
    previewURL?: string
    price?: number
}

const BtnSupport = ({ checkoutURL, previewURL, price }: BtnSupportProps) => {
    const checkoutLabel = !price ? 'Get for Free' : `Get for $${price}`
    const [open, setOpen] = useState(false)

    withScrollLock(open)

    return (
        <>
            <div className="flex flex-wrap w-full gap-3">
                <Button
                    title={checkoutLabel}
                    additionalHoverLogic={open}
                    click={() => setOpen(true)}
                />
                <Button
                    variant="secondary"
                    title="Preview"
                    click={() => window.open(previewURL, "_blank")}
                />
            </div>

            {/* open overlay */}
            <div
                className={`
                    fixed inset-0 z-50 flex items-center justify-center bg-(--black)/50 backdrop-blur-sm transition-opacity duration-300
                    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => setOpen(false)}
            >
                <div
                    className="relative bg-(--black) border border-(--divider) w-[95%] max-w-lg sm:max-w-2xl h-[80vh] overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <iframe
                        src={checkoutURL}
                        className="w-full h-full"
                        title="Checkout"
                        allow="payment"
                    />
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute cursor-pointer top-4 right-4 text-(--white) rounded-full w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/15 transition-colors duration-300"
                    >
                        {CLOSE}
                    </button>
                </div>

            </div>
        </>
    )
}

export default BtnSupport
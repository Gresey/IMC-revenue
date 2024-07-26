import React from 'react'
import ReceiptCard from '../ReceiptCard'

export default function ViewReceipts() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <ReceiptCard />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <ReceiptCard />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <ReceiptCard />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <ReceiptCard />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <ReceiptCard />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <ReceiptCard />
            </div>
        </div>
    )
}

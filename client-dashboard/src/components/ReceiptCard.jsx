import React from 'react'

export default function ReceiptCard() {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Lorem!
                        <div className="badge badge-secondary">lorem</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolores numquam, consectetur sunt dolore expedita illum harum error delectus quo eaque aliquam sapiente inventore dicta iste excepturi ullam, modi possimus.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Paid</div>
                        <div className="badge badge-outline">No Due</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

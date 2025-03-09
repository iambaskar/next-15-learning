import React from 'react'

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>product details {productId}</h1>
    </div>
  )
}

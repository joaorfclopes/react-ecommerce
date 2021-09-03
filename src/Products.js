import React from 'react'
import {useQuery} from '@apollo/client'
import {PRODUCTS} from './queries'

export default function Products() {
  const {loading, error, data} = useQuery(PRODUCTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.products.map(({id, name}) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ))
}

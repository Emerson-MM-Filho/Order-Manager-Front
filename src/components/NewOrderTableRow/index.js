import React from 'react'

function NewOrderTableRow({products}) {
  return (
    <tbody>
      {products.map((current) => (
        <tr key={current.option.id}>
          <td>{current.name}</td>
          <td>{current.description}</td>
          <td>{current.option.price}</td>
          <td><input type='number'/></td>
          <td>{current.option.price}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default NewOrderTableRow
import axios from '../plugins/axios/axios'

export default async (product) => {
  const response = await axios().post('/api/products', {
    name: product.name,
    description: product.description,
    voltage_id: product.voltage,
    producer_id: product.producer,
  })

  return response
}

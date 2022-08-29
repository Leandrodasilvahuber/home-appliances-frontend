import axios from '../plugins/axios/axios'

export default async (id) => {
  return await axios().delete('/api/products/' + id)
}

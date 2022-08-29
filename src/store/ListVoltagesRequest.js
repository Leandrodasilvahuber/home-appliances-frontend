import axios from '../plugins/axios/axios'

export default async () => {
  return await axios().get('/api/voltages')
}

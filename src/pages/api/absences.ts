import type { NextApiRequest, NextApiResponse } from 'next'
import mockData from 'src/json_files/absences.json'
type Data = {
  message: string
  payload: any[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(mockData)
}

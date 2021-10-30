import type {NextApiRequest, NextApiResponse} from 'next'

const previewData = Array.from({length: 10}, (_, idx) => ({
  title: `Post ${idx}`,
  content: `Post Content ${idx}`,
}))

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secretToken !== 'MY_SECRET_TOKEN' && !req.query.slug) {
    return res.status(400).json({message: 'Invalid Token!'})
  }
  res.setPreviewData(previewData)
  res.redirect(req.query.slug as string)
}

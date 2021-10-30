type Post = {
  title: string
  content: string
}

type PreviewProps = {
  preview: boolean
  previewData: Array<Post>
}

function Preview({preview, previewData}: PreviewProps) {
  return (
    <div>
      {preview
        ? previewData.map((p, idx) => (
            <li key={`post-items-${idx}`}>
              <h2>{p.title}</h2>
              <p>{p.content}</p>
            </li>
          ))
        : 'This is the normal static generation page.'}
    </div>
  )
}

export default Preview

export function getStaticProps({preview, previewData}: PreviewProps) {
  return {
    props: {
      preview: preview ?? null,
      previewData: previewData ?? null,
    },
  }
}

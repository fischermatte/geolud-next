import React, {BaseSyntheticEvent} from 'react'

interface Image {
  title: string
  url: string
}

interface Props {
  images: Image[]
  onClose: (e: BaseSyntheticEvent) => void
}

const GalleryDialog: React.FC<Props> = props => {
  return (
    <div
      className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-90 flex text-accent-dark"
      onClick={e => props.onClose(e)}
    >
      <div
        className="relative p-6 bg-accent-normal w-full max-w-2xl m-auto flex-col flex"
        onClick={e => e.stopPropagation()}
      >
        {props.images && (
          <div className="flex flex-col gap-2">
            {props.images
              ?.filter((v, index) => index === 1)
              .map(image => (
                // use Image once this is fixed: https://github.com/netlify/next-on-netlify/issues/70
                <img key={image.url} src={image.url} alt={image.title} width="100%" />
              ))}
          </div>
        )}
        <div className="text-center mt-6 select-none">
          <button
            className="text-accent-normal bg-accent-dark py-2 px-4 hover:bg-accent-contrast"
            tabIndex={0}
            onClick={e => props.onClose(e)}
            onKeyDown={e => {
              if (e.key === 'Enter') props.onClose(e)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
export default GalleryDialog

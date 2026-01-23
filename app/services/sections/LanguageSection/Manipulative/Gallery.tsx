import Image from "next/image"

interface ImageRowProps {
  images: {
    src: string
    alt: string
  }[]
}

const ImageRow: React.FC<ImageRowProps> = ({ images }) => {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-2xl overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageRow

export type LinkMetadata = {
  url: string
  title: string | undefined
  siteName: string | undefined
  description: string | undefined
  mediaType: string | undefined
  contentType: string | undefined
  images: string[] | undefined
  videos:
    | {
        url: string | undefined
        secureUrl: string | null | undefined
        type: string | null | undefined
        width: string | undefined
        height: string | undefined
      }[]
    | undefined
  favicons: string[]
}

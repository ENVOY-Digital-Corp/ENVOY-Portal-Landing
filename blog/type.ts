export type BlogContentType = {
  pages: {
    [key: string]: {
      imageSrc: string
      alt: string
      title: string
      description: string
      date: string
      newsSource: string
      path: string
    }
  }
  highlights: string[]
}

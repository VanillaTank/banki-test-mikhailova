import { pictures } from '@/mockData'

const lagWrapper = (cb, maxLag = 5000) => {
  const lag = Math.floor(Math.random() * maxLag)
  return new Promise(resolve => {
    return setTimeout(() => {
      cb(resolve)
    }, lag)
  })
}

export default {
  fetchPictures () {
    return lagWrapper(resolve=> resolve(pictures))
  },
  fetchPicturesByName (searchText) {
    const lowerText = searchText.toLowerCase()
    const search = pictures.filter(({ name, author }) => {
      return name.toLowerCase().match(lowerText) || author.toLowerCase().match(lowerText)
    })
    return lagWrapper(resolve=> resolve(search), 3000)
  },
}
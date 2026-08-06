import { pictures } from '@/mockData'
import { storage } from '@/utils/storage'

const lagWrapper = (cb, maxLag = 4000, setLag = 0) => {
  const lag = setLag
      ? setLag
      : Math.floor(Math.random() * maxLag)

  return new Promise(resolve => {
    return setTimeout(() => {
      cb(resolve)
    }, lag)
  })
}

export default {
  fetchPictures () {
    const picInCart = storage.get('picInCart')
    const processedPictures = pictures
      .map(pic => {
        return {
          ...pic,
          isInCart: picInCart.includes(pic.id),
        }
      })
    return lagWrapper(resolve=> resolve(processedPictures))
  },
  fetchPicturesByName (searchText) {
    const lowerText = searchText.toLowerCase()
    const search = pictures.filter(({ name, author }) => {
      return name.toLowerCase().match(lowerText) || author.toLowerCase().match(lowerText)
    })
    return lagWrapper(resolve=> resolve(search), 3000)
  },
  addToCart (pictureId) {
    const picInCart = storage.get('picInCart')
    picInCart.push(pictureId)
    storage.set('picInCart', picInCart)
    return lagWrapper(resolve => resolve(), 0, 2000)
  },
  removeFromCart (pictureId) {
    let picInCart = storage.get('picInCart')
    picInCart = picInCart.filter(id => id !== pictureId)
    storage.set('picInCart', picInCart)
    return lagWrapper(resolve => resolve(), 0, 2000)
  },
}
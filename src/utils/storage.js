export const storage = {
  get (key) {
    try {
      const value = localStorage.getItem(key)
      return value !== null 
        ? JSON.parse(value) 
        : []
    } catch (e) {
      console.error(`Ошибка чтения localStorage (${key}):`, e)
      return null
    }
  },
  set (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(`Ошибка записи в localStorage (${key}):`, e)
    }
  },
}
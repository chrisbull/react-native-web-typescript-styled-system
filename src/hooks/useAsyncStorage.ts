import Storage from '../services/storage'

export const useAsyncStorage = (key: string) => ({
  save: <T extends object>(value: T) => Storage.save<T>(key, value),
  saveString: <T extends string>(value: T) => Storage.saveString(key, value),
  load: <T extends object>() => Storage.load<T>(key),
  loadString: <T extends string>() => Storage.loadString<T>(key),
  merge: <T extends object>(value: T) => Storage.merge(key, value),
  remove: () => Storage.remove(key),
  clear: () => Storage.clear(),
})

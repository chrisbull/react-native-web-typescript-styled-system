import deepmerge from 'deepmerge'
import { AsyncStorage as RNAsyncStorage } from 'react-native'

export default class Storage {
  static loadString = async <T extends string>(
    key: string,
  ): Promise<T | null> => {
    try {
      const result = await RNAsyncStorage.getItem(key)
      return result as T
    } catch {
      return null
    }
  }

  static saveString = async <T extends string>(
    key: string,
    value: T,
  ): Promise<boolean> => {
    try {
      await RNAsyncStorage.setItem(key, value)
      return true
    } catch {
      return false
    }
  }

  static load = async <T extends object>(key: string): Promise<T | null> => {
    try {
      const result = await RNAsyncStorage.getItem(key)
      return JSON.parse(result) as T
    } catch {
      return null
    }
  }

  static save = async <T extends object>(
    key: string,
    value: T,
  ): Promise<boolean> => {
    try {
      await RNAsyncStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  }

  static merge = async <T extends object>(key: string, value: T) => {
    try {
      const original = await Storage.load<T>(key)
      const merged = deepmerge<T>(original, value)
      return Storage.save(key, merged)
    } catch {
      return false
    }
  }

  static remove = async (key: string): Promise<void> => {
    try {
      await RNAsyncStorage.removeItem(key)
    } catch {}
  }

  static clear = async (): Promise<void> => {
    try {
      await RNAsyncStorage.clear()
    } catch {}
  }
}

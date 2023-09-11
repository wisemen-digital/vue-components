import { generateUuid } from '../uuid/generateUuid'

export interface RandomData {
  phone: string
  name: string
  postalZip: string
  region: string
  email: string
  country: string
  address: string
  otherStuff?: {
    other: string
    stuff: string
  }
}

export function dataFactory(amount: number): RandomData[] {
  const data: RandomData[] = []
  for (let i = 0; i < amount; i++) {
    data.push({
      phone: generateUuid(),
      name: generateUuid(),
      postalZip: generateUuid(),
      region: generateUuid(),
      email: generateUuid(),
      country: generateUuid(),
      address: generateUuid(),
    })
  }
  return data
}

export const data = dataFactory(1000)

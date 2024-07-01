export type UserCreate = {
  firstName: string
  email: string
  password: string
  isAdmin: boolean
  lastName: string
}

export type User = {
  id: number
  firstName: string
  email: string
  isAdmin: boolean
  lastName?: string
  img?: string
}

export type Users = User[]

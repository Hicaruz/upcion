import { ID, Response } from '../../../../../../_metronic/helpers'
export type User = {


  uid?: string
  first_name?: string
  second_name?: string
  fisrt_last_name?: string
  second_last_name?: string

  born_date?: string
  personal_document?: string
  address?: string
  profesion?: string
  departament?: string
  municip?: string
  home_phone?: string
  mobile_phone?: string

  email?: string

  amount?: string
  time?: string
  bank?: string
  interest?: string
  bank_account?: string
  bank_account_type?: string



  ben_first_name?: string
  ben_second_name?: string
  ben_fisrt_last_name?: string
  ben_second_last_name?: string

  ben_born_date?: string
  ben_personal_document?: string
  ben_address?: string
  ben_profesion?: string
  ben_departament?: string
  ben_municip?: string
  ben_percent?: string
  ben_mobile_phone?: string

  id?: ID
  name?: string
  avatar?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  write?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}

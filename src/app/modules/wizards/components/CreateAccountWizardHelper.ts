import * as Yup from 'yup'

export interface ICreateAccount {
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
  ben_email?: string
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
}



const inits: ICreateAccount = {
  first_name: "",
  second_name: "",
  fisrt_last_name: "",
  second_last_name: "",

  born_date: "",
  personal_document: "",
  address: "",
  profesion: "",
  departament: "",
  municip: "",
  home_phone: "",
  mobile_phone: "",

  email: "",
  ben_email: "",

  amount: "",
  time: "12 Meses",
  bank: "",
  interest: "7%",
  bank_account: "",
  bank_account_type: "",


  ben_first_name: "",
  ben_second_name: "",
  ben_fisrt_last_name: "",
  ben_second_last_name: "",

  ben_born_date: "",
  ben_personal_document: "",
  ben_address: "",
  ben_profesion: "",
  ben_departament: "",
  ben_municip: "",
  ben_percent: "100%",
  ben_mobile_phone: "",

}
const createAccountSchemas = Object.keys(inits).map(key => Yup.object({
  [key]: Yup.string().label(key),
}))


export { createAccountSchemas, inits }

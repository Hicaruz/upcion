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

const createAccountSchemas = [
  Yup.object({
    first_name: Yup.string().required().label('First Name'),
    second_name: Yup.string().required().label('Second Name'),
    fisrt_last_name: Yup.string().required().label('First Last Name'),
    second_last_name: Yup.string().required().label('Second last Name'),
    born_date: Yup.string().required().label('Born Date'),
    email: Yup.string().email().required().label('Born Date'),
    personal_document: Yup.string().required().label('Personal Document'),
    address: Yup.string().required().label('Address'),
    departament: Yup.string().required().label('Departament'),
    municip: Yup.string().required().label('Area'),
    home_phone: Yup.string().required().label('Home Phone'),
    mobile_phone: Yup.string().required().label('Mobile Phone'),
  }),
  Yup.object({
    amount: Yup.number().required().label('Amount'),
    bank: Yup.string().required().label('Bank'),
    bank_account: Yup.string().required().label('Bank Account'),
    bank_account_type: Yup.string().required().label('Bank Account Type'),
  }),
  Yup.object({
    ben_first_name: Yup.string().required().label('First Name'),
    ben_second_name: Yup.string().required().label('Second Name'),
    ben_fisrt_last_name: Yup.string().required().label('First Last Name'),
    ben_second_last_name: Yup.string().required().label('Second last Name'),
    ben_born_date: Yup.string().required().label('Born Date'),
    ben_email: Yup.string().email().required().label('Born Date'),
    ben_personal_document: Yup.string().required().label('Personal Document'),
    ben_address: Yup.string().required().label('Address'),
    ben_departament: Yup.string().required().label('Departament'),
    ben_municip: Yup.string().required().label('Area'),
    ben_mobile_phone: Yup.string().required().label('Mobile Phone'),
  }),
]


export { createAccountSchemas, inits }

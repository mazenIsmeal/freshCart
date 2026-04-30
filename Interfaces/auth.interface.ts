export interface RegisterAuth {
    name: string,
    email:string,
    password:string,
    rePassword:string,
    phone:string
}

export interface ResRegister {
  message: string
  user: User
  token: string
}

export interface User {
  name: string
  email: string
  role: string
}


export interface LoginType {
    email:string,
    password:string
}

export interface ResLogin {
  message: string
  user: User
  token: string
}

export interface User {
  name: string
  email: string
  role: string
}

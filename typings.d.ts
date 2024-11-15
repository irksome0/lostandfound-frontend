
export interface JWT{
    token:string
}

export interface signInProps{
    phoneNumber: string,
    password: string
}

export interface User{
    id: number,
    fullName: string,
    phoneNumber: string,
    role: string
}

export interface HeaderProps{
    user:User|null,
}

export interface UserContainerProps{
    user:User,
}
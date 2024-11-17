
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

export interface ReportModalProps{
    closeModal: () => void,
}
export interface ReportModel{
    name: string,
    description: string,
    dateFound: string,
    whereFound: string,
    status: string,
}

export interface ReportsResponse{
    response: ReportResponseModel[]
}  

interface ReportResponseModel{
    Item:{
        date_found:string,
        item_description:string,
        item_id:number,
        item_name:string,
        item_status:string,
        where_found:string,
    },
    report_id: number
    report_date:string,
    report_status:string,

}

interface ActiveReportModel{
    Item:{
        date_found:string,
        item_description:string,
        item_id:number,
        item_name:string,
        item_status:string,
        where_found:string,
    },
    User?:{
        full_name: string,
        user_id: number,
        phone_number: string,
    }
    report_id: number
    report_date:string,
    report_status:string,
}

export interface ActiveReports{
    response: ActiveReportModel[]
}
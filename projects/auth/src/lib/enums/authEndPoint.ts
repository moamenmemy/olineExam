import { baseUrl } from "../baseUrl/baseUrl"

export class AuthEndPoint {
    static LOGIN =`${baseUrl.baseUrl}/auth/signin`
    static SIGNUP =`${baseUrl.baseUrl}/auth/signup`
    static CHANGEPASSWORD =`${baseUrl.baseUrl}/auth/changePassword`
    static DELETEACCOUNt =`${baseUrl.baseUrl}/auth/deleteMe`
    static EDITPROFILE =`${baseUrl.baseUrl}/auth/editProfile`
    static LOGOUT =`${baseUrl.baseUrl}/auth/logout`
    static GETLOGGEDINFO =`${baseUrl.baseUrl}/auth/profileData`
    static FORFOTPASSWORD =`${baseUrl.baseUrl}/auth/forgotPassword`
    static VERIFY =`${baseUrl.baseUrl}/auth/verifyResetCode`
    static RESET =`${baseUrl.baseUrl}/auth/resetPassword`
}
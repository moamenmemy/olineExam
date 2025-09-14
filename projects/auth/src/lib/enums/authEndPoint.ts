import { baseUrl } from "../baseUrl/baseUrl"

export class AuthEndPoint {
    static LOGIN =`${baseUrl.baseUrl}/signin`
    static SIGNUP =`${baseUrl.baseUrl}/signup`
    static CHANGEPASSWORD =`${baseUrl.baseUrl}/changePassword`
    static DELETEACCOUNt =`${baseUrl.baseUrl}/deleteMe`
    static EDITPROFILE =`${baseUrl.baseUrl}/editProfile`
    static LOGOUT =`${baseUrl.baseUrl}/logout`
    static GETLOGGEDINFO =`${baseUrl.baseUrl}/profileData`
    static FORFOTPASSWORD =`${baseUrl.baseUrl}/forgotPassword`
    static VERIFY =`${baseUrl.baseUrl}/verifyResetCode`
    static RESET =`${baseUrl.baseUrl}/resetPassword`
}
module.exports = Object.freeze({
    DATABASE_SCHEMA:'testing',
    MODELS:{
        FAVOURITES:'favourites',
        USERS:'users',
        TEST:'test',
        TRANSACTIONS:'transactions',
        TIMESHEET_RECORDS:'timesheet_records',
        LIKES:'likes',
        ORGANIZATIONS:'organizations',
        REQUESTS:'requests',
        VEHICLES:'vehicles',
        PROBLEMS:'problems',
        BIDS:'bids'
    },
    MESSAGES:{
       USER_NOT_FOUND: 'User with this email is not registered.',
       UPDATED_PASSWORD:"Updated password successfully",
       UPDATE_PASSWORD_ERROR:"Error while updating reset password token",
       MAIL_SENT_MESSAGE:"Kindly check your email for further instructions",
       PASSWORD_RESET_LINK_EXPIRED:"Invalid token, please try again.",
       REGISTRATION_FAILED:  'Registration failed. User with this email already registered.',
       FORGOT_PASSWORD_ERROR:"Error while updating reset password token",
       PROFILE_UPDATE_SUCCESS:"Updated profile successfully.",
       PROFILE_UPDATE_FAILURE:"Error while updating profile, please try again."
    },
    IMAGES_PATH:'./public/images',
    PROFILE_PIC_PATH:'./public/images/profile',
    ORGANIZATION_PIC_PATH:'./public/images/organizations'

});
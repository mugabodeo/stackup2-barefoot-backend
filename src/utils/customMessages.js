const messages = {
  userSignupSuccess: 'Your account has been created successfully! \n\n\n\n Please click on the button sent to your email to comfirm your account.',
  userSignupFailed: 'Sign up failed! Please try again later',
  loginSuccess: 'Successfully logged in',
  loginFail: 'Unknown credentials',
  loginUnauthorized: 'Email and password mismatch',
  loginEmailOrUsernameEmpty: 'Please enter your email or username',
  loginPasswordEmpty: 'Please enter your password',
  loginPasswordAndEmailOrUsernameEmpty: 'Please enter your email or username and your password',
  resetEmail: 'The email has been sent successfully',
  notExistUser: 'User does not exist',
  changed: 'The password has been changed',
  notChanged: 'The password not changed',
  errorMessage: 'occured an error',
  alreadyExistEmailOrUsername: 'The user with the provided email or username already exists',
  invalidFirstname: 'The first name should consist of alphabets and at least 3 minimum characters, without whitespaces or special characters',
  invalidLastname: 'The last name should consist of alphabets alphabets and at least 3 minimum characters, without whitespaces or special characters',
  invalidUsername: 'Username should consists of alphabets, numbers, 3 minimum characters and special characters like @._-, without whitespace',
  invalidEmail: 'Email should look like example@email.com',
  invalidGender: 'Gender should be male or female',
  invalidPassword: 'Password should consists of alphabets, capital letter, special characters, numbers and at least 8 characters minimum',
  invalidAddress: 'Address should consists of alphabets and at least 3 minimum characters, without whitespace or special characters',
  verifyMessage: 'You have now verified your account successfully',
  socialMediaAuthSucess: 'User authenticated successfully',
  loginPasswordAndEmailEmpty: 'Please enter your email and your password',
  oneWayTripRequestFailed: 'Trip request request failed',
  oneWayTripRequestCreated: 'Trip request successfuly submitted and waiting for approval',
  serverError: 'Sorry, something went wrong on our end, please try again later',
  tokenAbsent: 'Access denied, you must login to use this resource',
  tokenVerifyFailed: 'Sorry, we were unable to verify your identity, you must login to use this resource',
  endpointNotFound: 'The requested resource was not found',
  duplicateTripRequest: 'Request failed, attempting to submit the same trip request twice',
  accountNotVerified: 'Sorry, we were unable to verify your identity, please verify your account',
  invalidTravelType: 'Please specify the type of your trip',
  invalidTravelFrom: 'Please specify where you are travelling from',
  invalidTravelTo: 'Please provide where you are travelling to',
  invalidTravelReason: 'Please provide the reason for the trip',
  invalidTravelDate: 'The travel date should not be empty, must not be past date, not more than 6 months from now and look like 2001-01-01',
  invalidTravelAccomodation: 'Please specify wether you want acommodation on your trip',
  profileRetrievalSuccess: 'You profile is successfully retrieved',
  verifyYourAccount: 'You need to verify your account, before getting to profiles',
  notAllowedToAccessThisResources: 'You are not allowed to access this resources, login or signup first',
  profileNotFound: 'The user you are trying ton search does not exist on our system',
  profileUpdateSuccess: 'Profile updated successfully',
  internalServerError: 'Something unexpected occurred, please try again',
  profilePicUpdateErr: 'Your Profile picture could not be uploaded, please try again!',
  invalidProfilePicExt: 'The profile picture you are trying to upload does not have valid extension, please use jpg, png, or gif images',
  updaterEmailRequired: 'Enter your email please!',
  incorrectOldPassword: 'You have entered incorrect old password, if you have forgotten your password, logout and reset your password.',
  usernameExistOrEmpty: 'The username you entered already exists or is empty, if you want to continue update your profile, change the new username or unselect it to remain with the old one',
  passwordChangeSuccess: 'Your password has been changed, login with new password',
  changeEmailNotAllowed: 'You cannot change your email, unselect it if you want to continue updating your profile, otherwise you will not be able to continue',
  tokenInvalid: 'Authentication failed. Token is invalid',
  tokenMissing: 'Authentication failed. Token is missing',
  userLogoutSuccess: 'Log out successful',
  invalidReturnDate: 'The return date should not be empty, should be greater than travel date and look like 2001-01-01',
  placesRetrieved: 'Successfully retrieved destinations and their visit times',
  noPlacesRetrieved: 'Data not available for now, because there is no any trip yet, please try again later',
  userNotAllowedForAction: 'You are not allowed to perform this action',
  roleAssigned: 'Role assigned to user successfully',
  invalidRole: 'The role must be Super Administrator, Travel Administrator, Travel Team Member, Manager or Requester',
  existingRole: 'That is the existing role for this user',
  superUser: 'You cannot change the role for the super user',
  commentAdded: 'Your comment is added successfully',
  commentOnOthersReqNotAdmin: 'You cannot comment on a request which is not yours',
  requestAndCommentsRetrieved: 'We got you some requests and some comments',
  requestButNoCommentYet: 'We got you some requests but it seems that you do not have any comment yet',
  noRequestYet: 'We did not find any request, which means there is no comment yet',
  isNotMyComment: 'You cannot update nor delete comment which is not yours',
  emptyCommentId: 'Please select the comment you want to update',
  commentUpdatedSuccess: 'Your comment has been updated successfully',
  requestNotExists: 'That travel-request does not exist, create some or try existing one',
  commentDeleted: 'Your comment has been deleted successfully',
  commentNoFound: 'The comment you want to update or delete does not exist',
  noCommentYet: 'This request does not have any comment yet',
  commentsRetrieved: 'Comments retrieved successfully',
  emptyCommentBody: 'You cannot update nor create comment with an empty message body, please type some comment',
  requestIdMustBeANumber: 'requestId, should be a number, not mixed with characters, and not empty',
  pageMustBeANumber: 'Page number, should be a number, not mixed with characters, and not empty',
  noCommentOnThisPage: 'No comment found on this page',
  viewCmtNotMineReq: 'You cannot view comments on request which is not yours',
  requestsRetrieved: 'Requests have been retrieved successfully',
  noRequestsYet: 'You do not have any request, you can create some',
  noRequestsFoundOnThisPage: 'There is no requests found on this page'
};

export default messages;

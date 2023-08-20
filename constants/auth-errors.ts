export enum AuthErrors {
  APP_DELETED = "The Firebase project associated with the authentication client was deleted.",
  APP_NOT_AUTHORIZED = "The app is not authorized to use Firebase Authentication.",
  ARGUMENT_ERROR = "An invalid argument was provided.",
  CAPTCHA_CHECK_FAILED = "The reCAPTCHA response token couldn't be verified.",
  CODE_EXPIRED = "The verification code has expired.",
  CORDOVA_NOT_READY = "Cordova framework is not ready yet.",
  CORS_UNSUPPORTED = "This operation is not supported in a CORS environment.",
  DYNAMIC_LINK_NOT_ACTIVATED = "Firebase Dynamic Links are not activated.",
  EMAIL_ALREADY_IN_USE = "User with this email already exists.",
  ID_TOKEN_EXPIRED = "The user's ID token has expired.",
  INVALID_API_KEY = "The provided API key is invalid.",
  INVALID_APP_CREDENTIAL = "The provided app credential is invalid.",
  INVALID_CONTINUE_URI = "The continue URL provided in the request is invalid.",
  INVALID_EMAIL = "The provided email is not a valid email address.",
  INVALID_CREDENTIAL = "The provided credential is malformed or has expired.",
  INVALID_DISABLED_FIELD = "The 'disabled' field in the user record is invalid.",
  INVALID_DISPLAY_NAME = "The provided display name is invalid.",
  INVALID_DYNAMIC_LINK_DOMAIN = "The provided dynamic link domain is not configured or authorized.",
  INVALID_EMAIL_VERIFIED = "The email address has already been verified.",
  INVALID_HASH_ALGORITHM = "The hash algorithm is not supported.",
  INVALID_ID_TOKEN = "The provided ID token is invalid.",
  INVALID_LAST_SIGN_IN_TIME = "The last sign-in time is invalid.",
  INVALID_PAGE_TOKEN = "The provided page token in the listUsers() request is invalid.",
  INVALID_PASSWORD = "The provided password is invalid.",
  INVALID_PHONE_NUMBER = "The provided phone number is invalid.",
  INVALID_PHOTO_URL = "The provided photo URL is invalid.",
  INVALID_PROVIDER_ID = "The provided provider ID is invalid.",
  INVALID_SESSION_COOKIE_DURATION = "The session cookie duration is invalid.",
  INVALID_UID = "The provided UID is invalid.",
  INVALID_USER_IMPORT = "The user import file format is invalid.",
  MAXIMUM_USER_COUNT_EXCEEDED = "The maximum allowed number of users has been exceeded.",
  MISSING_ANDROID_PKG_NAME = "An Android package name must be provided if the Android app is required to be installed.",
  MISSING_CONTINUE_URI = "The continue URL must be provided in the request.",
  MISSING_HASH_ALGORITHM = "The hash algorithm must be provided when generating password hashes.",
  MISSING_IOS_BUNDLE_ID = "An iOS bundle ID must be provided if the iOS app is required to be installed.",
  MISSING_OAUTH_CLIENT_SECRET = "The OAuth client secret must be provided.",
  OPERATION_NOT_ALLOWED = "The requested authentication operation is not allowed.",
  PHONE_NUMBER_ALREADY_EXISTS = "The provided phone number is already associated with an existing account.",
  PROJECT_NOT_FOUND = "The specified Firebase project does not exist.",
  RESERVED_CLAIMS = "The user's custom claims contain reserved keywords.",
  SESSION_COOKIE_EXPIRED = "The Firebase session cookie has expired.",
  SESSION_COOKIE_REVOKED = "The Firebase session cookie has been revoked.",
  TENANT_ID_MISMATCH = "The provided tenant ID does not match the authenticated user's tenant ID.",
  UNAUTHORIZED_CONTINUE_URI = "The provided continue URL is not authorized.",
  UNVERIFIED_EMAIL = "The user's email address is not verified.",
  USER_CANCELLED = "The user cancelled the authentication request.",
  USER_NOT_FOUND = "There is no user record corresponding to the provided identifier.",
  WEAK_PASSWORD = "Your password is too weak. Please choose another one.",
  WEB_STORAGE_UNSUPPORTED = "Web storage is not supported in this environment.",
}
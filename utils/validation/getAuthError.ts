import { AuthErrors } from "../../constants/auth-errors";

export const getAuthError = (message: string) => {
  const match = message.match(/\(auth\/([^)]+)\)/);

  const errorKey = match?.[1]
    .toUpperCase()
    .replace(/-/g, "_") as keyof typeof AuthErrors;

  return AuthErrors[errorKey] || "An unknown error occurred.";
};

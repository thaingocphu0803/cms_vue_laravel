// required rule
export const required = (field: string) => (v: any) => !!v || `${field} is required`

// valid email rule
export const email = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || `Invalid email`

// min length rule
export const minLenghh = (field: string, min: number) => (v: any) =>
  v.length >= min || `${field} must be at least ${min} characters`

//  has lowercase letter rule
export const hasLowerLetter = (field: string) => (v: any) =>
	/[a-z]/.test(v) || `${field} must be at least one lowercase character`

//  has uppercase letter rule
export const hasUpperLetter = (field: string) => (v: any) =>
  /[A-Z]/.test(v) || `${field} must be at least one uppercase character`


// has number rule
export const hasNumber = (field: string) => (v: any) =>
  /\d/.test(v) || `${field} must be at least one number`

// has special char rule
export const hasSpecialChar = (field: string) => (v: any) =>
  /[^A-Za-z0-9]/.test(v) || `${field} must be at least one special char`

// match target rule
export const sameAs = (field: string, target: any) => (v: any) =>
  v === target || `${field} is not matched`

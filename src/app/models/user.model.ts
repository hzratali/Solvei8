export interface User {
  name?: string;
  password: string;
  email?: string;
  phone?: string;
  organizationName?: string;
  organizationId?: string;
  designation?: string;
  birthDate?: Date | null;
  city?: string;
  pincode?: string;
}

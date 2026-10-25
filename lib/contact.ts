import { contactData } from "@/app/data/data";

// Configure verified public contact details in app/data/data.ts.
export const publicContact: {
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
} = {
  phone: contactData.phone,
  whatsapp: contactData.whatsapp,
  email: contactData.email,
};

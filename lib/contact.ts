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

export const whatsappHref = `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent("नमस्ते पंडित जी, मुझे उज्जैन में पूजा की विधि, तैयारी और उपलब्धता की जानकारी चाहिए।")}`;

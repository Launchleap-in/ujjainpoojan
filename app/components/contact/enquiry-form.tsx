"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { services } from "@/app/data/data";
import { publicContact } from "@/lib/contact";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

export function EnquiryForm({
  defaultService = "",
  defaultTopic = "",
}: {
  defaultService?: string;
  defaultTopic?: string;
}) {
  const initial = defaultService === "guidance" || services.some((s) => s.slug === defaultService)
    ? defaultService
    : "";
  const [topic, setTopic] = useState(defaultTopic || "जन्मकुंडली");
  const [service, setService] = useState<string>(initial);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");
  const draftHeading = useRef<HTMLHeadingElement>(null);
  const connected = Boolean(publicContact.whatsapp || publicContact.email);
  const serviceOptions = [
    { value: "guidance", label: "पूजा तय नहीं है — मार्गदर्शन चाहिए" },
    ...services.map(s => ({ value: s.slug, label: s.title })),
  ];

  useEffect(() => {
    if (draft) draftHeading.current?.focus();
  }, [draft]);

  function showError(message: string, field: string) {
    setError(message);
    setErrorField(field);
    document.getElementById(field)?.focus();
  }

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setErrorField("");
    setStatus("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const date = String(form.get("date") ?? "");
    if (name.length < 2) {
      showError("कृपया अपना पूरा नाम लिखें।", "enquiry-name");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (!/^(?:91)?[6-9]\d{9}$/.test(digits)) {
      showError(
        "कृपया 10 अंकों का भारतीय मोबाइल नंबर लिखें; +91 भी जोड़ सकते हैं।",
        "enquiry-phone",
      );
      return;
    }
    const selected = services.find((s) => s.slug === service);
    if (!selected && service !== "guidance") {
      showError("कृपया पूजा या परामर्श का विकल्प चुनें।", "enquiry-service");
      return;
    }
    if (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (new Date(`${date}T00:00:00`) < today) {
        showError("कृपया आज या आगे की पसंदीदा तिथि चुनें।", "enquiry-date");
        return;
      }
    }
    const readableDate = date
      ? new Intl.DateTimeFormat("hi-IN", { dateStyle: "long" }).format(
          new Date(`${date}T00:00:00`),
        )
      : "चर्चा के बाद तय करेंगे";
    const birthDate = String(form.get("birth-date") ?? "");
    const birthTime = String(form.get("birth-time") ?? "");
    const birthPlace = String(form.get("birth-place") ?? "").trim();
    if (service === "kundli-paramarsh" && birthDate && new Date(`${birthDate}T00:00:00`) > new Date()) {
      showError("जन्म तिथि भविष्य की नहीं हो सकती।", "birth-date");
      return;
    }
    const birthDetails = service === "kundli-paramarsh"
      ? `\nपरामर्श का विषय: ${topic}\nजन्म तिथि: ${birthDate || "परामर्श में साझा करेंगे"}\nजन्म समय: ${birthTime || "उपलब्ध नहीं / अनुमानित"}\nजन्म स्थान: ${birthPlace || "परामर्श में साझा करेंगे"}`
      : "";
    setDraft(
      `नमस्ते पंडित दीपक शर्मा जी, मुझे पूजा संबंधी जानकारी चाहिए।\n\nनाम: ${name}\nमोबाइल: ${phone}\nपूजा / परामर्श: ${selected?.title ?? "पूजा चुनने में मार्गदर्शन चाहिए"}${birthDetails}\nपसंदीदा तिथि: ${readableDate}\nसंकल्प / प्रश्न: ${String(form.get("message") ?? "").trim() || "पूजा की विधि एवं तैयारी की जानकारी चाहिए।"}\n\nकृपया उपलब्धता, विधि, सामग्री, अवधि और कुल शुल्क की जानकारी दें।`,
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus("पूछताछ कॉपी हो गई।");
    } catch {
      setStatus(
        "कॉपी नहीं हो सकी। नीचे के पाठ को चुनकर कॉपी करें या फ़ाइल डाउनलोड करें।",
      );
    }
  }
  function download() {
    const blob = new Blob([draft], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ujjain-pujan-enquiry.txt";
    link.click();
    URL.revokeObjectURL(url);
    setStatus("पूछताछ की फ़ाइल डाउनलोड हो गई।");
  }
  return (
    <div id="enquiry-form" className="min-w-0 rounded-2xl border border-gold/35 bg-card p-5 shadow-lg shadow-wine/5 sm:p-8">
      <p className="mb-3 text-xs font-semibold text-primary">चरण १ · अपनी जानकारी भरें</p>
      <h2 className="font-heading text-2xl leading-10 font-semibold text-wine">
        अपना संकल्प साझा करें।
      </h2>
      <p className="mt-3 text-sm leading-8 text-muted-foreground">
        {connected
          ? "अपनी जानकारी भरें और पूछताछ का संदेश तैयार करें।"
          : "अपनी पूछताछ का संदेश तैयार करें। अभी ऑनलाइन भेजने की सुविधा उपलब्ध नहीं है; संदेश कॉपी या डाउनलोड कर सकते हैं।"}
      </p>
      <p className="mt-2 text-xs leading-7 text-muted-foreground">* वाले विवरण आवश्यक हैं। पूजा तय नहीं है तो मार्गदर्शन का विकल्प चुनें।</p>
      <form
        onSubmit={prepare}
        onChange={() => {
          if (draft) setDraft("");
          setStatus("");
          setError("");
          setErrorField("");
        }}
        className="mt-7 space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="enquiry-name"
              className="mb-2 block text-sm text-wine"
            >
              आपका नाम <span className="text-primary">*</span>
            </label>
            <Input
              id="enquiry-name"
              name="name"
              autoComplete="name"
              required
              aria-invalid={errorField === "enquiry-name"}
              aria-describedby={errorField === "enquiry-name" ? "enquiry-error" : undefined}
              maxLength={100}
              placeholder="पूरा नाम"
              className="h-12 bg-background px-4"
            />
          </div>
          <div>
            <label
              htmlFor="enquiry-phone"
              className="mb-2 block text-sm text-wine"
            >
              मोबाइल नंबर <span className="text-primary">*</span>
            </label>
            <Input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              aria-invalid={errorField === "enquiry-phone"}
              aria-describedby={errorField === "enquiry-phone" ? "enquiry-error" : undefined}
              maxLength={18}
              placeholder="10 अंकों का नंबर"
              className="h-12 bg-background px-4"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="enquiry-service"
            className="mb-2 block text-sm text-wine"
          >
            पूजा या परामर्श चुनें <span className="text-primary">*</span>
          </label>
          <Select
            value={service || null}
            onValueChange={(value) => {
              setService(value ?? "");
              setDraft("");
              setStatus("");
              setError("");
              setErrorField("");
            }}
            items={serviceOptions}
            required
          >
            <SelectTrigger
              id="enquiry-service"
              aria-invalid={errorField === "enquiry-service"}
              aria-describedby={errorField === "enquiry-service" ? "enquiry-error" : undefined}
              className="h-auto! min-h-12 w-full bg-background px-4 py-3 [&_[data-slot=select-value]]:whitespace-normal [&_[data-slot=select-value]]:text-left [&_[data-slot=select-value]]:leading-7"
            >
              <SelectValue placeholder="अपनी आवश्यकता चुनें" className="min-w-0 line-clamp-none!" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((s) => (
                <SelectItem key={s.value} value={s.value} className="py-3">
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {service === "kundli-paramarsh" && (
          <fieldset className="space-y-4 rounded-xl border border-gold/40 bg-secondary/35 p-5">
            <legend className="px-2 text-sm font-semibold text-wine">कुंडली विश्लेषण की जानकारी</legend>
            <div>
              <label htmlFor="kundli-topic" className="mb-2 block text-sm text-wine">परामर्श का विषय</label>
              <select id="kundli-topic" value={topic} onChange={event => { setTopic(event.target.value); setDraft(""); }} className="min-h-12 w-full rounded-lg border bg-background px-3 text-sm">
                {["मंगल दोष", "विवाह एवं मिलान", "कालसर्प दोष", "जन्मकुंडली"].map(value => <option key={value} value={value}>{value}</option>)}
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="birth-date" className="mb-2 block text-sm text-wine">जन्म तिथि</label><Input id="birth-date" name="birth-date" type="date" aria-invalid={errorField === "birth-date"} aria-describedby={errorField === "birth-date" ? "enquiry-error" : undefined} className="h-12 bg-background px-3" /></div>
              <div><label htmlFor="birth-time" className="mb-2 block text-sm text-wine">जन्म समय</label><Input id="birth-time" name="birth-time" type="time" className="h-12 bg-background px-3" /></div>
            </div>
            <div><label htmlFor="birth-place" className="mb-2 block text-sm text-wine">जन्म स्थान</label><Input id="birth-place" name="birth-place" maxLength={150} placeholder="शहर, राज्य एवं देश" className="h-12 bg-background px-3" /></div>
            <p className="text-xs leading-7 text-muted-foreground">जन्म विवरण वैकल्पिक हैं। समय अनुमानित हो या विवाह मिलान के लिए दूसरे व्यक्ति का विवरण देना हो, तो नीचे अपने प्रश्न में लिखें।</p>
          </fieldset>
        )}
        <div>
          <label
            htmlFor="enquiry-date"
            className="mb-2 block text-sm text-wine"
          >
            पसंदीदा तिथि{" "}
            <span className="text-xs text-muted-foreground">(वैकल्पिक)</span>
          </label>
          <Input
            id="enquiry-date"
            name="date"
            type="date"
            aria-invalid={errorField === "enquiry-date"}
            aria-describedby={errorField === "enquiry-date" ? "enquiry-error" : undefined}
            className="h-12 bg-background px-4"
          />
        </div>
        <div>
          <label
            htmlFor="enquiry-message"
            className="mb-2 block text-sm text-wine"
          >
            अपना संकल्प या प्रश्न लिखें
          </label>
          <Textarea
            id="enquiry-message"
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="पूजा का उद्देश्य, सहभागी सदस्य या अपने प्रश्न…"
            className="min-h-30 resize-y bg-background p-4 leading-7"
          />
        </div>
        {error && (
          <p
            id="enquiry-error"
            role="alert"
            className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-7 text-primary"
          >
            {error}
          </p>
        )}
        <Button type="submit" className="h-auto min-h-12 max-w-full gap-3 whitespace-normal rounded-full px-6 py-3 leading-7">
          पूछताछ का संदेश तैयार करें
          <ArrowUpRight className="size-4" />
        </Button>
        <p className="text-xs leading-7 text-muted-foreground">
          संदेश तैयार करने से पूछताछ भेजी या बुकिंग निश्चित नहीं होती। आवश्यक
          संपर्क जानकारी ही साझा करें।
        </p>
      </form>
      {draft && (
        <div className="mt-7 border-t border-gold/30 pt-7">
          <p className="mb-3 text-xs font-semibold text-primary">चरण २ · संदेश जाँचें और अगला कदम चुनें</p>
          <h3 ref={draftHeading} tabIndex={-1} className="flex scroll-mt-32 items-center gap-2 text-base font-semibold text-wine outline-none">
            <Check className="size-4 text-sage" />
            आपकी पूछताछ तैयार है।
          </h3>
          <p className="mt-3 text-sm leading-8 text-muted-foreground">{connected ? "नीचे संदेश पढ़ें, फिर उपलब्ध संपर्क विकल्प से भेजें।" : "संदेश अभी भेजा नहीं गया है। इसे अपने पास कॉपी या डाउनलोड करके रखें।"}</p>
          <Textarea
            aria-label="तैयार पूछताछ का संदेश"
            readOnly
            value={draft}
            className="mt-4 min-h-64 bg-secondary/30 p-4 text-sm leading-7"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-11 gap-2 px-4"
              onClick={copy}
            >
              <Copy className="size-4" />
              कॉपी करें
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-11 gap-2 px-4"
              onClick={download}
            >
              <Download className="size-4" />
              डाउनलोड करें
            </Button>
            {publicContact.whatsapp && (
              <a
                href={`https://wa.me/${publicContact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(draft)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm text-cream"
              >
                WhatsApp पर भेजें ↗
              </a>
            )}
            {publicContact.email && (
              <a
                href={`mailto:${publicContact.email}?subject=${encodeURIComponent("पूजा संबंधी पूछताछ")}&body=${encodeURIComponent(draft)}`}
                className="inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm text-cream"
              >
                ईमेल में खोलें ↗
              </a>
            )}
          </div>
        </div>
      )}
      <p
        role="status"
        aria-live="polite"
        className="mt-4 text-sm leading-7 text-sage"
      >
        {status}
      </p>
    </div>
  );
}

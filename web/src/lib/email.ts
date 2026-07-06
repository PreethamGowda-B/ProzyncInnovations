/* src/lib/email.ts */
import { Resend } from "resend";

/*
 * Resend FREE tier restriction:
 *   When using `onboarding@resend.dev` as the FROM address, Resend only allows
 *   sending TO the email address you signed up with (your Resend account email).
 *
 * To send to prozyncinnovations@gmail.com you have two options:
 *   Option A (Recommended): Verify your domain at resend.com/domains and set
 *     EMAIL_FROM=Prozync Innovations <noreply@prozync.com>
 *
 *   Option B (Quick test): Set RESEND_TO_EMAIL to your Resend account email
 *     e.g. RESEND_TO_EMAIL=yourname@gmail.com
 *     (the email you used to sign up at resend.com)
 *
 * Once domain is verified, all emails will deliver to prozyncinnovations@gmail.com.
 */
const RECIPIENT  = process.env.RESEND_TO_EMAIL ?? "prozyncinnovations@gmail.com";
const FROM_ADDRESS = process.env.EMAIL_FROM ?? "Prozync Innovations <onboarding@resend.dev>";

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env.local — see .env.example for instructions."
    );
  }
  return new Resend(key);
}

export interface SendEmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ subject, html, replyTo }: SendEmailOptions) {
  const resend = getResend();

  console.log(`[Resend] Sending → FROM: ${FROM_ADDRESS}  TO: ${RECIPIENT}  SUBJECT: ${subject}`);

  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [RECIPIENT],
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    console.error("[Resend] ❌ Email send failed:", JSON.stringify(error, null, 2));
    throw new Error(
      typeof error === "object" && "message" in error
        ? (error as { message: string }).message
        : "Email delivery failed. Check server logs."
    );
  }

  console.log("[Resend] ✅ Email sent. ID:", data?.id);
  return data;
}


/* ── HTML email templates ──────────────────────────────────────── */

function baseTemplate(title: string, rows: [string, string | undefined][]): string {
  const rowsHtml = rows
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 16px;font-size:13px;color:#6b7280;width:160px;vertical-align:top;white-space:nowrap;">${label}</td>
        <td style="padding:8px 16px;font-size:13px;color:#111827;font-weight:500;">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#2563eb 0%,#7c3aed 100%);padding:28px 32px;">
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:2px;text-transform:uppercase;font-weight:600;">Prozync Innovations</p>
            <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">${title}</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:24px 16px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rowsHtml}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f3f4f6;padding:16px 32px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">This notification was sent automatically from <strong>prozync.com</strong>. Please do not reply directly to this email.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function buildContactEmail(data: {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  projectType: string;
  timeline: string;
  budget?: string;
  message: string;
  preferredContact: string;
}) {
  return baseTemplate("New Contact Enquiry", [
    ["Full Name",         data.fullName],
    ["Company",          data.companyName],
    ["Email",            data.email],
    ["Phone",            data.phone],
    ["Country",          data.country],
    ["Industry",         data.industry],
    ["Project Type",     data.projectType],
    ["Timeline",         data.timeline],
    ["Budget",           data.budget],
    ["Preferred Contact",data.preferredContact],
    ["Message",          data.message],
  ]);
}

export function buildDemoEmail(data: {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  organizationSize: string;
  industry: string;
  country: string;
  preferredDate: string;
  preferredTime: string;
  modulesOfInterest: string[];
  message?: string;
}) {
  return baseTemplate("New Demo Booking", [
    ["Name",              data.name],
    ["Company",           data.companyName],
    ["Email",             data.email],
    ["Phone",             data.phone],
    ["Org Size",          data.organizationSize],
    ["Industry",          data.industry],
    ["Country",           data.country],
    ["Preferred Date",    data.preferredDate],
    ["Preferred Time",    data.preferredTime],
    ["Modules Interested",data.modulesOfInterest.join(", ")],
    ["Message",           data.message],
  ]);
}

export function buildNewsletterEmail(data: { name: string; email: string }) {
  return baseTemplate("New Newsletter Subscriber", [
    ["Name",  data.name],
    ["Email", data.email],
  ]);
}

export function buildCareersEmail(data: {
  name: string;
  email: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  areasOfInterest: string[];
  message?: string;
}) {
  return baseTemplate("New Talent Network Application", [
    ["Name",             data.name],
    ["Email",            data.email],
    ["LinkedIn",         data.linkedinUrl],
    ["Portfolio",        data.portfolioUrl],
    ["Areas of Interest",data.areasOfInterest.join(", ")],
    ["Message",          data.message],
  ]);
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function EmailPasswordReset({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  return resend.emails.send({
    from: "no-reply@gestaotransporte.site", // teste primeiro
    to,
    subject,
    html,
  });
}

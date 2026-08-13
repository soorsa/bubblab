import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Read the HTML template
    // const emailTemplatePath = path.join(
    //   process.cwd(),
    //   "app/email-templates/subscription.html"
    // );
    // const htmlContent = fs.readFileSync(emailTemplatePath, "utf-8");

    // You can optionally replace placeholders with dynamic content
    // Example: htmlContent = htmlContent.replace('{{userName}}', user.name);

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      // host: "smtp.gmail.com",
      // port: 587,
      secure: true,
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Gmail App Password
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ["bubblab.com.ng@gmail.com", "kingsoorsa@gmail.com"], // Replace with actual recipient
      subject: "✨ New subscriber for Bubblab",
      html: `
      <!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>BUBBLAB · subscription</title>
    <style>
      /* Fancy + modern + responsive */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "comfortaa", system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      body {
        background-color: #f5f0eb;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0;
        mso-table-rspace: 0;
      }
      td,
      th {
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 32px 32px 24px 24px;
        overflow: hidden;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08),
          0 8px 20px rgba(0, 0, 0, 0.03);
      }
      .header {
        background: linear-gradient(145deg, #1e2b2f 0%, #2b3c41 100%);
        padding: 40px 36px 30px;
        text-align: center;
        position: relative;
      }
      .header::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #d4b68a, #e8d5b5, #d4b68a);
        border-radius: 0 0 12px 12px;
      }
      .header h1 {
        color: #f2eee9;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: -0.5px;
        margin-bottom: 6px;
      }
      .header .tagline {
        color: #d9d0c5;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        opacity: 0.8;
      }
      .header .badge {
        display: inline-block;
        background: rgba(212, 182, 138, 0.18);
        backdrop-filter: blur(4px);
        padding: 6px 20px;
        border-radius: 40px;
        margin-top: 16px;
        color: #e8d5b5;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.6px;
        border: 1px solid rgba(212, 182, 138, 0.25);
      }
      .hero-icon {
        font-size: 36px;
        line-height: 1;
        display: block;
        margin-bottom: 8px;
      }
      .content {
        padding: 36px 32px 24px;
        background: #fcfbf9;
      }
      .content h2 {
        font-size: 22px;
        font-weight: 600;
        color: #1e2b2f;
        margin-bottom: 12px;
        letter-spacing: -0.3px;
      }
      .content p {
        font-size: 16px;
        line-height: 1.7;
        color: #3f4a4e;
        margin-bottom: 24px;
        font-weight: 400;
      }
      .btn-primary {
        display: inline-block;
        background: #1e2b2f;
        color: #fcfbf9 !important;
        text-decoration: none;
        font-weight: 600;
        font-size: 17px;
        padding: 16px 38px;
        border-radius: 60px;
        box-shadow: 0 6px 18px rgba(30, 43, 47, 0.18);
        transition: all 0.2s ease;
        letter-spacing: 0.3px;
        border: 1px solid #1e2b2f;
        width: 100%;
        text-align: center;
      }
      .btn-primary:hover {
        background: #2b3c41;
        border-color: #2b3c41;
        box-shadow: 0 10px 24px rgba(30, 43, 47, 0.25);
        transform: scale(1.01);
      }
      .btn-secondary {
        display: inline-block;
        background: transparent;
        color: #1e2b2f;
        text-decoration: none;
        font-weight: 500;
        font-size: 15px;
        padding: 12px 24px;
        border-radius: 60px;
        border: 1px solid #d4cbc3;
        transition: all 0.15s ease;
        width: 100%;
        text-align: center;
        margin-top: 8px;
      }
      .btn-secondary:hover {
        background: #f5f0eb;
        border-color: #b8aaa0;
      }
      .divider {
        height: 1px;
        background: linear-gradient(
          to right,
          transparent,
          #ddd6cd,
          transparent
        );
        margin: 28px 0 18px;
      }
      .footer {
        padding: 24px 32px 32px;
        background: #f5f0eb;
        border-top: 1px solid #e7e0d9;
        text-align: center;
      }
      .footer p {
        font-size: 13px;
        color: #6b777a;
        line-height: 1.6;
        margin-bottom: 6px;
      }
      .footer .social {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 14px 0 10px;
      }
      .footer .social a {
        color: #3f4a4e;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        opacity: 0.7;
        transition: opacity 0.15s;
      }
      .footer .social a:hover {
        opacity: 1;
      }
      .footer .tiny {
        font-size: 11px;
        color: #8f989c;
      }
      @media (max-width: 500px) {
        .header {
          padding: 30px 20px;
        }
        .content {
          padding: 28px 18px;
        }
        .btn-primary {
          padding: 14px 20px;
          font-size: 16px;
        }
        .footer {
          padding: 20px;
        }
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      padding: 24px 12px;
      background: #f5f0eb;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      border="0"
      align="center"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr>
        <td align="center" style="padding: 0">
          <!-- main card -->
          <div
            class="container"
            style="background: #ffffff; border-radius: 32px; overflow: hidden"
          >
            <!-- HEADER -->
            <div
              class="header"
              style="
                background: linear-gradient(145deg, #ffffff, #d1f4ff);
                padding: 40px 36px 30px;
                text-align: center;
                position: relative;
              "
            >
              <div
                style="
                  display: flex;
                  margin: auto;
                  width: fit-content;
                  gap: 5px;
                "
              >
                <img
                  src="https://bubblab.vercel.app/images/logo.png"
                  class="hero-icon"
                  style="height: 60px; display: block; margin-bottom: 6px"
                />
                <div class="" style="flex: 1; text-align: left">
                  <div
                    style="
                      color: #164b5c;
                      font-size: 28px;
                      font-weight: 600;
                      text-align: left;
                    "
                  >
                    bubblab
                  </div>
                  <div
                    class="tagline"
                    style="
                      color: #164b5c;
                      font-size: 14px;
                      font-weight: 300;
                      letter-spacing: 1.5px;
                      text-transform: uppercase;
                      opacity: 0.8;
                    "
                  >
                    laundry · dry cleaning
                  </div>
                </div>
              </div>
              <div
                class="badge"
                style="
                  display: inline-block;
                  background: rgba(212, 182, 138, 0.18);
                  backdrop-filter: blur(4px);
                  padding: 6px 20px;
                  border-radius: 10px;
                  margin-top: 16px;
                  color: black;
                  font-size: 13px;
                  font-weight: 500;
                  letter-spacing: 0.6px;
                  border: 1px solid rgba(212, 182, 138, 0.25);
                "
              >
                ${data.plan_name} · ₦${data.plan_price}/month
              </div>
            </div>

            <!-- CONTENT -->
            <div
              class="content"
              style="padding: 36px 32px 24px; background: #fcfbf9"
            >
              <h2
                style="
                  font-size: 22px;
                  font-weight: 600;
                  color: #1e2b2f;
                  margin-bottom: 12px;
                "
              >
                You have new prospect for bubblab services.
              </h2>
              <p
                style="
                  font-size: 16px;
                  line-height: 1.7;
                  color: #3f4a4e;
                  margin-bottom: 24px;
                "
              >
                ${data.fullname} who resides at
                <strong>${data.address}, ${data.city} ${data.state}</strong> wants to
                subscribe to
                <strong style="color: #1e2b2f">${data.plan_name} ₦${data.plan_price}/month</strong>
                .
              </p>

              <!-- CTA -->
              <a
                href="https://wa.me/${data.whatsapp_phone}"
                class="btn-primary"
                style="
                  display: inline-block;
                  background: #1e2b2f;
                  color: #fcfbf9 !important;
                  text-decoration: none;
                  font-weight: 600;
                  font-size: 17px;
                  padding: 16px 38px;
                  border-radius: 60px;
                  box-shadow: 0 6px 18px rgba(30, 43, 47, 0.18);
                  letter-spacing: 0.3px;
                  border: 1px solid #1e2b2f;
                  width: 100%;
                  text-align: center;
                  box-sizing: border-box;
                "
              >
                💬 Chat ${data.fullname} on WhatsApp
              </a>
              <a
                href="tel:${data.whatsapp_phone}"
                class="btn-secondary"
                style="
                  display: inline-block;
                  background: transparent;
                  color: #1e2b2f;
                  text-decoration: none;
                  font-weight: 500;
                  font-size: 15px;
                  padding: 12px 24px;
                  border-radius: 60px;
                  border: 1px solid #d4cbc3;
                  width: 100%;
                  text-align: center;
                  box-sizing: border-box;
                  margin-top: 8px;
                "
              >
                📞 Call ${data.fullname} now
              </a>

              <div
                class="divider"
                style="
                  height: 1px;
                  background: linear-gradient(
                    to right,
                    transparent,
                    #ddd6cd,
                    transparent
                  );
                  margin: 28px 0 18px;
                "
              ></div>

              <!-- extra elegance -->
              <div
                style="
                  text-align: center;
                  font-size: 14px;
                  color: #5f6a6e;
                  padding: 0 6px;
                "
              >
                <span
                  style="
                    background: #f5f0eb;
                    padding: 6px 18px;
                    border-radius: 30px;
                    display: inline-block;
                    letter-spacing: 0.3px;
                  "
                >
                  🧺 first pickup: free upgrade to Premium
                </span>
              </div>
            </div>

            <!-- FOOTER -->
            <div
              class="footer"
              style="
                padding: 24px 32px 32px;
                background: #f5f0eb;
                border-top: 1px solid #e7e0d9;
                text-align: center;
              "
            >
              <p
                style="
                  font-size: 13px;
                  color: #6b777a;
                  line-height: 1.6;
                  margin-bottom: 6px;
                "
              >
                <strong style="color: #1e2b2f">BUBBLAB</strong> · 22 Felicia
                Omoniyi, BRT bustop Phase 1 Igando · LAGOS
              </p>
              <p
                class="tiny"
                style="font-size: 11px; color: #8f989c; margin-top: 10px"
              >
                © 2026 bubblab · you received this because you're fabulous.<br />
                <a href="#" style="color: #8f989c; text-decoration: underline"
                  >unsubscribe</a
                >
                ·
                <a href="#" style="color: #8f989c; text-decoration: underline"
                  >manage preferences</a
                >
              </p>
            </div>
          </div>
          <!-- end container -->
        </td>
      </tr>
    </table>
  </body>
</html>

      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

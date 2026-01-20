import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "DEBUG", email: "tkacranes.gestao.mkt@gmail.com" },
        to: [{ email: "SEU_EMAIL_PESSOAL@gmail.com" }],
        subject: "TESTE DIRETO API",
        htmlContent: "<h1>Teste direto API</h1>"
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json"
        }
      }
    );

    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json(e.response?.data || e.message);
  }
}

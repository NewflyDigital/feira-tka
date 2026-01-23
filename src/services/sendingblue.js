import axios from "axios";

const apiKey = process.env.NEXT_BREVO_API_KEY;

export const SendContato = async ({
  nome = "",
  email = "",
  telefone = "",
  empresa = "",
  mensagem = "",
}) => {
  console.log("📩 [SendContato] Iniciando envio...");
  console.log("📦 Dados recebidos:", {
    nome,
    email,
    telefone,
    empresa,
    mensagem,
  });

  if (!apiKey) {
    console.error("❌ API KEY NÃO ENCONTRADA");
    throw new Error("API Key Brevo não configurada");
  }

  console.log("🔐 API KEY (primeiros 6):", apiKey.slice(0, 6));

  const headers = {
    accept: "application/json",
    "api-key": apiKey,
    "content-type": "application/json",
  };

  console.log("🧾 Headers configurados");

  console.log("🏦 Conta Brevo acessível");

  const htmlContent = `
    <html>
      <body>
        <h2>Novo contato - Site TKA</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Empresa:</b> ${empresa}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${telefone}</p>
        <p><b>Mensagem:</b><br/>${mensagem.replace(/\n/g, "<br/>")}</p>
      </body>
    </html>
  `;

  console.log("📝 HTML gerado com sucesso");

  const body = {
    sender: {
      name: "DEBUG TKA",
      email: "tkacranes.gestao.mkt@gmail.com", // sender seguro
    },
    to: [
      {
        email: "fabioa.slima1@gmail.com",
        name: "Contato TKA",
      },
    ],
    subject: `DEBUG ENV - ${process.env.NODE_ENV} - ${new Date().toISOString()}`,
    htmlContent,
  };

  console.log("📨 Payload:", JSON.stringify(body, null, 2));
  console.log("📤 Enviando para Brevo...");

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      body,
      { headers }
    );

    console.log("✅ EMAIL ENVIADO COM SUCESSO");
    console.log("📬 Resposta Brevo:", response.data);

    return response.data;
  } catch (error) {
    console.error("❌ ERRO AO ENVIAR EMAIL");

    if (error.response) {
      console.error("📛 Status:", error.response.status);
      console.error("📛 Dados:", error.response.data);
    } else {
      console.error("📛 Mensagem:", error.message);
    }

    throw error;
  }
};

import { SendContato } from "../../services/sendingblue";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nome, email, telefone, empresa, mensagem } = req.body;

    await SendContato({
      nome,
      email,
      telefone,
      empresa,
      mensagem,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao enviar contato" });
  }
}

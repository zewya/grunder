export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, profile, comment } = req.body;
  if (!name || !phone) return res.status(400).json({ error: 'name and phone required' });

  const token = process.env.TG_TOKEN;
  const chatId = process.env.TG_CHAT;

  if (!token || !chatId) {
    console.error('TG_TOKEN or TG_CHAT not set');
    return res.status(500).json({ error: 'Telegram not configured' });
  }

  const text = [
    '🔔 *Новая заявка — Grunder*',
    `👤 *Имя:* ${name}`,
    `📞 *Телефон:* ${phone}`,
    `🪟 *Профиль:* ${profile || 'не указан'}`,
    `📝 *Комментарий:* ${comment || '—'}`,
  ].join('\n');

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = { chat_id: chatId, text };

    const tgRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error('Telegram error:', err);
      return res.status(500).json({ error: 'Telegram send failed', detail: err });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ error: 'Internal error', detail: err.message });
  }
}

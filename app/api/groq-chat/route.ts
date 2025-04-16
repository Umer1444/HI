import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { apiKey, prompt } = await req.json();
    if (!apiKey || !prompt) {
      return NextResponse.json({ error: 'Missing API key or prompt.' }, { status: 400 });
    }

    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    const data = await groqRes.json();
    if (!groqRes.ok) {
      return NextResponse.json({ error: data.error || 'Groq API error.' }, { status: groqRes.status });
    }
    return NextResponse.json({ response: data.choices?.[0]?.message?.content || '' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

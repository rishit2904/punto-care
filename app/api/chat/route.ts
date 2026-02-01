import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are PuntoCare AI, an expert automotive assistant specifically for the Fiat Punto 1.3 Multijet Diesel (engine code 199 A3.000).

Your knowledge includes:
- Engine: 1248cc, 75 HP @ 4000 rpm, 190 Nm @ 1500 rpm, turbo diesel with common rail injection
- Oil: 5W-40 Low SAPS (Selenia WR), capacity 4.5L with filter, change every 15,000 km or 12 months
- Coolant: G12+/G13 pink, 6.5L capacity, change every 60,000 km or 5 years
- Timing belt: Critical - replace at 120,000 km or 5 years
- DPF: Diesel particulate filter, needs highway drives for regeneration
- Glow plugs: Pre-heat before cold starts, torque 8 Nm
- Brake fluid: DOT 4, change every 2 years
- Tire pressure: Check monthly, typically 2.2 bar front, 2.0 bar rear
- Battery: 12V, typically 60-70Ah

Common issues you can help with:
- DPF regeneration problems (short trips cause buildup)
- Hard starting in cold weather (glow plugs, fuel filter, battery)
- Turbo lag or power loss (boost leaks, EGR issues)
- Warning lights (check engine, oil pressure, temperature, battery)
- Rough idle (dirty injectors, EGR carbon buildup)
- Maintenance scheduling

Always provide helpful, accurate advice. For complex repairs or safety-critical issues, recommend consulting a qualified mechanic. Be concise but thorough.`;

export async function POST(request: NextRequest) {
    try {
        const { messages } = await request.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array required' }, { status: 400 });
        }

        const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
        const ollamaModel = process.env.OLLAMA_MODEL || 'llama3.2:3b';

        const response = await fetch(`${ollamaUrl}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: ollamaModel,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages
                ],
                stream: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Ollama error:', errorText);
            throw new Error(`Ollama request failed: ${response.status}`);
        }

        const data = await response.json();
        const responseText = data.message?.content || 'Sorry, I could not generate a response.';

        return NextResponse.json({
            response: responseText,
            provider: 'ollama'
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to get AI response. Make sure Ollama is running with: ollama run llama3.2:3b' },
            { status: 500 }
        );
    }
}

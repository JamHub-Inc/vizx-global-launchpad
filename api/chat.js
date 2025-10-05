export default async function handler(request, response) {
  // Handle CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('=== VERCEL FUNCTION DEBUG ===');
    console.log('Environment variables check:');
    console.log('OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);
    console.log('OPENAI_API_KEY length:', process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.length : 0);
    console.log('OPENAI_API_KEY starts with:', process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.substring(0, 10) + '...' : 'none');
    
    const { model, messages } = request.body;

    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY is missing from environment variables');
      return response.status(500).json({ 
        error: 'Server configuration error: API key missing' 
      });
    }

    console.log('Making request to OpenAI API...');
    
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model || 'gpt-4',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    console.log('OpenAI response status:', openaiResponse.status);

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('❌ OpenAI API error:', openaiResponse.status, errorText);
      return response.status(openaiResponse.status).json({ 
        error: `OpenAI API error: ${openaiResponse.status}`,
        details: errorText
      });
    }

    const data = await openaiResponse.json();
    console.log('✅ OpenAI response received successfully');
    
    response.status(200).json(data);
  } catch (error) {
    console.error('❌ Server error:', error);
    response.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}
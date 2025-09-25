export default async function handler(request, response) {
  // Handle CORS
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { model, messages } = request.body;

    console.log('Processing OpenAI request...');
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is missing from environment variables');
    }
    
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

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('OpenAI API error:', openaiResponse.status, errorText);
      return response.status(openaiResponse.status).json({ 
        error: `OpenAI API error: ${openaiResponse.status}` 
      });
    }

    const data = await openaiResponse.json();
    console.log('OpenAI response received successfully');
    
    response.status(200).json(data);
  } catch (error) {
    console.error('Server error:', error);
    response.status(500).json({ error: error.message || 'Internal server error' });
  }
}
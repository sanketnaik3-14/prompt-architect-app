// api/ideas.js

// This is a Vercel Serverless Function that connects to Supabase.
// We will use a library to create the Supabase client.
// Note: In a real production app, these keys would be stored in Vercel's
// environment variables for security. For this personal tool, we can place them here.

import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace these with your actual Supabase URL and Key
// Read the Supabase credentials from Vercel's environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(request, response) {
    // Handle GET request to load ideas
    if (request.method === 'GET') {
        const { data, error } = await supabase
            .from('ideas')
            .select('component_key, value');

        if (error) {
            return response.status(500).json({ error: error.message });
        }
        return response.status(200).json(data);
    }

    // Handle POST request to save an idea
    if (request.method === 'POST') {
        const { component_key, value } = request.body;
        if (!component_key || !value) {
            return response.status(400).json({ error: 'Missing component_key or value' });
        }

        // Use 'upsert' to insert the new idea, ignoring it if it's a duplicate
        const { data, error } = await supabase
            .from('ideas')
            .upsert({ component_key, value }, { onConflict: 'component_key, value' })
            .select();

        if (error) {
            return response.status(500).json({ error: error.message });
        }
        return response.status(201).json(data);
    }

    // Handle other methods
    response.setHeader('Allow', ['GET', 'POST']);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
}
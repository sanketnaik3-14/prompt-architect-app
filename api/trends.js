// /api/trends.js

// This is a Vercel Serverless Function to fetch trending news from NewsAPI.
export default async function handler(request, response) {
    // Set CORS headers to allow requests from any origin
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.setHeader('Content-Type', 'application/json');

    try {
        // --- 1. GET THE API KEY (FROM A SECURE LOCATION) ---
        // We will get the API key from Vercel's Environment Variables.
        // This is the most important part for security.
        const apiKey = process.env.NEWS_API_KEY;

        // If the API key is not set up, return an error.
        if (!apiKey) {
            // This error will be visible in the Vercel logs.
            console.error('NewsAPI key is not configured in Environment Variables.');
            return response.status(500).json({ error: 'Server configuration error: API key is missing.' });
        }

        // --- 2. GET PARAMETERS FROM THE FRONTEND ---
        // Get 'category' and 'country' from the URL query (e.g., /api/trends?category=technology&country=us)
        // Provide default values if none are sent.
        const { category = 'general', country = 'us' } = request.query;

        // --- 3. BUILD THE API URL AND FETCH DATA ---
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

        const apiResponse = await fetch(apiUrl);
        const data = await apiResponse.json();

        // Check for errors from the NewsAPI service itself.
        if (data.status === 'error') {
            throw new Error(data.message);
        }

        // --- 4. PROCESS AND RETURN THE DATA ---
        // Extract just the titles from the articles array, as planned.
        const headlines = data.articles.map(article => article.title);

        // Send a successful response back to the frontend.
        response.status(200).json({ headlines });

    } catch (error) {
        // Catch any other errors during the process.
        console.error('Error in /api/trends function:', error);
        response.status(500).json({ error: error.message });
    }
}
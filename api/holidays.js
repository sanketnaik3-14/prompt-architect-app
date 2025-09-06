// /api/holidays.js

// This function fetches public holidays for a given country and year.
export default async function handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-Type', 'application/json');

    try {
        const { countryCode, year } = request.query;
        if (!countryCode || !year) {
            return response.status(400).json({ error: 'Country code and year are required.' });
        }

        // We don't need an API key for this specific Nager.Date endpoint (available countries),
        // but it's good practice to have it set up for other potential calls.

        const apiUrl = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;

        const apiResponse = await fetch(apiUrl);

        if (!apiResponse.ok) {
            // If the API returns a 404, it likely means no holidays were found, which is not a server error.
            if (apiResponse.status === 404) {
                return response.status(200).json([]); // Return an empty array
            }
            throw new Error(`Nager API request failed with status: ${apiResponse.status}`);
        }

        const data = await apiResponse.json();

        // We only need the names of the holidays for our purpose.
        const holidayNames = data.map(holiday => holiday.name);

        response.status(200).json(holidayNames);

    } catch (error) {
        console.error('Error in /api/holidays function:', error);
        response.status(500).json({ error: error.message });
    }
}
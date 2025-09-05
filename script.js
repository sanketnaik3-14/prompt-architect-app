// --- DATABASE ---
const stylesData = {
    "databaseInfo": { "name": "Unified Design & Prompt Framework", "version": "5.0-expanded" },
    "masterFramework": {
        "subject": [
            { "categoryName": "Pop Culture & Fandom", "novelty_tier": 1, "examples": ["Movies and TV shows", "Music and bands", "Video games", "Memes and internet slang", "Anime characters", "Comic book heroes", "Parody of Iconic Album Art", "Subtle 'in-joke' references for gamers", "Iconic Sci-Fi Movie Posters", "8-bit Video Game Sprites", "Lyrics from a Cult Classic Song", "Vintage Wrestling Logos"] },
            { "categoryName": "Nature & Animals", "novelty_tier": 1, "examples": ["Wolves", "Lions", "Koi Fish", "Octopuses", "Pets", "Plants and florals", "Astronomy and space", "Wildlife illustrations", "Animal puns", "Dinosaurs", "Ancient Bonsai Tree", "Bioluminescent Fungi", "Anatomical Heart with Flowers", "Deep Sea Creatures", "Cross-section of a Geode"] },
            { "categoryName": "Humor & Fun", "novelty_tier": 1, "examples": ["Sarcastic jokes and puns", "Cute and doodle art", "Humorous takes on traditions", "Irony", "Food-related humor", "Witty One-Liners", "Visual Puns", "Dad Jokes (visualized)", "Anti-motivational Quotes", "Absurdist Diagrams", "Animals Doing Human Jobs"] },
            { "categoryName": "Hobby & Lifestyle", "novelty_tier": 1, "examples": ["Gaming", "Reading", "Cooking and food", "Sports and fitness", "Travel and geography", "Petrolhead (cars and mechanics)", "Photography", "Camping", "Astrology and wellness", "Spirituality", "Vintage Board Game Aesthetics", "Urban Gardening", "Coffee Brewing Schematics", "DnD Character Sheet Parody"] },
            { "categoryName": "Identity & Beliefs", "novelty_tier": 2, "examples": ["Activism and causes", "Inspirational quotes", "Occupation and professional pride", "LGBTQ+ symbols", "Religious and spiritual themes (e.g., Christian streetwear)", "Self-care and mental wellness", "Philosophical Concepts (e.g., Stoicism)", "Zodiac Constellations", "Family Crest Parody"] },
            { "categoryName": "Technology & The Future", "novelty_tier": 2, "examples": ["Vintage Film Camera", "Retro Gaming Controller", "Steampunk Goggles", "Cassette Tape", "Robots and AI Companions", "Diagrams of Fictional Spacecraft", "Solarpunk Cityscapes", "Schematics of a Vintage Synthesizer", "Glitching CRT Television", "Cybernetic Augmentations"] },
            { "categoryName": "Mythology & The Esoteric", "novelty_tier": 2, "examples": ["Mythological Figures (Medusa, Anubis)", "Legendary Creatures (Phoenix, Hydra)", "Tarot Cards & Esoterica", "Alchemical Diagrams", "Egyptian Ankh", "The Zodiac", "Norse Runes & Bindrunes", "Slavic Folklore Creatures (Baba Yaga)", "Ouroboros"] },
            { "categoryName": "Cultural Streetwear Motifs", "novelty_tier": 2, "examples": ["Western Hip-Hop iconography", "Japanese 'monozukuri' craftsmanship details", "Korean K-Pop idol-inspired graphics", "Skate culture references", "Graffiti tag style", "Bandana Paisley Patterns", "Gothic Blackletter Typography", "Vintage Biker Club Patches"] },
            { "categoryName": "Conceptual & Highly Abstract", "novelty_tier": 3, "examples": ["Impossible Objects (Penrose Triangle)", "The Physical Form of a Feeling", "The Dreams of Artificial Intelligence", "The Blueprint of a Ghost", "Emotional Weather Maps", "Diagrams of Knot Theory", "The Architecture of a Dream", "A Map of a Non-existent City", "The Texture of a Sound"] },
            { "categoryName": "Hyper-Experimental Concepts", "novelty_tier": 4, "examples": ["The Visual Representation of a Forgotten Memory", "Chrono-biomes: Ecosystems from different eras merged", "Sentient Geometric Shapes Interacting with the Real World", "The Sound of a Color, Visualized", "The Periodic Table of Emotions", "A Library of Unwritten Books", "The Smell of Rain (Petrichor) as a Character", "The Last Thing a Black Hole Sees", "A Self-Portrait Drawn by an Algorithm in Love", "The Genealogy of an Idea"] }
        ],
        "style": [
            { "name": "Cartoon / Comic Book", "novelty_tier": 1 }, { "name": "Cute / Kawaii", "novelty_tier": 1 }, { "name": "Geometric", "novelty_tier": 1 }, { "name": "Hand Lettering", "novelty_tier": 1 }, { "name": "Line Art", "novelty_tier": 1 }, { "name": "Minimalist", "novelty_tier": 1 }, { "name": "Minimalist Text", "novelty_tier": 1 }, { "name": "Negative Space", "novelty_tier": 1 }, { "name": "Pop Art", "novelty_tier": 1 }, { "name": "Single Line Art (One-Line)", "novelty_tier": 1 }, { "name": "Sketch / Doodle", "novelty_tier": 1 }, { "name": "Typographic Portrait", "novelty_tier": 1 }, { "name": "80s Retro", "novelty_tier": 2 }, { "name": "90s Nostalgia", "novelty_tier": 2 }, { "name": "Abstract", "novelty_tier": 2 }, { "name": "Anime / Manga", "novelty_tier": 2 }, { "name": "Art Deco", "novelty_tier": 2 }, { "name": "Art Nouveau", "novelty_tier": 2 }, { "name": "Blueprint Style", "novelty_tier": 2 }, { "name": "Brutalism (Web Design Inspired)", "novelty_tier": 2 }, { "name": "Celtic Knotwork", "novelty_tier": 2 }, { "name": "Collage", "novelty_tier": 2 }, { "name": "Cottagecore", "novelty_tier": 2 }, { "name": "Cyberpunk", "novelty_tier": 2 }, { "name": "Dark Academia", "novelty_tier": 2 }, { "name": "Engraving / Etching Style", "novelty_tier": 2 }, { "name": "Frutiger Aero (2000s Glossy Aesthetic)", "novelty_tier": 2 }, { "name": "Infographic Style", "novelty_tier": 2 }, { "name": "Isometric", "novelty_tier": 2 }, { "name": "Japanese Ukiyo-e", "novelty_tier": 2 }, { "name": "Korean Pop-Art / Clean Aesthetic", "novelty_tier": 2 }, { "name": "Low Poly", "novelty_tier": 2 }, { "name": "Mandala / Zentangle", "novelty_tier": 2 }, { "name": "Mexican Lotería Card Art", "novelty_tier": 2 }, { "name": "Modern Manga Screen Tones", "novelty_tier": 2 }, { "name": "Patent Drawing Style", "novelty_tier": 2 }, { "name": "Psychedelic", "novelty_tier": 2 }, { "name": "Quiet Luxury / Understated Elegance", "novelty_tier": 2 }, { "name": "Silhouette", "novelty_tier": 2 }, { "name": "Slavic Folk Art (Wycinanki)", "novelty_tier": 2 }, { "name": "Steampunk", "novelty_tier": 2 }, { "name": "Surreal", "novelty_tier": 2 }, { "name": "Technical Cutaway", "novelty_tier": 2 }, { "name": "Vaporwave", "novelty_tier": 2 }, { "name": "Watercolor", "novelty_tier": 2 }, { "name": "Western Graffiti Street-Art", "novelty_tier": 2 }, { "name": "Woodcut / Linocut Style", "novelty_tier": 2 }, { "name": "Y2K Revival / Early Internet Aesthetic", "novelty_tier": 2 }, { "name": "Bio-Mechanical (Gigeresque)", "novelty_tier": 3 }, { "name": "Data Moshing / Databending", "novelty_tier": 3 }, { "name": "De Stijl / Mondrian", "novelty_tier": 3 }, { "name": "Glitch Art", "novelty_tier": 3 }, { "name": "Japanese Avant-Garde", "novelty_tier": 3 }, { "name": "Liminal Space Aesthetics", "novelty_tier": 3 }, { "name": "Post-Internet Art", "novelty_tier": 3 }, { "name": "Retro-Futurism", "novelty_tier": 3 }, { "name": "Solarpunk", "novelty_tier": 3 }, { "name": "Vedic Futurism", "novelty_tier": 3 }
        ],
        "emotionTone": [
            { "name": "Aggressive / Fierce", "novelty_tier": 1 }, { "name": "Cute / Kawaii", "novelty_tier": 1 }, { "name": "Hopeful / Optimistic", "novelty_tier": 1 }, { "name": "Humorous / Funny", "novelty_tier": 1 }, { "name": "Inspirational / Motivational", "novelty_tier": 1 }, { "name": "Nostalgic / Retro", "novelty_tier": 1 }, { "name": "Playful / Quirky", "novelty_tier": 1 }, { "name": "Sarcasm", "novelty_tier": 1 }, { "name": "Serene / Tranquil / Zen", "novelty_tier": 1 }, { "name": "Wholesome & Heartwarming", "novelty_tier": 1 }, { "name": "Absurdist / Nonsensical", "novelty_tier": 2 }, { "name": "Anxious / Tense", "novelty_tier": 2 }, { "name": "Boho / Bohemian", "novelty_tier": 2 }, { "name": "Clinical / Sterile", "novelty_tier": 2 }, { "name": "Cozy / Comforting", "novelty_tier": 2 }, { "name": "Dreamlike / Oneiric", "novelty_tier": 2 }, { "name": "Dry Wit / Deadpan", "novelty_tier": 2 }, { "name": "Edgy / Provocative", "novelty_tier": 2 }, { "name": "Energetic / Dynamic / Vibrant", "novelty_tier": 2 }, { "name": "Gothic / Dark", "novelty_tier": 2 }, { "name": "Heroic / Epic", "novelty_tier": 2 }, { "name": "Melancholic / Wistful", "novelty_tier": 2 }, { "name": "Mysterious / Enigmatic", "novelty_tier": 2 }, { "name": "Rage / Defiance", "novelty_tier": 2 }, { "name": "Self-Deprecating Humor", "novelty_tier": 2 }, { "name": "Streetwear / Urban", "novelty_tier": 2 }, { "name": "Witty Observations", "novelty_tier": 2 }, { "name": "Anticipatory Stillness", "novelty_tier": 3 }, { "name": "Cathartic Release", "novelty_tier": 3 }, { "name": "Cosmic Horror", "novelty_tier": 3 }, { "name": "Defiant Optimism", "novelty_tier": 3 }, { "name": "Electric Tension", "novelty_tier": 3 }, { "name": "Ethereal / Ghostly", "novelty_tier": 3 }, { "name": "Existential Dread", "novelty_tier": 3 }, { "name": "Joyful Exuberance", "novelty_tier": 3 }, { "name": "Manic / Unhinged", "novelty_tier": 3 }, { "name": "Quiet Contemplation", "novelty_tier": 3 }, { "name": "Reverential Awe", "novelty_tier": 3 }, { "name": "Sublime (Terror & Beauty)", "novelty_tier": 3 }, { "name": "Uncanny Valley", "novelty_tier": 3 }
        ],
        "mediumMateriality": [
            { "name": "Cast Concrete", "novelty_tier": 1 }, { "name": "Geode and Agate Slice", "novelty_tier": 1 }, { "name": "Gold Leaf / Gilded", "novelty_tier": 1 }, { "name": "Handmade Recycled Paper", "novelty_tier": 1 }, { "name": "Paper Cut-out Style", "novelty_tier": 1 }, { "name": "Polished Dark Wood Grain", "novelty_tier": 1 }, { "name": "Pressed & Dried Flowers", "novelty_tier": 1 }, { "name": "Rough Burlap / Canvas", "novelty_tier": 1 }, { "name": "Rusted Metal", "novelty_tier": 1 }, { "name": "Stained Glass", "novelty_tier": 1 }, { "name": "Worn Denim", "novelty_tier": 1 }, { "name": "Anodized Titanium / Oil Slick", "novelty_tier": 2 }, { "name": "Chainmail / Woven Metal", "novelty_tier": 2 }, { "name": "Cosmic Nebula Gas Texture", "novelty_tier": 2 }, { "name": "Cracked Earth / Kintsugi Veins", "novelty_tier": 2 }, { "name": "Cracked Lacquer (Craquelure)", "novelty_tier": 2 }, { "name": "Embroidery / Cross-Stitch Effect", "novelty_tier": 2 }, { "name": "Glitch Art Effect", "novelty_tier": 2 }, { "name": "Holographic / Iridescent Effect", "novelty_tier": 2 }, { "name": "Liquid Amber / Resin with Inclusions", "novelty_tier": 2 }, { "name": "Liquid Metal / Chrome Effect", "novelty_tier": 2 }, { "name": "Neon Glow Effect", "novelty_tier": 2 }, { "name": "Patina Effect (Verdigris)", "novelty_tier": 2 }, { "name": "Poured Paint / Fluid Art", "novelty_tier": 2 }, { "name": "Risograph Print Effect", "novelty_tier": 2 }, { "name": "Aerogel", "novelty_tier": 3 }, { "name": "Bismuth Hopper Crystal", "novelty_tier": 3 }, { "name": "Crystallized Data", "novelty_tier": 3 }, { "name": "Ferrofluid Simulation", "novelty_tier": 3 }, { "name": "Glitching Reality Fabric", "novelty_tier": 3 }, { "name": "Liquid Light / Solidified Sunlight", "novelty_tier": 3 }, { "name": "Living Obsidian / Volcanic Glass", "novelty_tier": 3 }, { "name": "Quantum Foam", "novelty_tier": 3 }, { "name": "Sentient Ink", "novelty_tier": 3 }, { "name": "Solidified Smoke", "novelty_tier": 3 }, { "name": "Spun Light Effect", "novelty_tier": 3 }, { "name": "Woven Nebula Filaments", "novelty_tier": 3 }
        ],
        "actionProcess": [
            { "name": "Fragmented / Deconstructed", "novelty_tier": 1 }, { "name": "Outlining / Inverting", "novelty_tier": 1 }, { "name": "Repeating / Patterning", "novelty_tier": 1 }, { "name": "Simulating Distressed Textures", "novelty_tier": 1 }, { "name": "Simulating Neon Glow", "novelty_tier": 1 }, { "name": "Stacking / Layering", "novelty_tier": 1 }, { "name": "Using Implied Motion (Dynamic Composition)", "novelty_tier": 1 }, { "name": "Creating a Glitch Effect (Digital Deconstruction)", "novelty_tier": 2 }, { "name": "Eroding / Weathering", "novelty_tier": 2 }, { "name": "Illuminating from Within", "novelty_tier": 2 }, { "name": "Melting / Dripping", "novelty_tier": 2 }, { "name": "Overgrowing with Flora", "novelty_tier": 2 }, { "name": "Shattering / Exploding", "novelty_tier": 2 }, { "name": "Simulating Decay & Patina", "novelty_tier": 2 }, { "name": "Simulating Fluid Art (Digital Pouring)", "novelty_tier": 2 }, { "name": "Simulating Holographic & Iridescent Effects", "novelty_tier": 2 }, { "name": "Synthesizing (Two subjects merging)", "novelty_tier": 2 }, { "name": "Tessellating (Repeating and interlocking)", "novelty_tier": 2 }, { "name": "Unravelling / Fraying", "novelty_tier": 2 }, { "name": "Becoming Self-Aware", "novelty_tier": 3 }, { "name": "De-rezzing into Pixels", "novelty_tier": 3 }, { "name": "Encoding into Data", "novelty_tier": 3 }, { "name": "Folding into Origami", "novelty_tier": 3 }, { "name": "Leaking into Another Dimension", "novelty_tier": 3 }, { "name": "Lyrical Decay (Dissolving into music or text)", "novelty_tier": 3 }, { "name": "Mycelial Network Growth", "novelty_tier": 3 }, { "name": "Petrifying (Turning into crystal)", "novelty_tier": 3 }, { "name": "Phase-shifting between States", "novelty_tier": 3 }
        ],
        "contextComposition": [
            { "name": "All-Over Print", "novelty_tier": 1 }, { "name": "Centered / Iconic Layout", "novelty_tier": 1 }, { "name": "Contained / Framed Design", "novelty_tier": 1 }, { "name": "Grid Layout", "novelty_tier": 1 }, { "name": "Instructional Diagram Style", "novelty_tier": 1 }, { "name": "Symmetrical Layout", "novelty_tier": 1 }, { "name": "Anatomical Chart", "novelty_tier": 2 }, { "name": "Asymmetrical Layout", "novelty_tier": 2 }, { "name": "Blueprint Schematics", "novelty_tier": 2 }, { "name": "Book Cover / Movie Poster Parody", "novelty_tier": 2 }, { "name": "Field Guide / Scientific Illustration Page", "novelty_tier": 2 }, { "name": "Isometric Illustration", "novelty_tier": 2 }, { "name": "Tarot Card / Playing Card Layout", "novelty_tier": 2 }, { "name": "Technical Cutaway", "novelty_tier": 2 }, { "name": "Vintage Postage Stamp", "novelty_tier": 2 }, { "name": "Warning Label / Nutritional Info Parody", "novelty_tier": 2 }, { "name": "Compound Eye Vision", "novelty_tier": 3 }, { "name": "Electron Microscope View", "novelty_tier": 3 }, { "name": "Kirlian Photography (Aura View)", "novelty_tier": 3 }, { "name": "Lidar Scan / Point Cloud", "novelty_tier": 3 }, { "name": "Schlieren Photography (Heat/Airflow View)", "novelty_tier": 3 }, { "name": "Security Camera / CCTV Footage", "novelty_tier": 3 }, { "name": "Sonic Shattering Composition", "novelty_tier": 3 }, { "name": "Sonogram / Oscilloscope Display", "novelty_tier": 3 }, { "name": "Thermal / Infrared Vision", "novelty_tier": 3 }, { "name": "Through a Broken Lens", "novelty_tier": 3 }, { "name": "X-Ray / Radiograph View", "novelty_tier": 3 }
        ],
        "conceptualMetaphorical": [
            { "name": "The Comfort of Nostalgia", "novelty_tier": 1 }, { "name": "The Joy of a Simple Pleasure", "novelty_tier": 1 }, { "name": "The Quiet Beauty of Routine", "novelty_tier": 1 }, { "name": "The Spirit of Competition", "novelty_tier": 1 }, { "name": "A Tribute to a Mentor", "novelty_tier": 1 }, { "name": "A design promoting social empathy", "novelty_tier": 2 }, { "name": "A visual metaphor for 'Burnout'", "novelty_tier": 2 }, { "name": "A visual representation of sustainable living", "novelty_tier": 2 }, { "name": "A visualization of 'self-love'", "novelty_tier": 2 }, { "name": "The Anatomy of a 'Good Idea'", "novelty_tier": 2 }, { "name": "The Beauty of Impermanence (Wabi-Sabi)", "novelty_tier": 2 }, { "name": "The Bittersweetness of Outgrowing Something", "novelty_tier": 2 }, { "name": "The feeling of 'Sonder' (realizing others' complex lives)", "novelty_tier": 2 }, { "name": "The feeling of healing, visualized", "novelty_tier": 2 }, { "name": "The Friction Between Digital and Physical Life", "novelty_tier": 2 }, { "name": "Imposter Syndrome Visualized", "novelty_tier": 2 }, { "name": "Kintsugi Aesthetic (Golden Repair)", "novelty_tier": 2 }, { "name": "Synesthesia-Inspired (Seeing Sounds)", "novelty_tier": 2 }, { "name": "Visualizing the 'Flow State'", "novelty_tier": 2 }, { "name": "An Abstract Visualization of Pure Emotion", "novelty_tier": 3 }, { "name": "A Diagram of a Social Construct", "novelty_tier": 3 }, { "name": "A Map of a Personal Boundary", "novelty_tier": 3 }, { "name": "The Embodiment of a Paradox", "novelty_tier": 3 }, { "name": "The Nature of a 'White Lie'", "novelty_tier": 3 }, { "name": "The Ship of Theseus Paradox", "novelty_tier": 3 }, { "name": "Visualizing a Déjà Vu Loop", "novelty_tier": 3 }, { "name": "Visualizing the 'Adjacent Possible'", "novelty_tier": 3 }
        ],
        "graphicEffects": [
            { "name": "Drop Shadow", "novelty_tier": 1 }, { "name": "Film Grain / Noise", "novelty_tier": 1 }, { "name": "Long Shadow (Flat Style)", "novelty_tier": 1 }, { "name": "Sticker Outline", "novelty_tier": 1 }, { "name": "Vignette", "novelty_tier": 1 }, { "name": "Anaglyph 3D", "novelty_tier": 2 }, { "name": "Color Halftone", "novelty_tier": 2 }, { "name": "Double Exposure", "novelty_tier": 2 }, { "name": "Duotone", "novelty_tier": 2 }, { "name": "Glassmorphism", "novelty_tier": 2 }, { "name": "Glow (Outer / Inner)", "novelty_tier": 2 }, { "name": "Gradient Map / Overlay", "novelty_tier": 2 }, { "name": "Grunge Texture", "novelty_tier": 2 }, { "name": "Ink Bleed / Smudge", "novelty_tier": 2 }, { "name": "Lens Distortion / Fisheye Effect", "novelty_tier": 2 }, { "name": "Neon Glow", "novelty_tier": 2 }, { "name": "Scan Lines / CRT Effect", "novelty_tier": 2 }, { "name": "Chromatic Aberration", "novelty_tier": 3 }, { "name": "Displacement Map Effect", "novelty_tier": 3 }, { "name": "Dispersion / Shatter", "novelty_tier": 3 }, { "name": "Fractal Noise", "novelty_tier": 3 }, { "name": "Generative Fill (AI)", "novelty_tier": 3 }, { "name": "Inversion / X-Ray Effect", "novelty_tier": 3 }, { "name": "Pixel Sorting", "novelty_tier": 3 }
        ],
        "creativeConstraints": [
            { "name": "Use only two colors: black and one accent color." }, { "name": "The design must contain no text whatsoever." }, { "name": "The entire design must fit inside a perfect circle." }, { "name": "The subject must be shown in a completely unexpected context." }, { "name": "Create the design using only typography and geometric shapes." }, { "name": "The design's emotion must contradict its subject." }, { "name": "Use a symmetrical layout for a subject that is naturally asymmetrical." }, { "name": "The design must use a serif font for all text.", "novelty_tier": 1 }, { "name": "Use a triadic color scheme.", "novelty_tier": 2 }, { "name": "The design must be heavily off-center and unbalanced.", "novelty_tier": 2 }, { "name": "The design must tell a story in three distinct parts (triptych).", "novelty_tier": 2 }, { "name": "The design must look like it's made of a single, uniform material.", "novelty_tier": 2 }
        ],
        "designerPersonas": [
            { "name": "Master Ink Illustrator", "category": "By Medium/Technique" }, { "name": "Seasoned Comic Book Artist", "category": "By Medium/Technique" }, { "name": "Expert Woodcut Printmaker", "category": "By Medium/Technique" }, { "name": "Professional Airbrush Artist", "category": "By Medium/Technique" }, { "name": "Modern Calligrapher", "category": "By Medium/Technique" }, { "name": "Zine Maker with a DIY Punk Aesthetic", "category": "By Medium/Technique" }, { "name": "Technical Illustrator for Manuals", "category": "By Medium/Technique" }, { "name": "RISOGRAPH Print Specialist", "category": "By Medium/Technique" }, { "name": "70s Psychedelic Rock Poster Artist", "category": "By Style/Genre/Era" }, { "name": "Minimalist Swiss Designer", "category": "By Style/Genre/Era" }, { "name": "90s Rave Flyer Designer", "category": "By Style/Genre/Era" }, { "name": "Tokyo Streetwear Designer", "category": "By Style/Genre/Era" }, { "name": "Fantasy TTRPG Illustrator", "category": "By Style/Genre/Era" }, { "name": "Bauhaus Instructor", "category": "By Style/Genre/Era" }, { "name": "Art Nouveau Illustrator like Alphonse Mucha", "category": "By Style/Genre/Era" }, { "name": "Soviet Constructivist Poster Artist", "category": "By Style/Genre/Era" }, { "name": "Art Director for a Vaporwave Music Label", "category": "By Style/Genre/Era" }, { "name": "Concept Artist for a Dark Fantasy Soulslike Game", "category": "By Style/Genre/Era" }, { "name": "Successful Dropshipping Seller", "category": "By Commercial Role" }, { "name": "Luxury Fashion Brand Director", "category": "By Commercial Role" }, { "name": "Gritty Skate Company Illustrator", "category": "By Commercial Role" }, { "name": "Children's Book Illustrator", "category": "By Commercial Role" }, { "name": "Tour Merch Designer for a Metal Band", "category": "By Commercial Role" }, { "name": "Brand Designer for a Craft Brewery", "category": "By Commercial Role" }, { "name": "Mascot Designer for a Sports Team", "category": "By Commercial Role" }, { "name": "Infographic Designer for a Science Magazine", "category": "By Commercial Role" }, { "name": "Creative Director for a National Park Service", "category": "By Commercial Role" },
            { "name": "A 5-year-old child with a big box of crayons", "category": "By Artist's State & Tool" }, { "name": "A student doodling with a ballpoint pen in their notebook", "category": "By Artist's State & Tool" }, { "name": "A street artist using a spray paint can and stencils", "category": "By Artist's State & Tool" }, { "name": "A master calligrapher practicing with a brush pen", "category": "By Artist's State & Tool" }, { "name": "An architect drafting with a technical pencil", "category": "By Artist's State & Tool" }, { "name": "A medieval monk illuminating a manuscript with gold leaf", "category": "By Artist's State & Tool" }, { "name": "An exhausted artist frantically sketching in charcoal", "category": "By Artist's State & Tool" }, { "name": "A rogue AI developing its first sense of artistic style", "category": "By Artist's State & Tool" }
        ]
    }
};

// --- SUPABASE SETUP ---
// We are importing the Supabase library directly into the browser
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// IMPORTANT: Replace these with your actual Supabase URL and Key
const supabaseUrl = 'https://qvdtjaydpvemgpyplwei.supabase.co';
const supabaseKey = 'sb_publishable_ZkEZc0rBKg5B0i-1_Lkt6w_d5hRrZBQ';
const supabase = createClient(supabaseUrl, supabaseKey);

// --- DOM ELEMENTS ---
const generateBtn = document.getElementById('generateBtn');
const assembleBtn = document.getElementById('assembleBtn');
const seedInput = document.getElementById('seed');
const architectureSelect = document.getElementById('architecture');
const noveltySelect = document.getElementById('novelty');
const modifierSelect = document.getElementById('modifier');
const outputDiv = document.getElementById('output');
const pillsContainer = document.getElementById('pillsContainer');
const outputContentArea = document.getElementById('outputContentArea');
const formatBtns = document.querySelectorAll('.format-btn');
const briefPre = document.getElementById('brief');
const copyBtn = document.getElementById('copyBtn');
const inspirationModeContainer = document.getElementById('inspirationModeContainer');
const creationModeContainer = document.getElementById('creationModeContainer');
const constraintBtn = document.getElementById('constraintBtn');
const constraintOutput = document.getElementById('constraintOutput');

// --- STATE ---
let currentSeed = null;
let currentConstraint = null;
let lockedComponents = {};
let currentComponents = {};
let currentFormat = 'brief';
let currentMode = 'inspiration';

// --- HELPER FUNCTIONS ---
function mulberry32(a) {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function getRandomElement(arr, randomFunc) {
    if (!arr || arr.length === 0) return { name: 'N/A', novelty_tier: 'N/A' };
    return arr[Math.floor(randomFunc() * arr.length)];
}

const keyToDisplayName = {
    designerPersonas: 'Designer Persona',
    subject: 'Subject', subject_2: 'Subject 2',
    style: 'Style', style_2: 'Style 2',
    emotionTone: 'Emotion/Tone',
    mediumMateriality: 'Materiality',
    actionProcess: 'Process',
    contextComposition: 'Composition',
    conceptualMetaphorical: 'Concept',
    graphicEffects: 'Graphic Effect',
    creativeConstraints: 'Creative Constraint'
};

// --- EVENT LISTENERS ---

const modeSwitcher = document.getElementById('modeSwitcher');
if (modeSwitcher) {
    modeSwitcher.addEventListener('click', (e) => {
        const button = e.target.closest('.mode-btn');
        if (!button) return;

        document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        currentMode = button.dataset.mode;

        inspirationModeContainer.classList.add('hidden');
        creationModeContainer.classList.add('hidden');
        fusionModeContainer.classList.add('hidden');

        if (currentMode === 'inspiration') {
            inspirationModeContainer.classList.remove('hidden');
        } else if (currentMode === 'creation') {
            creationModeContainer.classList.remove('hidden');
        } else if (currentMode === 'fusion') {
            fusionModeContainer.classList.remove('hidden');
        }
    });
}


assembleBtn.addEventListener('click', generateBrief);

// EVENT LISTENER FOR THE CUSTOM INPUT PENCIL BUTTONS
creationModeContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.custom-toggle-btn');
    if (!button) return;

    const component = button.dataset.component;
    const selectEl = document.getElementById(`manual${component}`);
    const inputEl = document.getElementById(`custom${component}`);

    if (selectEl && inputEl) {
        selectEl.classList.toggle('hidden');
        inputEl.classList.toggle('hidden');
    }
});

// Add listener for the new fusion assemble button
const fusionAssembleBtn = document.getElementById('fusionAssembleBtn');
if (fusionAssembleBtn) {
    fusionAssembleBtn.addEventListener('click', generateBrief);
}


creationModeContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.custom-toggle-btn');
    if (!button) return;

    const component = button.dataset.component;
    const selectEl = document.getElementById(`manual${component}`);
    const inputEl = document.getElementById(`custom${component}`);

    selectEl.classList.toggle('hidden');
    inputEl.classList.toggle('hidden');
});

constraintBtn.addEventListener('click', () => {
    const constraints = stylesData.masterFramework.creativeConstraints;
    if (constraints && constraints.length > 0) {
        const randomFunc = Math.random;
        const selectedConstraint = constraints[Math.floor(randomFunc() * constraints.length)];
        currentConstraint = selectedConstraint.name;

        constraintOutput.innerHTML = `<strong>Constraint:</strong> ${currentConstraint}`;
        updateOutputContent();
    }
});

generateBtn.addEventListener('click', generateBrief);

pillsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.lock-btn');
    if (button) {
        const key = button.dataset.key;
        lockedComponents[key] = !lockedComponents[key];
        renderPills();
    }
});

formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formatBtns.forEach(b => b.classList.remove('active', 'text-white', 'border-indigo-500'));
        btn.classList.add('active', 'text-white', 'border-indigo-500');
        currentFormat = btn.dataset.format;
        updateOutputContent();
    });
});

copyBtn.addEventListener('click', () => {
    const textToCopy = briefPre.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    }, (err) => {
        console.error('Async: Could not copy text: ', err);
        copyBtn.textContent = 'Error';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    });
});

// --- EVENT LISTENERS --

assembleBtn.addEventListener('click', generateBrief);

creationModeContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.custom-toggle-btn');
    if (!button) return;
    const component = button.dataset.component;
    const selectEl = document.getElementById(`manual${component}`);
    const inputEl = document.getElementById(`custom${component}`);
    selectEl.classList.toggle('hidden');
    inputEl.classList.toggle('hidden');
});

constraintBtn.addEventListener('click', () => {
    const constraints = stylesData.masterFramework.creativeConstraints;
    if (constraints && constraints.length > 0) {
        const randomFunc = Math.random;
        const selectedConstraint = constraints[Math.floor(randomFunc() * constraints.length)];
        currentConstraint = selectedConstraint.name;
        constraintOutput.innerHTML = `<strong>Constraint:</strong> ${currentConstraint}`;
        updateOutputContent();
    }
});

generateBtn.addEventListener('click', generateBrief);

pillsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.lock-btn');
    if (button) {
        const key = button.dataset.key;
        lockedComponents[key] = !lockedComponents[key];
        renderPills();
    }
});

formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formatBtns.forEach(b => b.classList.remove('active', 'text-white', 'border-indigo-500'));
        btn.classList.add('active', 'text-white', 'border-indigo-500');
        currentFormat = btn.dataset.format;
        updateOutputContent();
    });
});

copyBtn.addEventListener('click', () => {
    const textToCopy = briefPre.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    }, (err) => {
        console.error('Async: Could not copy text: ', err);
        copyBtn.textContent = 'Error';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
    });
});

// --- CORE FUNCTIONS ---
async function populateCreationDropdowns() {
    let savedIdeas = {};
    try {
        const { data: ideas, error } = await supabase.from('ideas').select('component_key, value');
        if (error) throw error;
        if (ideas) {
            ideas.forEach(idea => {
                if (!savedIdeas[idea.component_key]) { savedIdeas[idea.component_key] = []; }
                savedIdeas[idea.component_key].push(idea.value);
            });
        }
    } catch (error) {
        console.warn("Could not fetch ideas from Supabase:", error.message);
    }

    for (const key in stylesData.masterFramework) {
        if (key === 'designerPersonas') continue;
        const selectElement = document.getElementById(`manual${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (selectElement) {
            selectElement.innerHTML = '<option value="">-- Optional --</option>';
            if (savedIdeas[key] && savedIdeas[key].length > 0) {
                const savedOptgroup = document.createElement('optgroup');
                savedOptgroup.label = "--- Your Saved Ideas ---";
                savedIdeas[key].forEach(value => {
                    const option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    savedOptgroup.appendChild(option);
                });
                selectElement.appendChild(savedOptgroup);
            }
            if (key === 'subject') {
                stylesData.masterFramework[key].forEach(category => {
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = `--- ${category.categoryName} ---`;
                    category.examples.forEach(example => {
                        const option = document.createElement('option');
                        option.value = example;
                        option.textContent = example;
                        optgroup.appendChild(option);
                    });
                    selectElement.appendChild(optgroup);
                });
            } else {
                const premadeOptgroup = document.createElement('optgroup');
                premadeOptgroup.label = "--- Premade Ideas ---";
                stylesData.masterFramework[key].forEach(item => {
                    const option = document.createElement('option');
                    option.value = item.name;
                    option.textContent = item.name;
                    premadeOptgroup.appendChild(option);
                });
                selectElement.appendChild(premadeOptgroup);
            }
        }
    }

    const manualModifierSelect = document.getElementById('manualModifier');
    const inspirationModifierSelect = document.getElementById('modifier');
    manualModifierSelect.innerHTML = inspirationModifierSelect.innerHTML;

    const manualPersonaSelect = document.getElementById('manualDesignerPersonas');
    if (manualPersonaSelect) {
        const personas = stylesData.masterFramework.designerPersonas;
        manualPersonaSelect.innerHTML = '<option value="">-- Optional --</option>';
        const categories = {};
        personas.forEach(persona => {
            if (!categories[persona.category]) { categories[persona.category] = []; }
            categories[persona.category].push(persona.name);
        });
        for (const category in categories) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = `--- ${category} ---`;
            categories[category].forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                optgroup.appendChild(option);
            });
            manualPersonaSelect.appendChild(optgroup);
        }
    }
}

async function generateBrief() {
    const newComponents = {};
    if (currentMode === 'inspiration') {
        const seedValue = seedInput.value.trim();
        currentSeed = seedValue === '' ? Math.floor(Math.random() * 1000000) : parseInt(seedValue, 10);
        if (isNaN(currentSeed)) {
            currentSeed = Math.floor(Math.random() * 1000000);
        }
        seedInput.value = currentSeed;
        const randomFunc = mulberry32(currentSeed);
        const architecture = architectureSelect.value;
        const novelty = noveltySelect.value;
        const modifier = modifierSelect.value;
        const filteredFramework = {};
        if (novelty === 'chaos') {
            Object.assign(filteredFramework, stylesData.masterFramework);
        } else {
            const tierMap = { classic: [1], creative: [2], experimental: [3, 4], balanced: [1, 2, 3, 4] };
            const allowedTiers = tierMap[novelty];
            const filterByTier = (arr) => arr.filter(item => 'novelty_tier' in item && allowedTiers.includes(item.novelty_tier));
            for (const key in stylesData.masterFramework) {
                if (key === 'creativeConstraints' || key === 'designerPersonas') {
                    filteredFramework[key] = stylesData.masterFramework[key];
                } else {
                    filteredFramework[key] = filterByTier(stylesData.masterFramework[key]);
                }
            }
        }
        let componentKeys = [];
        if (modifier !== 'none') {
            switch (modifier) {
                case 'narrative-badge': componentKeys = ['subject', 'style', 'conceptualMetaphorical', 'contextComposition']; break;
                case 'dynamic-layout': componentKeys = ['subject', 'style', 'emotionTone', 'actionProcess', 'contextComposition']; break;
                case 'typographic-play': componentKeys = ['subject', 'style', 'emotionTone', 'conceptualMetaphorical']; break;
                case 'expressive-collage': componentKeys = ['subject', 'style', 'conceptualMetaphorical', 'actionProcess']; break;
                case 'hybrid-asset-collage': componentKeys = ['subject', 'subject', 'style', 'graphicEffects']; break;
                case 'symbiotic-fusion': componentKeys = ['subject', 'subject', 'style', 'emotionTone']; break;
                case 'multi-style-fusion': componentKeys = ['subject', 'style', 'style', 'emotionTone', 'conceptualMetaphorical']; break;
                case 'thematic-clash': componentKeys = ['subject', 'subject', 'style', 'actionProcess', 'conceptualMetaphorical']; break;
                case 'maximalist': componentKeys = ['subject', 'style', 'emotionTone', 'mediumMateriality', 'actionProcess', 'contextComposition', 'conceptualMetaphorical', 'graphicEffects']; break;
            }
        } else {
            switch (architecture) {
                case 'minimalist': componentKeys = ['subject', 'style']; break;
                case 'high-impact': componentKeys = ['subject', 'style', 'conceptualMetaphorical', 'actionProcess']; break;
                case 'maximalist': componentKeys = ['subject', 'style', 'emotionTone', 'mediumMateriality', 'actionProcess', 'contextComposition', 'conceptualMetaphorical']; break;
                case 'effects-focused': componentKeys = ['subject', 'style', 'graphicEffects', 'mediumMateriality']; break;
                default:
                    const allKeys = Object.keys(filteredFramework).filter(k => filteredFramework[k].length > 0 && k !== 'creativeConstraints' && k !== 'designerPersonas');
                    const numComponents = 3 + Math.floor(randomFunc() * 3);
                    componentKeys = allKeys.sort(() => 0.5 - randomFunc()).slice(0, numComponents);
            }
        }
        const getSubjectComponent = (randomFunc, categoryFilter = null) => {
            let subjectPool = filteredFramework.subject;
            if (categoryFilter) { subjectPool = subjectPool.filter(cat => categoryFilter.includes(cat.categoryName)); }
            const category = getRandomElement(subjectPool, randomFunc);
            if (!category || !category.examples || category.examples.length === 0) return { name: 'N/A', novelty_tier: 'N/A', category: 'N/A', example: '' };
            const example = category.examples[Math.floor(randomFunc() * category.examples.length)];
            return { name: example, novelty_tier: category.novelty_tier, category: category.categoryName, example: example };
        };
        let style_count = 0;
        let subject_count = 0;
        if (modifier === 'symbiotic-fusion') {
            newComponents['subject'] = lockedComponents['subject'] || getSubjectComponent(randomFunc, ["Nature & Animals"]);
            newComponents['subject_2'] = lockedComponents['subject_2'] || getSubjectComponent(randomFunc, ["Technology & The Future"]);
            newComponents['style'] = lockedComponents['style'] || getRandomElement(filteredFramework['style'], randomFunc);
            newComponents['emotionTone'] = lockedComponents['emotionTone'] || getRandomElement(filteredFramework['emotionTone'], randomFunc);
        } else {
            componentKeys.forEach(key => {
                let unique_key = key;
                if (key === 'style') { style_count++; if (style_count > 1) unique_key = `${key}_${style_count}`; }
                if (key === 'subject') { subject_count++; if (subject_count > 1) unique_key = `${key}_${subject_count}`; }
                if (lockedComponents[unique_key]) {
                    newComponents[unique_key] = currentComponents[unique_key];
                } else {
                    if (key === 'subject') {
                        newComponents[unique_key] = getSubjectComponent(randomFunc);
                    } else {
                        newComponents[unique_key] = getRandomElement(filteredFramework[key], randomFunc);
                    }
                }
            });
        }
    } else {
        currentSeed = 'manual';
        seedInput.value = 'N/A (Manual)';
        const findComponentByName = (categoryKey, name) => {
            if (!name) return null;
            if (categoryKey === 'designerPersonas') {
                const item = stylesData.masterFramework.designerPersonas.find(p => p.name === name);
                return item ? { name: item.name, category: item.category } : null;
            }
            if (categoryKey === 'creativeConstraints') {
                const item = stylesData.masterFramework.creativeConstraints.find(p => p.name === name);
                return item ? { name: item.name } : null;
            }
            const items = stylesData.masterFramework[categoryKey];
            if (categoryKey === 'subject') {
                for (const category of items) { if (category.examples.includes(name)) { return { name: name, novelty_tier: category.novelty_tier, category: category.categoryName, example: name }; } }
            } else { return items.find(item => item.name === name) || null; }
            return null;
        };

        const componentKeysInOrder = ['designerPersonas', 'subject', 'style', 'emotionTone', 'mediumMateriality', 'actionProcess', 'contextComposition', 'conceptualMetaphorical', 'graphicEffects', 'creativeConstraints'];
        const ideasToSave = [];
        componentKeysInOrder.forEach(key => {
            const capKey = key.charAt(0).toUpperCase() + key.slice(1);
            const customInput = document.getElementById(`custom${capKey}`);
            const manualSelect = document.getElementById(`manual${capKey}`);
            let selectedValue = '';
            let isCustom = customInput && !customInput.classList.contains('hidden') && customInput.value.trim() !== '';
            if (isCustom) {
                selectedValue = customInput.value.trim();
                newComponents[key] = { name: selectedValue, novelty_tier: 'Custom', category: 'Custom' };
                ideasToSave.push({ component_key: key, value: selectedValue });
            } else if (manualSelect) {
                selectedValue = manualSelect.value;
                if (selectedValue) { newComponents[key] = findComponentByName(key, selectedValue); }
            }
        });
        if (ideasToSave.length > 0) {
            try {
                const { error } = await supabase.from('ideas').upsert(ideasToSave, { onConflict: 'component_key, value' });
                if (error) throw error;
                console.log('Successfully saved custom ideas to Supabase!');
                await populateCreationDropdowns();
            } catch (error) {
                console.error('Failed to save idea to Supabase:', error.message);
            }
        }
    }
    currentComponents = newComponents;
    lockedComponents = {};
    renderPills();
    updateOutputContent();
    copyBtn.classList.remove('hidden');
}

function renderPills() {
    pillsContainer.innerHTML = '';
    for (const key in currentComponents) {
        const component = currentComponents[key];
        if (!component || !component.name) continue;
        const pill = document.createElement('div');
        pill.className = `pill flex items-center bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-300 ${lockedComponents[key] ? 'locked bg-indigo-900 border border-indigo-500' : ''}`;
        let displayName = keyToDisplayName[key] || key;
        let displayValue = component.name;
        if (key.startsWith('subject')) {
            displayName = component.category || 'Subject';
        }
        if (key === 'designerPersonas') {
            displayName = 'Persona';
        }
        if (key === 'creativeConstraints') {
            displayName = 'Constraint';
        }

        pill.innerHTML = `
    <span class="font-bold mr-2">${displayName}:</span>
    <span>${displayValue}</span>
    <button class="lock-btn" data-key="${key}">${lockedComponents[key] ? '&#x1F512;' : '&#x1F513;'}</button>
    `;
        pillsContainer.appendChild(pill);
    }
}

function updateOutputContent() {
    if (Object.keys(currentComponents).length === 0) {
        copyBtn.classList.add('hidden');
        briefPre.textContent = "Click 'Forge New Prompt' to begin.";
        return;
    }
    switch (currentFormat) {
        case 'brief': briefPre.textContent = formatAsBrief(); break;
        case 'ai': briefPre.textContent = formatAsAIPrompt(); break;
        case 'keywords': briefPre.textContent = formatAsKeywords(); break;
    }
}

function formatAsBrief() {
    let briefText = `Master Seed: ${currentSeed}\n\n`;
    const persona = currentComponents.designerPersonas;
    if (persona && persona.name) {
        briefText += `Designer Persona: ${persona.name}\n`;
    }

    let modifierValue = '';
    let selectedModText = '';
    let architectureText = architectureSelect.options[architectureSelect.selectedIndex].text;

    if (currentMode === 'inspiration') {
        modifierValue = modifierSelect.value;
        if (modifierValue !== 'none') {
            selectedModText = modifierSelect.options[modifierSelect.selectedIndex].text;
        }
    } else {
        const manualModifierSelect = document.getElementById('manualModifier');
        modifierValue = manualModifierSelect.value;
        if (modifierValue !== 'none') {
            selectedModText = manualModifierSelect.options[manualModifierSelect.selectedIndex].text;
        }
    }
    if (selectedModText) {
        briefText += `Architecture: High-Impact / Concept (via Modifier)\n`;
        briefText += `Creative Modifier: ${selectedModText}\n\n`;
    } else {
        briefText += `Architecture: ${architectureText}\n\n`;
    }
    const constraint = currentComponents.creativeConstraints;
    if (constraint && constraint.name) {
        briefText += `Creative Constraint: ${constraint.name}\n\n`;
    }

    briefText += '--- COMPONENTS ---\n';
    for (const key in currentComponents) {
        if (key === 'designerPersonas' || key === 'creativeConstraints') continue;
        const component = currentComponents[key];
        if (!component || !component.name) continue;
        const displayName = keyToDisplayName[key] || key;
        const tierInfo = component.novelty_tier ? `(Tier ${component.novelty_tier})` : '';
        let categoryPrefix = (component.category && component.category !== 'Custom') ? `${component.category}: ` : '';
        if (key === 'subject' && component.novelty_tier === 'Custom') {
            categoryPrefix = '';
        }
        briefText += `• ${displayName}: ${categoryPrefix}${component.name} ${tierInfo}\n`;
    }
    return briefText;
}

function formatAsAIPrompt() {
    const persona = currentComponents.designerPersonas;
    let personaPreamble = '';
    if (persona && persona.name) {
        personaPreamble = `Act as a ${persona.name}. `;
    }

    let finalPrompt = '';
    let modifierValue = (currentMode === 'inspiration') ? modifierSelect.value : document.getElementById('manualModifier').value;
    if (modifierValue && modifierValue !== 'none') {
        const selectedModText = (currentMode === 'inspiration' ? modifierSelect.options[modifierSelect.selectedIndex].text : document.getElementById('manualModifier').options[document.getElementById('manualModifier').selectedIndex].text);
        let keywords = formatAsKeywords();
        finalPrompt = `${personaPreamble}A high-impact, complex T-shirt graphic. The design is a "${selectedModText}" concept, incorporating the following themes: ${keywords}. Strict 2D vector art, high-impact, printable graphic, clean lines, no 3D rendering.`;
    } else {
        const c = currentComponents;
        const subject = c.subject?.name || 'an abstract concept';
        const style = c.style?.name ? `in a ${c.style.name} style` : 'in a unique visual style';
        const emotion = c.emotionTone?.name ? `, evoking a sense of ${c.emotionTone.name}` : '';
        const effect = c.graphicEffects?.name ? `, with a prominent ${c.graphicEffects.name} effect` : '';
        const materiality = c.mediumMateriality?.name ? `, appearing as if made of ${c.mediumMateriality.name}` : '';
        const process = c.actionProcess?.name ? `, the subject is ${c.actionProcess.name}` : '';
        const composition = c.contextComposition?.name ? `, presented as a ${c.contextComposition.name}` : '';
        const concept = c.conceptualMetaphorical?.name ? `. The design explores the concept of "${c.conceptualMetaphorical.name}"` : '';
        let prompt = `A masterpiece T-shirt graphic design of "${subject}" ${style}${materiality}${emotion}${effect}. The design is ${process}${composition}${concept}. Clean vector art, isolated on a plain white background, high detail, sharp focus.`;
        finalPrompt = personaPreamble + prompt;
    }
    const constraint = currentComponents.creativeConstraints;
    if (constraint && constraint.name) {
        finalPrompt += ` \n\n**Important Constraint:** ${constraint.name}`;
    }
    return finalPrompt.replace(/ ,/g, ',').replace(/ \./g, '.').replace(/  +/g, ' ').trim();
}

function formatAsKeywords() {
    return Object.values(currentComponents)
        .filter(value => value && value.name)
        .map(value => value.name)
        .filter(Boolean)
        .join(', ');
}

document.addEventListener('DOMContentLoaded', () => {
    const inspirationSelects = {
        architecture: [
            { value: "high-impact", text: "High-Impact / Concept (Recommended)" }, { value: "minimalist", text: "Minimalist / Icon" }, { value: "maximalist", text: "Maximalist / Hero" }, { value: "wildcard", text: "Wildcard / Experimental" }, { value: "effects-focused", text: "Effects-Focused / Technical" }
        ],
        novelty: [
            { value: "classic", text: "Tier 1: Classic & Established" }, { value: "creative", text: "Tier 2: Creative & Fused" }, { value: "experimental", text: "Tier 3: Hypothesized & Experimental" }, { value: "balanced", text: "Balanced Mix (All Tiers)" }, { value: "chaos", text: "Unrestricted Chaos" }
        ],
        modifier: [
            { value: "none", text: "None (Standard)" }, { value: "narrative-badge", text: "+Narrative Badge" }, { value: "dynamic-layout", text: "+Dynamic Layout" }, { value: "typographic-play", text: "+Typographic Play" }, { value: "expressive-collage", text: "+Expressive Collage" }, { value: "hybrid-asset-collage", text: "+HybridAssetCollage" }, { value: "symbiotic-fusion", text: "+SymbioticFusion" }, { value: "multi-style-fusion", text: "+Multi-Style Fusion" }, { value: "thematic-clash", text: "+Thematic Clash" }, { value: "maximalist", text: "+Maximalist" }
        ]
    };
    for (const id in inspirationSelects) {
        const selectEl = document.getElementById(id);
        inspirationSelects[id].forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.text;
            selectEl.appendChild(option);
        });
    }
    populateCreationDropdowns();
    pillsContainer.innerHTML = `<span class="text-gray-400 italic">Your creative components will appear here...</span>`;
    briefPre.textContent = "Click 'Forge New Prompt' to begin.";
});
// --- THE END OF THE SCRIPT ---
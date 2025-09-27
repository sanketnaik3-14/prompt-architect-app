// --- DATABASE ---
// Moved inspirationSelects and modifierDescriptions to global scope for consistent access
const inspirationSelects = {
    architecture: [
        { value: "high-impact", text: "High-Impact / Concept (Recommended)" }, { value: "minimalist", text: "Minimalist / Icon" }, { value: "maximalist", text: "Maximalist / Hero" }, { value: "wildcard", text: "Wildcard / Experimental" }, { value: "effects-focused", text: "Effects-Focused / Technical" }
    ],
    novelty: [
        { value: "classic", text: "Tier 1: Classic & Established" }, { value: "creative", text: "Tier 2: Creative & Fused" }, { value: "experimental", text: "Tier 3: Hypothesized & Experimental" }, { value: "balanced", text: "Balanced Mix (All Tiers)" }, { value: "chaos", text: "Unrestricted Chaos" }
    ],
    modifier: [
        { value: "none", text: "None (Standard)" }, { value: "narrative-badge", text: "+Narrative Badge" }, { value: "dynamic-layout", text: "+Dynamic Layout" }, { value: "typographic-play", text: "+Typographic Play" }, { value: "expressive-collage", text: "+Expressive Collage" }, { value: "hybrid-asset-collage", text: "+HybridAssetCollage" }, { value: "symbiotic-fusion", text: "+SymbioticFusion" }, { value: "multi-style-fusion", text: "+Multi-Style Fusion" }, { value: "thematic-clash", text: "+Thematic Clash" }, { value: "maximalist", text: "+Maximalist" }, { value: "vintage-authentic", text: "+VintageAuthentic" }, { value: "clean-tech", text: "+CleanTech" }, { value: "punk-zine", text: "+PunkZine" }, { value: "ornate-elegance", text: "+OrnateElegance" }, { value: "generative-system", text: "ALCHEMY: Generative System" }, { value: "dataviz-mythology", text: "ALCHEMY: DataViz Mythology" }, { value: "material-inversion", text: "ALCHEMY: Material Inversion" }, { value: "conceptual-surrealism", text: "ALCHEMY: Conceptual Surrealism" }, { value: "kinetic-typography", text: "ALCHEMY: Kinetic Typography" }, { value: "sensory-swap", text: "ALCHEMY: Sensory Swap" }, { value: "lexicon-definition", text: "ALCHEMY: Lexicon Definition" } // NEW: Lexicon Modifier
    ]
};
const modifierDescriptions = {
    "narrative-badge": "Creates a structured, logo-like emblem with integrated text.", "dynamic-layout": "Prioritizes energy, movement, and asymmetry in the composition.", "typographic-play": "Makes the text itself the primary artwork, to be deconstructed and manipulated.", "expressive-collage": "Creates a busy, layered, zine-page or sticker-bomb design.", "hybrid-asset-collage": "Creates a Neo-Brutalist design by combining distinct assets in a grid.", "symbiotic-fusion": "Fuses one Nature subject with one Technology subject.", "multi-style-fusion": "Blends two distinct artistic styles into a new, hybrid aesthetic.", "thematic-clash": "Emphasizes the opposition or conflict between two subjects.", "maximalist": "Fills the entire canvas with intricate detail, avoiding negative space.", "vintage-authentic": "Creates a design that feels like a genuine artifact from a past era.", "clean-tech": "Forces a clean, minimalist, corporate-tech aesthetic.", "punk-zine": "Commands a raw, DIY, cut-and-paste collage style.", "ornate-elegance": "Prioritizes beauty, decoration, and intricate, flowing detail.", "generative-system": "Illustrates a process transforming a subject over a sequence of 3-4 frames.", "dataviz-mythology": "Renders a subject as a clean infographic that explains an abstract concept.", "material-inversion": "Defines the subject using only negative space against a textured background.", "conceptual-surrealism": "Creates a dream-like scene of a subject acting out an abstract concept.", "kinetic-typography": "Shows the text itself physically undergoing a process (e.g., melting, shattering).", "sensory-swap": "Visualizes a subject as if it were the embodiment of a non-visual sense (e.g., a sound or feeling).",
    "lexicon-definition": "Generates a typographic design based on the definition of a chosen word, exploring its visual meaning." // NEW: Lexicon Modifier Description
};

// --- GRAPHIC EFFECTS DATA EXTRACTION ---
const graphicEffectsRaw = {
    "graphic_design_effects": {
        "visual_enhancement_effects": {
            "texture_effects": [
                "noise_effect", "film_grain", "gritty_texture", "paper_texture", "grunge_texture", "vintage_distress", "pixelation", "sand_texture", "holographic_texture", "halftone_texture", "spray_paint_texture", "woodcut_texture", "screen_print_effect", "subtle_texture_overlay"
            ],
            "color_effects": [
                "gradient", "liquid_gradient", "duotone", "monochrome", "sepia_tone", "psychedelic_colors", "color_blocking", "vibrant_hues", "muted_palette", "maximalist_color_scheme", "unconventional_color_combinations", "dark_mode_with_neon_accents", "heatmapping_style", "high_contrast_pairings", "color_inversion"
            ],
            "lighting_and_shadow_effects": [
                "drop_shadow", "flat_drop_shadow", "inner_shadow", "glowing_edges", "lens_flare", "bokeh_effect", "epic_glow_effect", "natural_lighting", "metallic_effects", "neon_effects", "aura_gradients"
            ],
            "distortion_and_manipulation": [
                "glitch_effect", "datamoshing", "liquify", "refraction", "glassmorphism", "vector_painting", "cyberpunk_aesthetics", "surrealism_airbrush", "photo_bashing", "anaglyph_effect", "pixel_sorting"
            ]
        },
        "typographic_effects": {
            "advanced_techniques": [
                "dynamic_fonts", "glyph_editing", "variable_fonts", "text_manipulation", "kerning_and_tracking_variations", "expressive_typography", "kinetic_typography"
            ],
            "stylistic_typography": [
                "hand_drawn_lettering", "bold_typography", "experimental_typography", "distorted_typography", "text_as_shape", "3d_typography", "retro_serif_branding", "modern_gothic", "pixelated_fonts", "bubble_typography", "calligraphy"
            ]
        },
        "spatial_and_compositional_effects": {
            "depth_effects": [
                "3d_visualizations", "layered_elements", "overlapping_elements", "dimensional_composition", "forced_perspective", "double_exposure"
            ],
            "layout_effects": [
                "asymmetrical_layout", "grid_layout", "neo-brutalism_and_anti_design", "minimalist_design", "maximalist_design", "minimalist_maximalism", "utilitarian_design", "bento_box_design"
            ],
            "scale_effects": [
                "dramatic_scale_shifts", "miniaturization"
            ],
            "space_effects": [
                "white_space_emphasis", "negative_space_usage"
            ]
        },
        "interactive_and_motion_effects": {
            "web_design_effects": [
                "parallax_scrolling", "interactive_backgrounds", "hover_reveal", "microinteractions", "custom_cursor_effects", "animated_page_transitions", "neumorphism", "user_centric_design"
            ],
            "animation_effects": [
                "lottie_animations", "cinemagraphs", "gif_animations", "svg_animations", "motion_infused_minimalism", "seamless_loops", "hand_drawn_animation", "2d_animation_with_3d_effects", "animated_graphic_loops", "ui_ux_animations"
            ],
            "augmented_and_virtual_reality": [
                "ar_effects", "vr_experiences", "interactive_packaging", "metaverse_integration", "immersive_billboards"
            ]
        },
        "stylistic_effects": {
            "retro_and_vintage_effects": [
                "retro_futurism", "vintage_aesthetic", "retro_color_palette", "distressed_print_effect", "modern_heritage", "y2k_aesthetic", "90s_nostalgia", "80s_retro", "retro_pixels_and_arcade_style", "70s_nostalgia"
            ],
            "modern_and_abstract_effects": [
                "abstract_geometric_shapes", "minimalist_lines", "conceptual_and_abstract_design", "goth_aesthetic", "geometric_composition", "expressive_lettering", "fluid_and_organic_shapes", "modern_surrealism", "pop_futurism", "brutalist_maximalism"
            ],
            "mixed_media": [
                "collage_effects", "digital_scrapbooking", "hand_drawn_illustration", "combined_media_effects", "mixed_media_typography"
            ]
        },
        "conceptual_and_emerging_effects": [
            "generative_fill", "ai_image_creation", "content_aware_removal", "ai_realism", "dynamic_branding", "generative_typography", "ai_driven_personalization", "ethical_design", "sustainable_design", "inclusive_design", "data_driven_creativity", "custom_shape_cropping"
        ]
    }
};

const extractedEffects = [];
function extractFromObject(obj) {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach(item => extractedEffects.push({ name: item, novelty_tier: 1 }));
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            extractFromObject(obj[key]);
        }
    }
}
extractFromObject(graphicEffectsRaw.graphic_design_effects);
const graphicEffectsData = extractedEffects;

const stylesData = {
    "databaseInfo": { "name": "Unified Design & Prompt Framework", "version": "7.0-expanded" },
    "masterFramework": {
        "subject": [
            // --- Intelligent Component Structure Example ---
            {
                "categoryName": "Pop Culture & Fandom",
                "novelty_tier": 1,
                "examples": [
                    { "name": "Movies and TV shows", "seo_keywords": ["movie fan", "tv series merch", "fandom apparel"], "target_audience": "film buffs, binge-watchers", "suggested_products": ["posters", "hoodies"] },
                    { "name": "Music and bands", "seo_keywords": ["band merch", "music lover", "concert tee"], "target_audience": "music enthusiasts, concert-goers", "suggested_products": ["t-shirts", "vinyl sleeves"] },
                    { "name": "Video games", "seo_keywords": ["gamer merch", "gaming apparel", "retro gaming"], "target_audience": "gamers, esports fans", "suggested_products": ["t-shirts", "mugs"] },
                    "Memes and internet slang", "Anime characters", "Comic book heroes", "Parody of Iconic Album Art", "Subtle 'in-joke' references for gamers", "Iconic Sci-Fi Movie Posters", "8-bit Video Game Sprites", "Lyrics from a Cult Classic Song", "Vintage Wrestling Logos"
                ]
            },
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
            // --- Intelligent Component Structure Example ---
            { "name": "Cartoon / Comic Book", "novelty_tier": 1, "seo_keywords": ["cartoon art", "comic style", "pop culture graphic"], "target_audience": "comic fans, animation lovers", "suggested_products": ["t-shirts", "stickers"] },
            { "name": "Cute / Kawaii", "novelty_tier": 1, "seo_keywords": ["kawaii art", "cute aesthetic", "japanese cute"], "target_audience": "anime fans, young adults", "suggested_products": ["tote bags", "phone cases"] },
            { "name": "Geometric", "novelty_tier": 1 }, { "name": "Hand Lettering", "novelty_tier": 1 }, { "name": "Line Art", "novelty_tier": 1 }, { "name": "Minimalist", "novelty_tier": 1 }, { "name": "Minimalist Text", "novelty_tier": 1 }, { "name": "Negative Space", "novelty_tier": 1 }, { "name": "Pop Art", "novelty_tier": 1 }, { "name": "Single Line Art (One-Line)", "novelty_tier": 1 }, { "name": "Sketch / Doodle", "novelty_tier": 1 }, { "name": "Typographic Portrait", "novelty_tier": 1 }, { "name": "80s Retro", "novelty_tier": 2 }, { "name": "90s Nostalgia", "novelty_tier": 2 }, { "name": "Abstract", "novelty_tier": 2 }, { "name": "Anime / Manga", "novelty_tier": 2 }, { "name": "Art Deco", "novelty_tier": 2 }, { "name": "Art Nouveau", "novelty_tier": 2 }, { "name": "Blueprint Style", "novelty_tier": 2 }, { "name": "Brutalism (Web Design Inspired)", "novelty_tier": 2 }, { "name": "Celtic Knotwork", "novelty_tier": 2 }, { "name": "Collage", "novelty_tier": 2 }, { "name": "Cottagecore", "novelty_tier": 2 }, { "name": "Cyberpunk", "novelty_tier": 2 }, { "name": "Dark Academia", "novelty_tier": 2 }, { "name": "Engraving / Etching Style", "novelty_tier": 2 }, { "name": "Frutiger Aero (2000s Glossy Aesthetic)", "novelty_tier": 2 }, { "name": "Infographic Style", "novelty_tier": 2 }, { "name": "Isometric", "novelty_tier": 2 }, { "name": "Japanese Ukiyo-e", "novelty_tier": 2 }, { "name": "Korean Pop-Art / Clean Aesthetic", "novelty_tier": 2 }, { "name": "Low Poly", "novelty_tier": 2 }, { "name": "Mandala / Zentangle", "novelty_tier": 2 }, { "name": "Mexican Lotería Card Art", "novelty_tier": 2 }, { "name": "Modern Manga Screen Tones", "novelty_tier": 2 }, { "name": "Patent Drawing Style", "novelty_tier": 2 }, { "name": "Psychedelic", "novelty_tier": 2 }, { "name": "Quiet Luxury / Understated Elegance", "novelty_tier": 2 }, { "name": "Silhouette", "novelty_tier": 2 }, { "name": "Slavic Folk Art (Wycinanki)", "novelty_tier": 2 }, { "name": "Steampunk", "novelty_tier": 2 }, { "name": "Surreal", "novelty_tier": 2 }, { "name": "Technical Cutaway", "novelty_tier": 2 }, { "name": "Vaporwave", "novelty_tier": 2 }, { "name": "Watercolor", "novelty_tier": 2 }, { "name": "Western Graffiti Street-Art", "novelty_tier": 2 }, { "name": "Woodcut / Linocut Style", "novelty_tier": 2 }, { "name": "Y2K Revival / Early Internet Aesthetic", "novelty_tier": 2 }, { "name": "Bio-Mechanical (Gigeresque)", "novelty_tier": 3 }, { "name": "Data Moshing / Databending", "novelty_tier": 3 }, { "name": "De Stijl / Mondrian", "novelty_tier": 3 }, { "name": "Glitch Art", "novelty_tier": 3 }, { "name": "Japanese Avant-Garde", "novelty_tier": 3 }, { "name": "Liminal Space Aesthetics", "novelty_tier": 3 }, { "name": "Post-Internet Art", "novelty_tier": 3 }, { "name": "Retro-Futurism", "novelty_tier": 3 }, { "name": "Solarpunk", "novelty_tier": 3 }, { "name": "Vedic Futurism", "novelty_tier": 3 }
        ],
        "emotionTone": [
            // --- Intelligent Component Structure Example ---
            { "name": "Aggressive / Fierce", "novelty_tier": 1, "seo_keywords": ["fierce design", "bold statement", "rebellious art"], "target_audience": "activists, punk fans", "suggested_products": ["patches", "hoodies"] },
            { "name": "Cute / Kawaii", "novelty_tier": 1 }, { "name": "Hopeful / Optimistic", "novelty_tier": 1 }, { "name": "Humorous / Funny", "novelty_tier": 1 }, { "name": "Inspirational / Motivational", "novelty_tier": 1 }, { "name": "Nostalgic / Retro", "novelty_tier": 1 }, { "name": "Playful / Quirky", "novelty_tier": 1 }, { "name": "Sarcasm", "novelty_tier": 1 }, { "name": "Serene / Tranquil / Zen", "novelty_tier": 1 }, { "name": "Wholesome & Heartwarming", "novelty_tier": 1 }, { "name": "Absurdist / Nonsensical", "novelty_tier": 2 }, { "name": "Anxious / Tense", "novelty_tier": 2 }, { "name": "Boho / Bohemian", "novelty_tier": 2 }, { "name": "Clinical / Sterile", "novelty_tier": 2 }, { "name": "Cozy / Comforting", "novelty_tier": 2 }, { "name": "Dreamlike / Oneiric", "novelty_tier": 2 }, { "name": "Dry Wit / Deadpan", "novelty_tier": 2 }, { "name": "Edgy / Provocative", "novelty_tier": 2 }, { "name": "Energetic / Dynamic / Vibrant", "novelty_tier": 2 }, { "name": "Gothic / Dark", "novelty_tier": 2 }, { "name": "Heroic / Epic", "novelty_tier": 2 }, { "name": "Melancholic / Wistful", "novelty_tier": 2 }, { "name": "Mysterious / Enigmatic", "novelty_tier": 2 }, { "name": "Rage / Defiance", "novelty_tier": 2 }, { "name": "Self-Deprecating Humor", "novelty_tier": 2 }, { "name": "Streetwear / Urban", "novelty_tier": 2 }, { "name": "Witty Observations", "novelty_tier": 2 }, { "name": "Anticipatory Stillness", "novelty_tier": 3 }, { "name": "Cathartic Release", "novelty_tier": 3 }, { "name": "Cosmic Horror", "novelty_tier": 3 }, { "name": "Defiant Optimism", "novelty_tier": 3 }, { "name": "Electric Tension", "novelty_tier": 3 }, { "name": "Ethereal / Ghostly", "novelty_tier": 3 }, { "name": "Existential Dread", "novelty_tier": 3 }, { "name": "Joyful Exuberance", "novelty_tier": 3 }, { "name": "Manic / Unhinged", "novelty_tier": 3 }, { "name": "Quiet Contemplation", "novelty_tier": 3 }, { "name": "Reverential Awe", "novelty_tier": 3 }, { "name": "Sublime (Terror & Beauty)", "novelty_tier": 3 }, { "name": "Uncanny Valley", "novelty_tier": 3 }
        ],
        "mediumMateriality": [
            { "name": "Cast Concrete", "novelty_tier": 1 }, { "name": "Geode and Agate Slice", "novelty_tier": 1 }, { "name": "Gold Leaf / Gilded", "novelty_tier": 1 }, { "name": "Handmade Recycled Paper", "novelty_tier": 1 }, { "name": "Paper Cut-out Style", "novelty_tier": 1 }, { "name": "Polished Dark Wood Grain", "novelty_tier": 1 }, { "name": "Pressed & Dried Flowers", "novelty_tier": 1 }, { "name": "Rough Burlap / Canvas", "novelty_tier": 1 }, { "name": "Rusted Metal", "novelty_tier": 1 }, { "name": "Stained Glass", "novelty_tier": 1 }, { "name": "Worn Denim", "novelty_tier": 1 }, { "name": "Anodized Titanium / Oil Slick", "novelty_tier": 2 }, { "name": "Chainmail / Woven Metal", "novelty_tier": 2 }, { "name": "Cosmic Nebula Gas Texture", "novelty_tier": 2 }, { "name": "Cracked Earth / Kintsugi Veins", "novelty_tier": 2 }, { "name": "Cracked Lacquer (Craquelure)", "novelty_tier": 2 }, { "name": "Embroidery / Cross-Stitch Effect", "novelty_tier": 2 }, { "name": "Holographic / Iridescent Effect", "novelty_tier": 2 }, { "name": "Liquid Amber / Resin with Inclusions", "novelty_tier": 2 }, { "name": "Liquid Metal / Chrome Effect", "novelty_tier": 2 }, { "name": "Neon Glow Effect", "novelty_tier": 2 }, { "name": "Patina Effect (Verdigris)", "novelty_tier": 2 }, { "name": "Poured Paint / Fluid Art", "novelty_tier": 2 }, { "name": "Risograph Print Effect", "novelty_tier": 2 }, { "name": "Aerogel", "novelty_tier": 3 }, { "name": "Bismuth Hopper Crystal", "novelty_tier": 3 }, { "name": "Crystallized Data", "novelty_tier": 3 }, { "name": "Ferrofluid Simulation", "novelty_tier": 3 }, { "name": "Glitching Reality Fabric", "novelty_tier": 3 }, { "name": "Liquid Light / Solidified Sunlight", "novelty_tier": 3 }, { "name": "Living Obsidian / Volcanic Glass", "novelty_tier": 3 }, { "name": "Quantum Foam", "novelty_tier": 3 }, { "name": "Sentient Ink", "novelty_tier": 3 }, { "name": "Solidified Smoke", "novelty_tier": 3 }, { "name": "Spun Light Effect", "novelty_tier": 3 }, { "name": "Woven Nebula Filaments", "novelty_tier": 3 }
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
        "graphicEffects": graphicEffectsData, // RE-ADDED GRAPHIC EFFECTS
        "creativeConstraints": [
            { "name": "Use only two colors: black and one accent color." }, { "name": "The design must contain no text whatsoever." }, { "name": "The entire design must fit inside a perfect circle." }, { "name": "The subject must be shown in a completely unexpected context." }, { "name": "Create the design using only typography and geometric shapes." }, { "name": "The design's emotion must contradict its subject." }, { "name": "Use a symmetrical layout for a subject that is naturally asymmetrical." }, { "name": "The design must use a serif font for all text.", "novelty_tier": 1 }, { "name": "Use a triadic color scheme.", "novelty_tier": 2 }, { "name": "The design must be heavily off-center and unbalanced.", "novelty_tier": 2 }, { "name": "The design must tell a story in three distinct parts (triptych).", "novelty_tier": 2 }, { "name": "The design must look like it's made of a single, uniform material.", "novelty_tier": 2 }
        ],
        "designerPersonas": [
            { "name": "Master Ink Illustrator", "category": "By Medium/Technique" }, { "name": "Seasoned Comic Book Artist", "category": "By Medium/Technique" }, { "name": "Expert Woodcut Printmaker", "category": "By Medium/Technique" }, { "name": "Professional Airbrush Artist", "category": "By Medium/Technique" }, { "name": "Modern Calligrapher", "category": "By Medium/Technique" }, { "name": "Zine Maker with a DIY Punk Aesthetic", "category": "By Medium/Technique" }, { "name": "Technical Illustrator for Manuals", "category": "By Medium/Technique" }, { "name": "RISOGRAPH Print Specialist", "category": "By Medium/Technique" }, { "name": "70s Psychedelic Rock Poster Artist", "category": "By Style/Genre/Era" }, { "name": "Minimalist Swiss Designer", "category": "By Style/Genre/Era" }, { "name": "90s Rave Flyer Designer", "category": "By Style/Genre/Era" }, { "name": "Tokyo Streetwear Designer", "category": "By Style/Genre/Era" }, { "name": "Fantasy TTRPG Illustrator", "category": "By Style/Genre/Era" }, { "name": "Bauhaus Instructor", "category": "By Style/Genre/Era" }, { "name": "Art Nouveau Illustrator like Alphonse Mucha", "category": "By Style/Genre/Era" }, { "name": "Soviet Constructivist Poster Artist", "category": "By Style/Genre/Era" }, { "name": "Art Director for a Vaporwave Music Label", "category": "By Style/Genre/Era" }, { "name": "Concept Artist for a Dark Fantasy Soulslike Game", "category": "By Style/Genre/Era" }, { "name": "Successful Dropshipping Seller", "category": "By Commercial Role" }, { "name": "Luxury Fashion Brand Director", "category": "By Commercial Role" }, { "name": "Gritty Skate Company Illustrator", "category": "By Commercial Role" }, { "name": "Children's Book Illustrator", "category": "By Commercial Role" }, { "name": "Tour Merch Designer for a Metal Band", "category": "By Commercial Role" }, { "name": "Brand Designer for a Craft Brewery", "category": "By Commercial Role" }, { "name": "Mascot Designer for a Sports Team", "category": "By Commercial Role" }, { "name": "Infographic Designer for a Science Magazine", "category": "By Commercial Role" }, { "name": "Creative Director for a National Park Service", "category": "By Commercial Role" },
            { "name": "A 5-year-old child with a big box of crayons", "category": "By Artist's State & Tool" }, { "name": "A student doodling with a ballpoint pen in their notebook", "category": "By Artist's State & Tool" }, { "name": "A street artist using a spray paint can and stencils", "category": "By Artist's State & Tool" }, { "name": "A master calligrapher practicing with a brush pen", "category": "By Artist's State & Tool" }, { "name": "An architect drafting with a technical pencil", "category": "By Artist's State & Tool" }, { "name": "A medieval monk illuminating a manuscript with gold leaf", "category": "By Artist's State & Tool" }, { "name": "An exhausted artist frantically sketching in charcoal", "category": "By Artist's State & Tool" }, { "name": "A rogue AI developing its first sense of artistic style", "category": "By Artist's State & Tool" }
        ],
        "culturalAnchor": [
            { "categoryName": "African Aesthetics", "examples": ["Afrofuturism", "Afro-Surrealism", "Ankara", "Desertwave", "Pharaoahcore", "Steampunk African", "Tribal", "Ubuntu", "Voodoo"] },
            { "categoryName": "Afro-American Aesthetics", "examples": ["2014 Tumblr", "Baddie", "Blaxploitation", "Black Natural Hair", "Cozy", "Dollycore", "E-Girl/E-Boy", "Fly Girl", "Ghetto", "Ghetto Fabulous", "Harlem Renaissance", "Hip-Hop", "Hip-Hop Jewelry", "Hiplet", "McBling", "Ratchet", "Sassy", "Scene", "Softie", "Southern Gothic", "Swag", "Urban", "Vaporwave", "VSCO", "Y2K"] },
            { "categoryName": "Afro-Brazilian Aesthetics", "examples": ["Capoeira", "Carnaval", "Favela Chic", "Malote", "Samba"] },
            { "categoryName": "American Aesthetics", "examples": ["Americana", "Americancore", "Art Deco", "Atomic Age", "Barbiecore", "Biker", "Bling", "Bohemian", "Boho-Chic", "Brat", "Bronzepunk", "Cabincore", "Camp", "Chic", "Clowncore", "Coquette", "Country", "Cowboy", "Craftcore", "Crowcore", "Crustpunk", "Cyberdelic", "Dieselpunk", "Diner", "Disco", "Dollycore", "Dullcore", "E-Girl/E-Boy", "Fairy Grunge", "Film Noir", "Florida Gothic", "Flapper", "Frutiger Aero", "Garage Rock Revival", "Glam Rock", "Goblincore", "Googie", "Goth", "Greaser", "Groove", "Grunge", "Gulf Gothic", "Gutter Punk", "Health Goth", "Hippie", "Hipster", "Indie", "Kidcore", "Late 2000s Recession", "Mallgoth", "McBling", "Midwest Emo", "Midwest Gothic", "Minimalism", "Mod", "Morute", "MS-Paint", "New Money", "Normcore", "Old Hollywood", "Old Money", "Paleocore", "Preppy", "Proto-Cyberpunk", "Psychobilly", "Punk", "Rave", "Raygun Gothic", "Rockabilly", "Rocker", "Sanrio Core", "Scenecore", "Scrapper", "Skater", "Softie", "Southern Belle", "Southern Gothic", "Space Age", "Steampunk", "Stilyagi", "Swag", "Swing", "Tramp", "Trapper", "Twee", "Vaporwave", "Vibe", "VSCO", "Western", "Y2K", "Yuppie", "Zoot Suiter", "Zune"] },
            { "categoryName": "Arab Aesthetics", "examples": ["Arab Futurist", "Gulf Futurism", "Islamic Golden Age", "Silk Punk"] },
            { "categoryName": "Argentine Aesthetics", "examples": ["Gaucho", "Tango"] },
            { "categoryName": "Australian Aesthetics", "examples": ["Australiana", "Dieselpunk", "God's Punk"] },
            { "categoryName": "Austrian Aesthetics", "examples": ["Biedermeier", "Vienna Secession"] },
            { "categoryName": "Belgian Aesthetics", "examples": ["Belgian Eclectic", "Maison de Poupée", "Raygun Gothic", "Steampunk"] },
            { "categoryName": "Brazilian Aesthetics", "examples": ["Agroboy/Agrogirl", "Brazilcore", "Favelacore", "Malote", "Samba", "Tropicalia"] },
            { "categoryName": "British Aesthetics", "examples": ["90s British Rave", "British Countryside", "Britpop", "Chav", "Cottagecore", "Cyber-Goth", "Dark Academia", "Dieselpunk", "Dr. Martens", "Dystopiacore", "E-Girl/E-Boy", "English Country House", "Glam Rock", "GoblinCore", "Goth", "Gothic Lolita", "Grandmillennial", "Granny Chic", "Gutter Punk", "Lolita", "Minimalism", "Mod", "New Romantic", "Pastel Goth", "Punk", "Raygun Gothic", "Rocker", "Romantic Goth", "Scally", "Steampunk", "Stilyagi", "Teddy Boy", "Trad Goth", "Tramp", "Twee", "UK Garage", "Vampire", "Victorian", "Victorian Goth", "Vintage"] },
            { "categoryName": "Canadian Aesthetics", "examples": ["Canadian Gothic", "Canadiana", "Webcore"] },
            { "categoryName": "Chilean Aesthetics", "examples": ["Chilote", "Huaso"] },
            { "categoryName": "Chinese Aesthetics", "examples": ["Chinese Art Deco", "Chinese Folk Art", "Chinoiserie", "Cyberpunk", "Hanfu", "Hong Kong Action Cinema", "Mandopop", "Manhua", "Modern Chinese", "Qipao", "Sanriocore", "Silkpunk", "Wuxia"] },
            { "categoryName": "Colombian Aesthetics", "examples": ["Narco", "Tropicaliente"] },
            { "categoryName": "Czech Aesthetics", "examples": ["Czech Cubism", "Czech Rondocubism", "Czech Art Deco", "Socialist Realism"] },
            { "categoryName": "Danish Aesthetics", "examples": ["Danish Modern", "Hygge"] },
            { "categoryName": "Dutch Aesthetics", "examples": ["De Stijl", "Dutch Golden Age", "Gabber", "Miffycore"] },
            { "categoryName": "Egyptian Aesthetics", "examples": ["Egyptian Revival", "Pharaohcore"] },
            { "categoryName": "Filipino Aesthetics", "examples": ["Baro't Saya", "Jeepney", "Pinoy Gothic", "Pinoy Komiks", "Sari-sari Store"] },
            { "categoryName": "French Aesthetics", "examples": ["Art Deco", "Art Nouveau", "Balletcore", "Baroque", "Belle Époque", "Chic", "Dandy", "Decadent", "French Girl", "French Rococo", "Maison de Poupée", "Minimalism", "Rococo", "Steampunk", "Synthwave", "Vintage"] },
            { "categoryName": "German Aesthetics", "examples": ["Bauhaus", "Biedermeier", "Biopunk", "Cyber-Goth", "Dindl", "Expressionism", "Goth", "Kitsch", "Lederhosen", "Neoclassicism", "Oktoberfest", "Plattenbau", "Trad Goth", "Wanderlust"] },
            { "categoryName": "Greek Aesthetics", "examples": ["Ancient Greek", "Classic Academia", "Hellenistic", "Light Academia", "Vaporwave"] },
            { "categoryName": "Indian Aesthetics", "examples": ["Bollywood", "Chakra", "Desi", "Goa Trance", "Indofuturism", "Indo-Saracenic Revival", "Kalamkari", "Mandala", "Paisley", "Peacock", "Rangoli", "Tie-Dye", "Vedicwave"] },
            { "categoryName": "Indigenous Aesthetics", "examples": ["Aztec", "Inca", "Maya", "Native American", "Powwow", "Tribal"] },
            { "categoryName": "Irish Aesthetics", "examples": ["Celtic", "Gaelic", "Irish Gothic", "Trad"] },
            { "categoryName": "Italian Aesthetics", "examples": ["Art Deco", "Baroque", "Biker", "Chic", "Dandy", "Dieselpunk", "Giallo", "Italo Disco", "Italian Greyhound", "Italian Renaissance", "Mafia", "Minimalism", "Rococo", "Roman", "Vaporwave", "Vintage"] },
            { "categoryName": "Japanese Aesthetics", "examples": ["Animecore", "Biwa Hōshi", "Bōsōzoku", "Bubblegum Pop", "Bunraku", "Chindōgu", "City Pop", "Cutecore", "Cyberpunk", "Decora", "Dekotora", "Fairy Kei", "Forest Punk", "Future Funk", "Ganguro", "Geisha", "Gothic Lolita", "Gurokawa", "Gyaru", "Harajuku", "Hello Kitty", "Hime-Lolita", "Idol", "Irezumi", "Japan", "Japanesecore", "J-Pop", "Kabuki", "Karaoke", "Kawaii", "Kimono", "Kogal", "Lolita", "Maid", "Manga", "Minimalism", "Mori Kei", "Onnagata", "Otaku", "Oiran", "Pastel Goth", "Pink Princess", "Punk Lolita", "Rakugo", "Sailor Lolita", "Sakura", "Samurai", "Sanriocore", "Shironuri", "Shōwa", "Steampunk", "Sukeban", "Sweet Lolita", "Taishō Roman", "Takenokozoku", "Ukiyo-e", "Vaporwave", "Visual Kei", "Wabi-Sabi", "Wa Lolita", "Yami-Kawaii", "Yankī", "Yume-Kawaii", "Zen Garden"] },
            { "categoryName": "Jewish Aesthetics", "examples": ["Art Deco", "Jewish", "Kosher"] },
            { "categoryName": "Korean Aesthetics", "examples": ["Hanbok", "Hallyu", "K-Pop", "Manhwa", "Mukbang", "Ulzzang"] },
            { "categoryName": "Latin American Aesthetics", "examples": ["Cholo", "Mestizo", "Narco", "Reggaeton", "Tejano", "Telenovela", "Vaquero"] },
            { "categoryName": "Mexican Aesthetics", "examples": ["Adelita", "Aztec", "Cholo", "Day of the Dead", "Escaramuza Charra", "Fridacore", "Lucha Libre", "Mariachi", "Mayan", "Narco", "Pachucas", "Vaquero"] },
            { "categoryName": "Middle Eastern Aesthetics", "examples": ["Arab Futurist", "Gulf Futurism", "Islamic Golden Age", "Middle Eastern", "Ottoman", "Persian", "Rumi", "Sufi", "Turkish"] },
            { "categoryName": "Nordic Aesthetics", "examples": ["Bunad", "Hygge", "Lagom", "Nordic", "Viking"] },
            { "categoryName": "Oceanian Aesthetics", "examples": ["Beach Girl", "Hula", "Nautical", "Ocean Academia", "Seapunk", "Shell", "Surfer", "Tiki", "Tropical", "Yacht Rock"] },
            { "categoryName": "Polish Aesthetics", "examples": ["Blokette", "Gopnik", "Polish Poster School", "Socrealism", "Zakopane Style"] },
            { "categoryName": "Polynesian Aesthetics", "examples": ["Hula", "Tiki"] },
            { "categoryName": "Portuguese Aesthetics", "examples": ["Azulejo", "Baroque", "Fado", "Manueline", "Rococo"] },
            { "categoryName": "Puerto Rican Aesthetics", "examples": ["Boricua", "Reggaeton"] },
            { "categoryName": "Romanian Aesthetics", "examples": ["Brâncovenesc", "Dacian", "Romanian Revival", "Vampire"] },
            { "categoryName": "Russian Aesthetics", "examples": ["Balletcore", "Constructivism", "Gopnik", "Panelák", "Post-Soviet", "Russian Avant-Garde", "Russian Fairy Tale", "Russian Futurism", "Socialist Realism", "Soviet", "Sovietwave", "Stilyagi", "Suprematism", "Zarchitechestvo"] },
            { "categoryName": "Slavic Aesthetics", "examples": ["Blokette", "Gopnik", "Panelák", "Post-Soviet", "Russian Fairy Tale", "Slavic", "Socialist Realism", "Soviet", "Sovietwave", "Stilyagi", "Zarchitechestvo"] },
            { "categoryName": "South American Aesthetics", "examples": ["Gaucho", "Huaso", "Llanero", "Malote", "Samba", "Tango"] },
            { "categoryName": "Spanish Aesthetics", "examples": ["Baroque", "Cangrejeras", "Chulapo", "Flamenco", "Gaudi", "Gipsy", "Hispanic", "Matador", "Mozarabic", "Mudéjar", "Plateresque", "Rococo", "Spanish Golden Age"] },
            { "categoryName": "Swiss Aesthetics", "examples": ["Alpine", "Bauhaus", "International Typographic Style", "Minimalism"] },
            { "categoryName": "Thai Aesthetics", "examples": ["Thai", "Thai Ghost", "Thai Temple"] },
            { "categoryName": "Turkish Aesthetics", "examples": ["Anatolian Rock", "Arabesque", "Ottoman", "Seljuk", "Turkish", "Yörük"] },
            { "categoryName": "Ukrainian Aesthetics", "examples": ["Cossack", "Ukrainian Baroque", "Ukrainian Folk", "Vyshyvanka"] },
            { "categoryName": "Vietnamese Aesthetics", "examples": ["Áo Dài", "Nón Lá", "Vietnam War", "Vinahouse"] }
        ],
        // NEW: Lexicon component
        "lexicon": [
            { "name": "Sonder", "definition": "The realization that each random passerby is living a life as vivid and complex as your own.", "seo_keywords": ["deep thoughts", "human connection", "existential art"], "target_audience": "philosophy lovers, introspective individuals", "suggested_products": ["journals", "posters"] },
            { "name": "Opia", "definition": "The ambiguous intensity of looking someone in the eye, which can feel simultaneously invasive and vulnerable.", "seo_keywords": ["eye contact", "human emotion", "intense gaze"], "target_audience": "psychology students, artists", "suggested_products": ["art prints", "t-shirts"] },
            { "name": "Monachopsis", "definition": "The subtle but persistent feeling of not fitting in.", "seo_keywords": ["loneliness", "outsider art", "belonging"], "target_audience": "introverts, alternative subcultures", "suggested_products": ["stickers", "hoodies"] },
            { "name": "Compair", "definition": "The feeling of inadequacy when comparing oneself to others' curated online lives.", "seo_keywords": ["social media detox", "mental health", "self-worth"], "target_audience": "gen z, digital natives", "suggested_products": ["phone cases", "notebooks"] },
            { "name": "Petrichor", "definition": "The pleasant, earthy scent after rain.", "seo_keywords": ["nature scent", "rainy day", "fresh air"], "target_audience": "nature lovers, minimalists", "suggested_products": ["candles", "t-shirts"] },
            { "name": "Hiraeth", "definition": "A homesickness for a home to which you cannot return, a home which maybe never was; the nostalgia, the yearning, the grief for the lost places of your past.", "seo_keywords": ["nostalgia", "longing", "welsh culture"], "target_audience": "travelers, romantics", "suggested_products": ["travel mugs", "wall art"] },
            { "name": "Meraki", "definition": "To do something with soul, creativity, or love; to put 'something of yourself' into your work.", "seo_keywords": ["creativity", "passion", "handmade"], "target_audience": "artists, makers, entrepreneurs", "suggested_products": ["studio decor", "aprons"] }
        ]
    }
};

const colorPalettes = {
    // Style Keywords
    "80s Retro": ["#FF00FF", "#00FFFF", "#FFFF00"], // Magenta, Cyan, Yellow
    "Cyberpunk": ["#EC4899", "#A855F7", "#3B82F6"], // Pink, Purple, Blue
    "Art Deco": ["#000000", "#D4AF37", "#EAEAEA"], // Black, Gold, Silver
    "Cottagecore": ["#A3B18A", "#F4A261", "#E76F51"], // Sage, Sandy Brown, Burnt Sienna
    "Solarpunk": ["#2A9D8F", "#E9C46A", "#FFFFFF"], // Teal, Gold, White
    "Vaporwave": ["#FF71CE", "#01CDFE", "#05FFA1"], // Pink, Blue, Green
    // Emotion Keywords
    "Serene / Tranquil / Zen": ["#A8DADC", "#457B9D", "#1D3557"], // Light Blue, Mid Blue, Dark Blue
    "Energetic / Dynamic / Vibrant": ["#F94144", "#F8961E", "#F9C74F"], // Red, Orange, Yellow
    "Gothic / Dark": ["#2B2D42", "#8D99AE", "#EF233C"], // Dark Gray, Light Gray, Red
    "Hopeful / Optimistic": ["#FFD166", "#06D6A0", "#118AB2"], // Yellow, Green, Blue
    "Nostalgic / Retro": ["#E07A5F", "#3D405B", "#81B29A"], // Terracotta, Dark Blue, Sage
};

const ALL_COUNTRY_CODES = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"];

const ALL_LANGUAGE_CODES = ["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "gb", "us", "um", "uy", "uz", "vu", "ve", "vn", "vg", "vi", "wf", "EH", "YE", "ZM", "ZW"];

// --- SUPABASE SETUP ---
// We are importing the Supabase library directly into the browser
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// IMPORTANT: Replace these with your actual Supabase URL and Key
const supabaseUrl = 'https://qvdtjaydpvemgpyplwei.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2ZHRqYXlkcHZlbWdweXBsd2VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMTA1NjUsImV4cCI6MjA3MjU4NjU2NX0.grz8Fgu6PC5NBazvsy0dz_64254mBdlSH6o-sUDHPms';
const supabase = createClient(supabaseUrl, supabaseKey);

// --- DOM ELEMENTS ---
const fusionAssembleBtn = document.getElementById('fusionAssembleBtn');
const findHolidaysBtn = document.getElementById('findHolidaysBtn');
const holidayModal = document.getElementById('holidayModal');
const holidayModalTitle = document.getElementById('holidayModalTitle');
const holidayModalCloseBtn = document.getElementById('holidayModalCloseBtn');
const holidayList = document.getElementById('holidayList');
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
const audienceBtn = document.getElementById('audienceBtn');
const audienceModal = document.getElementById('audienceModal');
const audienceModalCloseBtn = document.getElementById('audienceModalCloseBtn');
const audienceModalSaveBtn = document.getElementById('audienceModalSaveBtn');
const audienceModalClearBtn = document.getElementById('audienceModalClearBtn');
const activeAudienceDisplay = document.getElementById('activeAudienceDisplay');
const audienceInputs = {
    gender: document.getElementById('audienceGender'),
    age: document.getElementById('audienceAge'),
    lifeStage: document.getElementById('audienceLifeStage'),
    occupation: document.getElementById('audienceOccupation'),
    market: document.getElementById('audienceMarket'),
    language: document.getElementById('audienceLanguage'),
    culture: document.getElementById('audienceCulture'),
    values: document.getElementById('audienceValues'),
    interests: document.getElementById('audienceInterests'),
    media: document.getElementById('audienceMedia')
};

const refinementPanel = document.getElementById('refinementPanel');
const refinementBtns = document.getElementById('refinementBtns');
const paletteOutput = document.getElementById('paletteOutput');

// NEW: Lexicon specific DOM elements
const manualLexiconSelect = document.getElementById('manualLexicon');
const customLexiconInput = document.getElementById('customLexicon');


// --- STATE ---
let currentSeed = null;
let currentConstraint = null;
let lockedComponents = {};
let currentComponents = {};

let currentFormat = 'brief';
let currentMode = 'inspiration';
// Removed graphicEffects from fusionSelections initialization
let fusionSelections = { subject: [], style: [], emotionTone: [], graphicEffects: [], mediumMateriality: [], actionProcess: [], contextComposition: [], conceptualMetaphorical: [], creativeConstraints: [], culturalAnchor: [], lexicon: [] };
let currentAudience = {};

// --- HELPER FUNCTIONS ---
function mulberry32(a) {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 429497296;
    }
}

function getRandomElement(arr, randomFunc) {
    if (!arr || arr.length === 0) return { name: 'N/A', novelty_tier: 'N/A' };
    // Handle objects with 'name' property or direct strings
    const item = arr[Math.floor(randomFunc() * arr.length)];
    return typeof item === 'string' ? { name: item } : item;
}

const keyToDisplayName = {
    designerPersonas: 'Designer Persona',
    subject: 'Subject', subject_2: 'Subject 2',
    style: 'Style', style_2: 'Style 2',
    emotionTone: 'Emotion/Tone',
    graphicEffects: 'Graphic Effect', // ADDED graphicEffects
    mediumMateriality: 'Materiality',
    actionProcess: 'Process',
    contextComposition: 'Composition',
    conceptualMetaphorical: 'Concept',
    creativeConstraints: 'Creative Constraint',
    culturalAnchor: 'Culture/Event Anchor',
    lexicon: 'Lexicon' // NEW: Added lexicon
};

// --- AUTOSAVE SYSTEM using localStorage ---

const AUTOSAVE_KEY = 'promptArchitectState';

function saveStateToLocalStorage() {
    const allInputs = document.querySelectorAll('#appContainer input, #appContainer select, #appContainer textarea');
    const inputValues = {};
    allInputs.forEach(el => {
        if (el.id) {
            inputValues[el.id] = el.value;
        }
    });

    const stateToSave = {
        currentMode,
        currentConstraint,
        fusionSelections,
        currentAudience,
        currentComponents,
        lockedComponents,
        inputValues
    };

    try {
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(stateToSave));
        // console.log("State saved to localStorage.");
    } catch (e) {
        console.error("Failed to save state to localStorage:", e);
    }
}

function loadStateFromLocalStorage() {
    try {
        const savedStateJSON = localStorage.getItem(AUTOSAVE_KEY);
        if (!savedStateJSON) return;

        const savedState = JSON.parse(savedStateJSON);

        // Restore state variables
        currentMode = savedState.currentMode || 'inspiration';
        currentConstraint = savedState.currentConstraint || null;
        // Ensure fusionSelections has all keys, even if not saved previously
        fusionSelections = {
            subject: [], style: [], emotionTone: [], graphicEffects: [], mediumMateriality: [], actionProcess: [], contextComposition: [], conceptualMetaphorical: [], creativeConstraints: [], culturalAnchor: [], lexicon: [],
            ...savedState.fusionSelections
        };
        currentAudience = savedState.currentAudience || {};
        currentComponents = savedState.currentComponents || {};
        lockedComponents = savedState.lockedComponents || {};

        // Restore UI values
        if (savedState.inputValues) {
            for (const id in savedState.inputValues) {
                const el = document.getElementById(id);
                if (el) {
                    el.value = savedState.inputValues[id];
                }
            }
        }

        // Update UI to reflect the loaded state
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === currentMode);
        });
        inspirationModeContainer.classList.toggle('hidden', currentMode !== 'inspiration');
        creationModeContainer.classList.toggle('hidden', currentMode !== 'creation');
        fusionModeContainer.classList.toggle('hidden', currentMode !== 'fusion');

        renderPills();
        renderFusionPills();
        updateAudienceDisplay();
        updateOutputContent();
        if (currentConstraint) {
            constraintOutput.innerHTML = `<strong>Constraint:</strong> ${currentConstraint}`;
        }

        console.log("State loaded from localStorage.");

    } catch (e) {
        console.error("Failed to load state from localStorage:", e);
        localStorage.removeItem(AUTOSAVE_KEY); // Clear corrupted data
    }
}

// Add a single event listener to the app container to trigger autosave on any change
const appContainer = document.getElementById('appContainer');
if (appContainer) {
    appContainer.addEventListener('change', saveStateToLocalStorage); // For <select>
    appContainer.addEventListener('input', saveStateToLocalStorage);  // For text <input> and <textarea>
    appContainer.addEventListener('click', (e) => { // For buttons that change state
        if (e.target.closest('.add-component-btn, .pill button, .custom-toggle-btn, .custom-audience-toggle-btn, #modalAddCustomBtn')) {
            setTimeout(saveStateToLocalStorage, 100); // Timeout to allow state to update first
        }
    });
}

// --- AUDIENCE PROFILE FEATURE ---

const audienceFields = [
    { key: 'lifeStage', defaultOptions: ['Any Stage', 'Student', 'Young Professional', 'Parent', 'Retiree'] },
    { key: 'occupation', defaultOptions: [] },
    { key: 'culture', defaultOptions: [] },
    { key: 'values', defaultOptions: [] },
    { key: 'interests', defaultOptions: [] },
    { key: 'media', defaultOptions: [] }
];

async function populateAudienceDropdowns(savedProfile = {}) {
    // Populate static dropdowns
    const staticOptions = {
        gender: ['Universal / Gender-Neutral', 'Male-Targeted', 'Female-Targeted'],
        age: ['Any Age', '13-17', '18-24', '25-34', '35-44', '45+'],
    };
    for (const key in staticOptions) {
        const select = document.getElementById(`audience${key.charAt(0).toUpperCase() + key.slice(1)}`);
        select.innerHTML = '';
        staticOptions[key].forEach(opt => select.add(new Option(opt, opt)));
    }

    // --- NEW: Populate COMPLETE country and language lists programmatically ---
    try {
        const countrySelect = document.getElementById('audienceMarket');
        const languageSelect = document.getElementById('audienceLanguage');
        countrySelect.innerHTML = '<option value="Universal">Universal</option>';
        languageSelect.innerHTML = '';

        // Generate country names from codes
        const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
        const countries = ALL_COUNTRY_CODES.map(code => ({
            code: code,
            name: regionNames.of(code)
        })).sort((a, b) => a.name.localeCompare(b.name));

        countries.forEach(country => {
            countrySelect.add(new Option(country.name, country.code));
        });

        // Generate language names from codes
        const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
        const languages = ALL_LANGUAGE_CODES.map(code => ({
            code: code,
            name: languageNames.of(code)
        })).sort((a, b) => a.name.localeCompare(b.name));

        languages.forEach(lang => {
            languageSelect.add(new Option(lang.name, lang.code));
        });

        // Set defaults
        countrySelect.value = 'Universal';
        languageSelect.value = 'en';

    } catch (e) { console.error("Intl API not fully supported or list failed:", e); }


    // Fetch and populate saved ideas for dynamic fields (this logic remains the same)
    let savedIdeas = {};
    const audienceComponentKeys = audienceFields.map(f => `audience_${f.key}`);
    const { data: ideas } = await supabase.from('ideas').select('component_key, value').in('component_key', audienceComponentKeys);
    if (ideas) {
        ideas.forEach(idea => {
            if (!savedIdeas[idea.component_key]) savedIdeas[idea.component_key] = [];
            savedIdeas[idea.component_key].push(idea.value);
        });
    }

    audienceFields.forEach(field => {
        const select = document.getElementById(`audience${field.key.charAt(0).toUpperCase() + field.key.slice(1)}Select`);
        if (!select) return;
        select.innerHTML = '';
        if (field.defaultOptions.length > 0) {
            field.defaultOptions.forEach(opt => select.add(new Option(opt, opt)));
        } else {
            select.innerHTML = `<option value="">-- Select a saved ${field.key} --</option>`;
        }
        const saved = savedIdeas[`audience_${field.key}`];
        if (saved && saved.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = '--- Your Saved Ideas ---';
            saved.forEach(value => optgroup.appendChild(new Option(value, value)));
            select.appendChild(optgroup);
        }
    });

    // Set selected values from the loaded profile
    for (const key in savedProfile) {
        // This logic now correctly maps snake_case from DB to camelCase in our IDs
        const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
        const el = document.getElementById(`audience${camelKey.charAt(0).toUpperCase() + camelKey.slice(1)}`) || document.getElementById(`audience${camelKey.charAt(0).toUpperCase() + camelKey.slice(1)}Select`);
        if (el) el.value = savedProfile[key];
    }
}


function updateAudienceDisplay() {
    if (Object.keys(currentAudience).length === 0 || Object.values(currentAudience).every(v => !v || v.startsWith('Any'))) {
        activeAudienceDisplay.classList.add('hidden');
        currentAudience = {};
        return;
    }
    let summary = Object.entries(currentAudience)
        .filter(([key, value]) => value && !value.startsWith('Any') && value !== 'Universal')
        .map(([key, value]) => {
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return `<strong>${formattedKey}:</strong> ${value}`;
        })
        .join(' &bull; ');
    activeAudienceDisplay.innerHTML = `👤 Targeting: ${summary}`;
    activeAudienceDisplay.classList.remove('hidden');
}

async function saveAudienceProfile() {
    currentAudience = {};
    const newIdeasToSave = [];

    // Handle static fields
    ['gender', 'age', 'market', 'language'].forEach(key => {
        const el = document.getElementById(`audience${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (el) currentAudience[key] = el.value;
    });

    // Handle dynamic fields with custom input
    audienceFields.forEach(field => {
        const key = field.key;
        const capKey = key.charAt(0).toUpperCase() + key.slice(1);
        const selectEl = document.getElementById(`audience${capKey}Select`);
        const customEl = document.getElementById(`audience${capKey}Custom`);
        let value = '';

        if (customEl && !customEl.classList.contains('hidden') && customEl.value.trim() !== '') {
            value = customEl.value.trim();
            newIdeasToSave.push({ component_key: `audience_${key}`, value: value });
        } else if (selectEl) {
            value = selectEl.value;
        }
        currentAudience[key] = value;
    });

    // Save new custom ideas to the 'ideas' table
    if (newIdeasToSave.length > 0) {
        await saveIdeaToSupabase(newIdeasToSave);
    }

    // Save the entire profile to the 'audience_profiles' table
    try {
        const { error } = await supabase.from('audience_profiles').upsert({ id: 1, ...currentAudience });
        if (error) throw error;
        console.log("Audience profile saved.");
    } catch (e) { console.error("Could not save audience profile:", e.message); }

    updateAudienceDisplay();
    audienceModal.classList.add('hidden');
}


function clearAudienceProfile() {
    for (const key in currentAudience) {
        const el = document.getElementById(`audience${key.charAt(0).toUpperCase() + key.slice(1)}`) || document.getElementById(`audience${key.charAt(0).toUpperCase() + key.slice(1)}Select`);
        if (el) {
            if (el.tagName === 'SELECT') el.selectedIndex = 0;
            else el.value = '';
        }
    }
    currentAudience = {};
    updateAudienceDisplay();
    // Also clear from DB
    supabase.from('audience_profiles').delete().eq('id', 1).then();
    audienceModal.classList.add('hidden');
}

async function loadAudienceProfile() {
    try {
        const { data, error } = await supabase.from('audience_profiles').select('*').limit(1).single();
        if (error) throw error;
        if (data) {
            currentAudience = data;
            // The populate function will now handle setting the values
            await populateAudienceDropdowns(currentAudience);
            updateAudienceDisplay();
        } else {
            await populateAudienceDropdowns();
        }
    } catch (e) {
        console.warn("Could not load audience profile, starting fresh.", e.message);
        await populateAudienceDropdowns();
    }
}

// --- EVENT & CULTURE ENGINE ---

async function fetchHolidays() {
    const countrySelect = document.getElementById('audienceMarket');
    const countryCode = countrySelect.value;
    const countryName = countrySelect.options[countrySelect.selectedIndex].text;

    if (!countryCode || countryCode === 'Universal') {
        alert("Please select a specific country to find holidays.");
        return;
    }

    holidayModalTitle.textContent = `Holidays in ${countryName}`;
    holidayList.innerHTML = `<p class="text-gray-400">Fetching holidays...</p>`;
    holidayModal.classList.remove('hidden');

    try {
        const year = new Date().getFullYear();
        const response = await fetch(`/api/holidays?countryCode=${countryCode}&year=${year}`);
        if (!response.ok) throw new Error('Failed to fetch holidays from server.');

        const holidays = await response.json();
        holidayList.innerHTML = '';
        if (holidays.length > 0) {
            holidays.forEach(holiday => {
                const item = document.createElement('div');
                item.className = 'p-3 hover:bg-gray-700 rounded-lg cursor-pointer';
                item.textContent = holiday;
                item.dataset.holiday = holiday;
                holidayList.appendChild(item);
            });
        } else {
            holidayList.innerHTML = `<p class="text-gray-400">No public holidays found for ${countryName} this year.</p>`;
        }
    } catch (e) {
        holidayList.innerHTML = `<p class="text-red-400">Error fetching holidays: ${e.message}</p>`;
    }
}

// Event Listeners for Holiday Finder
findHolidaysBtn.addEventListener('click', fetchHolidays);
holidayModalCloseBtn.addEventListener('click', () => holidayModal.classList.add('hidden'));

holidayList.addEventListener('click', (e) => {
    if (e.target.dataset.holiday) {
        const holiday = e.target.dataset.holiday;
        const culturalContextInput = document.getElementById('audienceCultureCustom');
        const culturalContextSelect = document.getElementById('audienceCultureSelect');

        // Switch to the custom input view in the audience modal
        culturalContextSelect.classList.add('hidden');
        culturalContextInput.classList.remove('hidden');

        // Append the holiday to the cultural context field
        if (culturalContextInput.value.trim() !== '') {
            culturalContextInput.value += `, ${holiday}`;
        } else {
            culturalContextInput.value = holiday;
        }

        holidayModal.classList.add('hidden');
    }
});

// Event Listeners for Audience Modal
audienceBtn.addEventListener('click', () => audienceModal.classList.remove('hidden'));
audienceModalCloseBtn.addEventListener('click', () => audienceModal.classList.add('hidden'));
audienceModalSaveBtn.addEventListener('click', saveAudienceProfile);
audienceModalClearBtn.addEventListener('click', clearAudienceProfile);

audienceModal.addEventListener('click', (e) => {
    const button = e.target.closest('.custom-audience-toggle-btn');
    if (!button) return;
    const component = button.dataset.component;
    const selectEl = document.getElementById(`${component}Select`);
    const inputEl = document.getElementById(`${component}Custom`);
    selectEl.classList.toggle('hidden');
    inputEl.classList.toggle('hidden');
});

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

creationModeContainer.addEventListener('click', (e) => {
    const button = e.target.closest('.custom-toggle-btn');
    if (!button) return;
    const component = button.dataset.component;
    const selectEl = document.getElementById(`manual${component}`);
    const inputEl = document.getElementById(`custom${component}`);
    selectEl.classList.toggle('hidden');
    inputEl.classList.toggle('hidden');
});
fusionAssembleBtn.addEventListener('click', generateBrief);

constraintBtn.addEventListener('click', () => {
    const constraints = stylesData.masterFramework.creativeConstraints;
    if (constraints && constraints.length > 0) {
        const randomFunc = Math.random;
        const selectedConstraint = getRandomElement(constraints, randomFunc);
        currentConstraint = selectedConstraint.name;
        constraintOutput.innerHTML = `<strong>Constraint:</strong> ${currentConstraint}`;
        updateOutputContent();
    }
});

generateBtn.addEventListener('click', () => {
    // Ensure modifierSelect is populated before generating a brief in inspiration mode
    // This is a safeguard, as the DOMContentLoaded should handle it.
    if (inspirationSelects.modifier.length === 0) {
        populateInspirationDropdowns(); // Re-populate if somehow empty
    }
    generateBrief();
});

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

    // --- MAIN LOOP TO POPULATE DROPDOWNS ---
    for (const key in stylesData.masterFramework) {
        if (key === 'designerPersonas') continue; // Handled separately

        const selectElement = document.getElementById(`manual${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (selectElement) {
            selectElement.innerHTML = '<option value="">-- Optional --</option>';

            // Add saved ideas
            if (savedIdeas[key] && savedIdeas[key].length > 0) {
                const savedOptgroup = document.createElement('optgroup');
                savedOptgroup.label = "--- Your Saved Ideas ---";
                savedIdeas[key].forEach(value => savedOptgroup.appendChild(new Option(value, value)));
                selectElement.appendChild(savedOptgroup);
            }

            // Add premade ideas
            if (key === 'subject' || key === 'culturalAnchor' || key === 'lexicon') { // Modified: Handle lexicon like subject/culturalAnchor
                stylesData.masterFramework[key].forEach(category => {
                    // Handle cases where examples might be objects or strings
                    const examples = category.examples.map(ex => typeof ex === 'string' ? ex : ex.name);
                    const optgroup = document.createElement('optgroup');
                    optgroup.label = `--- ${category.categoryName || category.name} ---`; // Use category.name for lexicon
                    examples.forEach(example => optgroup.appendChild(new Option(example, example)));
                    selectElement.appendChild(optgroup);
                });
            } else {
                const premadeOptgroup = document.createElement('optgroup');
                premadeOptgroup.label = "--- Premade Ideas ---";
                stylesData.masterFramework[key].forEach(item => premadeOptgroup.appendChild(new Option(item.name, item.name)));
                selectElement.appendChild(premadeOptgroup);
            }
        }
    } // --- END OF THE MAIN LOOP ---

    // --- POPULATE MODIFIERS AND PERSONAS ---
    const manualModifierSelect = document.getElementById('manualModifier');
    const fusionModifierSelect = document.getElementById('fusionModifier');

    // Populate manualModifierSelect and fusionModifierSelect directly from inspirationSelects.modifier
    [manualModifierSelect, fusionModifierSelect].forEach(selectEl => {
        if (selectEl) {
            selectEl.innerHTML = ''; // Clear existing options
            inspirationSelects.modifier.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.value;
                option.textContent = opt.text;
                if (modifierDescriptions[opt.value]) {
                    option.title = modifierDescriptions[opt.value];
                }
                selectEl.appendChild(option);
            });
        }
    });

    // Populate Personas
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
            categories[category].forEach(name => optgroup.appendChild(new Option(name, name)));
            manualPersonaSelect.appendChild(optgroup);
        }
    }
}

function populateInspirationDropdowns() {
    for (const id in inspirationSelects) {
        const selectEl = document.getElementById(id);
        if (selectEl) {
            selectEl.innerHTML = ''; // Clear existing options
            inspirationSelects[id].forEach(opt => {
                const option = document.createElement('option');
                option.value = opt.value;
                option.textContent = opt.text;
                if (id === 'modifier' && modifierDescriptions[opt.value]) {
                    option.title = modifierDescriptions[opt.value];
                }
                selectEl.appendChild(option);
            });
        }
    }
}


async function generateBrief() {
    refinementPanel.classList.add('hidden'); // Hide panel at start of new generation
    paletteOutput.innerHTML = ''; // Clear old palette suggestions
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
                if (key === 'creativeConstraints' || key === 'designerPersonas' || key === 'culturalAnchor' || key === 'lexicon') {
                    filteredFramework[key] = stylesData.masterFramework[key];
                } else {
                    // Ensure examples are handled correctly if they are objects
                    if (key === 'subject') {
                        filteredFramework[key] = stylesData.masterFramework[key].map(category => ({
                            ...category,
                            examples: category.examples.filter(item => {
                                const itemNovelty = typeof item === 'string' ? 1 : item.novelty_tier; // Default to tier 1 if string
                                return allowedTiers.includes(itemNovelty);
                            })
                        })).filter(category => category.examples.length > 0);
                    } else {
                        filteredFramework[key] = filterByTier(stylesData.masterFramework[key]);
                    }
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
                case 'hybrid-asset-collage': componentKeys = ['subject', 'subject', 'style', 'graphicEffects']; break; // ADDED graphicEffects
                case 'symbiotic-fusion': componentKeys = ['subject', 'subject', 'style', 'emotionTone']; break;
                case 'multi-style-fusion': componentKeys = ['subject', 'style', 'style', 'emotionTone', 'conceptualMetaphorical']; break;
                case 'thematic-clash': componentKeys = ['subject', 'subject', 'style', 'actionProcess', 'conceptualMetaphorical']; break;
                case 'maximalist': componentKeys = ['subject', 'style', 'emotionTone', 'mediumMateriality', 'actionProcess', 'contextComposition', 'conceptualMetaphorical', 'graphicEffects']; break; // ADDED graphicEffects
                case 'vintage-authentic': componentKeys = ['subject', 'style', 'mediumMateriality', 'contextComposition', 'graphicEffects']; break; // ADDED graphicEffects
                case 'clean-tech': componentKeys = ['subject', 'style', 'contextComposition', 'graphicEffects']; break; // ADDED graphicEffects
                case 'punk-zine': componentKeys = ['subject', 'style', 'actionProcess', 'emotionTone', 'graphicEffects']; break; // ADDED graphicEffects
                case 'ornate-elegance': componentKeys = ['subject', 'style', 'mediumMateriality', 'graphicEffects']; break; // ADDED graphicEffects
                case 'generative-system': componentKeys = ['subject', 'actionProcess']; break;
                case 'dataviz-mythology': componentKeys = ['conceptualMetaphorical', 'subject', 'style']; break;
                case 'material-inversion': componentKeys = ['subject', 'mediumMateriality']; break;
                case 'conceptual-surrealism': componentKeys = ['subject', 'conceptualMetaphorical', 'style']; break;
                case 'kinetic-typography': componentKeys = ['subject', 'actionProcess']; break;
                case 'sensory-swap': componentKeys = ['subject', 'emotionTone', 'style']; break;
                case 'lexicon-definition': componentKeys = ['lexicon', 'style', 'emotionTone']; break; // NEW: Lexicon modifier
            }
        } else {
            switch (architecture) {
                case 'minimalist': componentKeys = ['subject', 'style']; break;
                case 'high-impact': componentKeys = ['subject', 'style', 'conceptualMetaphorical', 'actionProcess']; break;
                case 'maximalist': componentKeys = ['subject', 'style', 'emotionTone', 'mediumMateriality', 'actionProcess', 'contextComposition', 'conceptualMetaphorical', 'graphicEffects']; break; // ADDED graphicEffects
                case 'effects-focused': componentKeys = ['subject', 'style', 'mediumMateriality', 'graphicEffects']; break; // ADDED graphicEffects
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
            const example = getRandomElement(category.examples, randomFunc);
            const exampleName = typeof example === 'string' ? example : example.name;
            const noveltyTier = typeof example === 'string' ? category.novelty_tier : example.novelty_tier || category.novelty_tier;
            return { name: exampleName, novelty_tier: noveltyTier, category: category.categoryName, example: exampleName };
        };

        const getLexiconComponent = (randomFunc) => { // NEW: Helper for lexicon
            const lexiconCategory = getRandomElement(filteredFramework.lexicon, randomFunc);
            if (!lexiconCategory || !lexiconCategory.examples || lexiconCategory.examples.length === 0) return { name: 'N/A', definition: 'N/A' };
            const word = getRandomElement(lexiconCategory.examples, randomFunc);
            return word; // word is already an object with name and definition
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
                    } else if (key === 'culturalAnchor') {
                        const category = getRandomElement(filteredFramework[key], randomFunc);
                        const example = getRandomElement(category.examples, randomFunc);
                        newComponents[unique_key] = { name: example.name || example, category: category.categoryName };
                    } else if (key === 'lexicon') { // NEW: Handle lexicon randomization
                        newComponents[unique_key] = getLexiconComponent(randomFunc);
                    }
                    else {
                        newComponents[unique_key] = getRandomElement(filteredFramework[key], randomFunc);
                    }
                }
            });
        }
        Object.assign(currentComponents, newComponents); // Merge new components

    } else if (currentMode === 'creation') {
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
            if (categoryKey === 'culturalAnchor') {
                for (const category of stylesData.masterFramework.culturalAnchor) {
                    if (category.examples.includes(name)) {
                        return { name: name, category: category.categoryName };
                    }
                }
                return null;
            }
            if (categoryKey === 'lexicon') { // NEW: Handle lexicon lookup
                for (const category of stylesData.masterFramework.lexicon) {
                    const foundWord = category.examples.find(word => word.name === name);
                    if (foundWord) return foundWord;
                }
                return null;
            }

            const items = stylesData.masterFramework[categoryKey];
            if (categoryKey === 'subject') {
                for (const category of items) {
                    const foundExample = category.examples.find(ex => (typeof ex === 'string' ? ex : ex.name) === name);
                    if (foundExample) {
                        const exampleName = typeof foundExample === 'string' ? foundExample : foundExample.name;
                        const noveltyTier = typeof foundExample === 'string' ? category.novelty_tier : foundExample.novelty_tier || category.novelty_tier;
                        return { name: exampleName, novelty_tier: noveltyTier, category: category.categoryName, example: exampleName };
                    }
                }
            } else {
                return items.find(item => item.name === name) || null;
            }
            return null;
        };

        const componentKeysInOrder = ['designerPersonas', 'subject', 'style', 'emotionTone', 'mediumMateriality', 'actionProcess', 'contextComposition', 'conceptualMetaphorical', 'graphicEffects', 'creativeConstraints', 'culturalAnchor', 'lexicon']; // ADDED graphicEffects
        const ideasToSave = [];
        componentKeysInOrder.forEach(key => {
            const capKey = key.charAt(0).toUpperCase() + key.slice(1);
            const customInput = document.getElementById(`custom${capKey}`);
            const manualSelect = document.getElementById(`manual${capKey}`);
            let selectedValue = '';
            let isCustom = customInput && !customInput.classList.contains('hidden') && customInput.value.trim() !== '';
            if (isCustom) {
                selectedValue = customInput.value.trim();
                // For custom lexicon, we need a dummy definition
                const customComponent = (key === 'lexicon') ? { name: selectedValue, definition: `The user-defined concept of '${selectedValue}'.` } : { name: selectedValue, novelty_tier: 'Custom', category: 'Custom' };
                newComponents[key] = customComponent;
                ideasToSave.push({ component_key: key, value: selectedValue });
            } else if (manualSelect) {
                selectedValue = manualSelect.value;
                if (selectedValue) { newComponents[key] = findComponentByName(key, selectedValue); }
            }
        });
        if (ideasToSave.length > 0) {
            saveIdeaToSupabase(ideasToSave); // Using the helper function now
        }
        Object.assign(currentComponents, newComponents); // Merge new components

    } else if (currentMode === 'fusion') {
        if (Object.values(fusionSelections).every(arr => arr.length === 0)) {
            alert("Please select at least one component for Fusion Mode.");
            return; // Stop the function here
        }

        const persona = { name: "Master Conceptual Artist", category: "By Artist's State & Tool" };
        const fusionModifierSelect = document.getElementById('fusionModifier');

        const subjects = fusionSelections.subject;
        const styles = fusionSelections.style;
        const emotions = fusionSelections.emotionTone;
        const graphicEffects = fusionSelections.graphicEffects; // ADDED graphicEffects
        const materials = fusionSelections.mediumMateriality;
        const processes = fusionSelections.actionProcess;
        const compositions = fusionSelections.contextComposition;
        const concepts = fusionSelections.conceptualMetaphorical;
        const constraints = fusionSelections.creativeConstraints;
        const culturalAnchors = fusionSelections.culturalAnchor;
        const lexicons = fusionSelections.lexicon; // NEW: Lexicon for fusion
        const modifier = {
            value: fusionModifierSelect.value,
            text: fusionModifierSelect.value !== 'none' ? fusionModifierSelect.options[fusionModifierSelect.selectedIndex].text : ''
        };

        currentSeed = 'fusion';
        seedInput.value = 'N/A (Fusion)';

        const fusionComponents = {
            designerPersonas: persona,
            subject: { name: subjects.join(' + ') },
            style: { name: styles.join(' + ') },
            emotionTone: { name: emotions.join(' + ') },
            graphicEffects: { name: graphicEffects.join(' + ') }, // ADDED graphicEffects
            mediumMateriality: { name: materials.join(' + ') },
            actionProcess: { name: processes.join(' + ') },
            contextComposition: { name: compositions.join(' + ') },
            conceptualMetaphorical: { name: concepts.join(' + ') },
            creativeConstraints: { name: constraints.join(' + ') },
            culturalAnchor: { name: culturalAnchors.join(' + ') },
            lexicon: { name: lexicons.map(l => l.name).join(' + ') }, // NEW: Lexicon for fusion
            _subjects: subjects,
            _styles: styles,
            _emotions: emotions,
            _graphicEffects: graphicEffects, // ADDED graphicEffects
            _materials: materials,
            _processes: processes,
            _compositions: compositions,
            _concepts: concepts,
            _constraints: constraints,
            _culturalAnchors: culturalAnchors,
            _lexicons: lexicons, // NEW: Lexicon for fusion
            _modifier: modifier
        };

        currentComponents = fusionComponents;
        renderPills();
        updateOutputContent();
        copyBtn.classList.remove('hidden');
        return;
    }

    lockedComponents = {};
    renderPills();
    updateOutputContent();
    copyBtn.classList.remove('hidden');
    refinementPanel.classList.remove('hidden');
}

function renderPills() {
    pillsContainer.innerHTML = '';
    for (const key in currentComponents) {
        const component = currentComponents[key];
        // Skip internal fusion keys
        if (key.startsWith('_')) continue;

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
        if (key === 'culturalAnchor') {
            displayName = component.category || 'Culture/Event Anchor';
        }
        if (key === 'lexicon') { // NEW: Display lexicon category
            displayName = 'Lexicon Word';
        }
        if (key === 'graphicEffects') { // ADDED graphicEffects
            displayName = 'Graphic Effect';
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
        if (key === 'designerPersonas' || key === 'creativeConstraints' || key.startsWith('_')) continue; // Skip internal fusion keys
        const component = currentComponents[key];
        if (!component || !component.name) continue;
        const displayName = keyToDisplayName[key] || key;
        const tierInfo = component.novelty_tier ? `(Tier ${component.novelty_tier})` : '';
        let categoryPrefix = (component.category && component.category !== 'Custom') ? `${component.category}: ` : '';
        if (key === 'subject' && component.novelty_tier === 'Custom') {
            categoryPrefix = '';
        }
        // For lexicon, display name and definition
        if (key === 'lexicon' && component.definition) {
            briefText += `• ${displayName}: ${component.name} - "${component.definition}"\n`;
        } else {
            briefText += `• ${displayName}: ${categoryPrefix}${component.name} ${tierInfo}\n`;
        }
    }
    return briefText;
}

function formatAsAIPrompt() {
    // User's Baseline Requirement - ALWAYS FRONT-LOADED
    let finalPrompt = "T-shirt graphic design, a clean and high-impact icon, vector style, bold outlines, isolated graphic element on a plain white background, no shadows, no complex 3D rendering.";

    // --- Audience Preamble Builder ---
    let audiencePreamble = '';
    if (Object.keys(currentAudience).length > 0) {
        const profileParts = [];
        if (currentAudience.gender && currentAudience.gender !== 'Universal / Gender-Neutral') profileParts.push(currentAudience.gender);
        if (currentAudience.age && currentAudience.age !== 'Any Age') profileParts.push(`${currentAudience.age} age group`);
        if (currentAudience.lifeStage && currentAudience.lifeStage !== 'Any Stage') profileParts.push(currentAudience.lifeStage);
        if (currentAudience.occupation) profileParts.push(`who works as a ${currentAudience.occupation}`);
        if (currentAudience.market && currentAudience.market !== 'Universal') profileParts.push(`from ${currentAudience.market}`);
        if (currentAudience.values) profileParts.push(`values ${currentAudience.values}`);
        if (currentAudience.interests) profileParts.push(`is interested in ${currentAudience.interests}`);
        if (currentAudience.media) profileParts.push(`and consumes media like ${currentAudience.media}`);

        if (profileParts.length > 0) {
            audiencePreamble = `The target customer for this design is: ${profileParts.join(', ')}. `;
        }
        if (currentAudience.culture) {
            audiencePreamble += `\n**Important Cultural Context:** ${currentAudience.culture}\n\n`;
        }
    }

    const persona = currentComponents.designerPersonas;
    let personaPreamble = '';
    if (persona && persona.name) {
        personaPreamble = `Act as a ${persona.name}. `;
    }

    // Combine persona and audience preambles
    const fullPreamble = audiencePreamble ? `${personaPreamble}With that target customer in mind, create the following design. ${audiencePreamble}` : personaPreamble;

    const c = currentComponents;
    let coreDesignDescription = '';
    let graphicEffectDescription = c.graphicEffects?.name ? `, with a "${c.graphicEffects.name}" effect` : ''; // Use selected graphic effect

    // --- UPDATED FUSION PROMPT LOGIC ---
    if (currentMode === 'fusion' && c._subjects) {
        const { _subjects, _styles, _emotions, _graphicEffects, _materials, _processes, _compositions, _concepts, _constraints, _culturalAnchors, _lexicons, _modifier } = c;
        let clauses = [];
        if (_subjects.length > 0) clauses.push(`The core subjects are a fusion of: "${_subjects.join('", "')}".`);
        if (_styles.length > 0) clauses.push(`The visual style is a hybrid of: "${_styles.join('", "')}".`);
        if (_emotions.length > 0) clauses.push(`The emotional tone is a complex blend of: "${_emotions.join('", "')}".`);
        if (_materials.length > 0) clauses.push(`The design should appear crafted from: "${_materials.join('", "')}".`);
        if (_processes.length > 0) clauses.push(`The subjects are depicted undergoing these processes: "${_processes.join('", "')}".`);
        if (_compositions.length > 0) clauses.push(`The composition is a unique synthesis of: "${_compositions.join('", "')}".`);
        if (_concepts.length > 0) clauses.push(`The design explores these abstract concepts: "${_concepts.join('", "')}".`);
        if (_culturalAnchors.length > 0) clauses.push(`The design is anchored in these cultural themes or events: "${_culturalAnchors.join('", "')}".`);
        if (_lexicons.length > 0) clauses.push(`The design visually interprets the words: "${_lexicons.map(l => `${l.name} (${l.definition})`).join('", "')}".`);
        if (_graphicEffects.length > 0) clauses.push(`The design incorporates these graphic effects: "${_graphicEffects.join('", "')}".`); // ADDED graphicEffects

        let mainBody = clauses.join(' ');

        if (_modifier && _modifier.value !== 'none') {
            mainBody = `The entire conceptual fusion must be presented within the structure of a "${_modifier.text}" design. ${mainBody}`;
        }

        coreDesignDescription = `${fullPreamble}A masterpiece T-shirt graphic. The design is a complex conceptual fusion. ${mainBody} The final output must be a single, cohesive, and harmonious design.`;

        if (_constraints.length > 0) {
            coreDesignDescription += ` \n\n**Important Constraints:** ${_constraints.join('. ')}.`;
        }

    } else {
        // --- INSPIRATION/CREATION LOGIC ---
        let modifierValue = (currentMode === 'inspiration') ? modifierSelect.value : document.getElementById('manualModifier').value;

        if (modifierValue === 'generative-system') {
            coreDesignDescription = `${fullPreamble}A t-shirt design presented as a generative system in 3-4 sequential frames or panels. The design illustrates the process of "${c.actionProcess.name}" progressively transforming the subject of "${c.subject.name}". The visual style must be clear and diagrammatic.`;
        } else if (modifierValue === 'dataviz-mythology') {
            coreDesignDescription = `${fullPreamble}A t-shirt design in the style of a clean, modern data visualization or infographic, in a ${c.style.name} style. The subject, "${c.subject.name}", must be rendered as a diagram that visually explains the abstract concept of "${c.conceptualMetaphorical.name}".`;
        } else if (modifierValue === 'material-inversion') {
            coreDesignDescription = `${fullPreamble}A high-impact, minimalist t-shirt design featuring a material inversion. The entire background is composed of "${c.mediumMateriality.name}". The subject, "${c.subject.name}", is defined ONLY by the negative space cut out from this background".`;
        } else if (modifierValue === 'conceptual-surrealism') {
            coreDesignDescription = `${fullPreamble}A t-shirt design in the style of a surrealist painting, rendered in a ${c.style.name} style. The scene must be a dream-like and bizarre depiction of the subject, "${c.subject.name}", acting as a character to embody the abstract concept of "${c.conceptualMetaphorical.name}".`;
        } else if (modifierValue === 'kinetic-typography') {
            coreDesignDescription = `${fullPreamble}A t-shirt design focused on kinetic typography where the text is the primary artwork. The words "${c.subject.name}" must be depicted as if they are physically undergoing the process of "${c.actionProcess.name}".`;
        } else if (modifierValue === 'sensory-swap') {
            coreDesignDescription = `${fullPreamble}A highly conceptual t-shirt design based on a sensory swap, rendered in a ${c.style.name} style. The prompt must visualize the subject, "${c.subject.name}", as if it were the physical embodiment of the sensory experience of "${c.emotionTone.name}".`;
        } else if (modifierValue === 'lexicon-definition') { // NEW: Lexicon modifier prompt logic
            const lexiconWord = c.lexicon?.name;
            const lexiconDefinition = c.lexicon?.definition;
            const style = c.style?.name ? `in a ${c.style.name} style` : 'in a unique visual style';
            const emotion = c.emotionTone?.name ? `, evoking a sense of ${c.emotionTone.name}` : '';
            coreDesignDescription = `${fullPreamble}A typographic T-shirt graphic design visually interpreting the word "${lexiconWord}". The design should abstractly represent its definition: "${lexiconDefinition}" ${style}${emotion}. The typography itself should be the central visual element.`;
        }
        else if (modifierValue && modifierValue !== 'none') {
            const selectedModText = (currentMode === 'inspiration' ? modifierSelect.options[modifierSelect.selectedIndex].text : document.getElementById('manualModifier').options[document.getElementById('manualModifier').selectedIndex].text);
            let keywords = formatAsKeywords();
            coreDesignDescription = `${fullPreamble}A high-impact, complex T-shirt graphic. The design is a "${selectedModText}" concept, incorporating the following themes: ${keywords}.`;
        } else {
            const subject = c.subject?.name || 'an abstract concept';
            const style = c.style?.name ? `in a ${c.style.name} style` : 'in a unique visual style';
            const emotion = c.emotionTone?.name ? `, evoking a sense of ${c.emotionTone.name}` : '';
            const materiality = c.mediumMateriality?.name ? `, appearing as if made of ${c.mediumMateriality.name}` : '';
            const process = c.actionProcess?.name ? `, the subject is ${c.actionProcess.name}` : '';
            const composition = c.contextComposition?.name ? `, presented as a ${c.contextComposition.name}` : '';
            const concept = c.conceptualMetaphorical?.name ? `. The design explores the concept of "${c.conceptualMetaphorical.name}"` : '';
            const culturalAnchor = c.culturalAnchor?.name ? `. The design is anchored in the cultural context of "${c.culturalAnchor.name}"` : '';
            coreDesignDescription = `${fullPreamble}A masterpiece T-shirt graphic design of "${subject}" ${style}${materiality}${emotion}${graphicEffectDescription}. The design is ${process}${composition}${concept}${culturalAnchor}.`;
        }
    }

    finalPrompt += ` ${coreDesignDescription}.`;

    const constraint = currentComponents.creativeConstraints;
    if (constraint && constraint.name && currentMode !== 'fusion') {
        finalPrompt += ` \n\n**Important Constraint:** ${constraint.name}`;
    }
    return finalPrompt.replace(/ ,/g, ',').replace(/ \./g, '.').replace(/  +/g, ' ').trim();
}

function formatAsKeywords() {
    // For intelligent components, extract SEO keywords if available
    const keywords = [];
    for (const key in currentComponents) {
        if (key.startsWith('_')) continue; // Skip internal fusion keys
        const component = currentComponents[key];
        if (!component || !component.name) continue;

        // Check if the component itself is an object with SEO keywords
        if (component.seo_keywords && Array.isArray(component.seo_keywords)) {
            keywords.push(...component.seo_keywords);
        } else if (component.name) {
            // If it's a string or an object without specific SEO keywords, just use its name
            keywords.push(component.name);
        }
    }
    return keywords.filter(Boolean).join(', ');
}

async function saveIdeaToSupabase(ideas) {
    // Make sure 'ideas' is an array
    const ideasToSave = Array.isArray(ideas) ? ideas : [ideas];

    if (ideasToSave.length === 0) return;

    try {
        // The 'upsert' method can handle an array of objects perfectly.
        const { error } = await supabase.from('ideas').upsert(ideasToSave, { onConflict: 'component_key, value' });
        if (error) throw error;

        console.log(`Saved ${ideasToSave.length} idea(s) to Supabase.`);

        // Repopulate dropdowns in the background so new ideas are available everywhere.
        // This is a small improvement to ensure dropdowns are always fresh.
        await populateCreationDropdowns();

    } catch (error) {
        console.error('Failed to save idea(s) to Supabase:', error.message);
    }
}

// --- FUSION MODE FEATURE ---
const modalCustomInput = document.getElementById('modalCustomInput');
const modalAddCustomBtn = document.getElementById('modalAddCustomBtn');
const fusionModeContainer = document.getElementById('fusionModeContainer');
const fusionModal = document.getElementById('fusionModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalSearch = document.getElementById('modalSearch');
const modalCloseBtn = document.getElementById('modalCloseBtn');
let currentFusionComponent = null;

// Function to open and populate the modal
function openFusionModal(componentType) {
    currentFusionComponent = componentType;
    modalTitle.textContent = `Select ${keyToDisplayName[componentType] || componentType.charAt(0).toUpperCase() + componentType.slice(1)}s`;

    // Get all possible options for this component type
    let allOptions = [];
    if (componentType === 'subject' || componentType === 'culturalAnchor' || componentType === 'lexicon' || componentType === 'graphicEffects') { // ADDED graphicEffects
        stylesData.masterFramework[componentType].forEach(cat => {
            // Handle graphicEffects which is a flat array, not categories
            if (componentType === 'graphicEffects') {
                allOptions.push(cat.name);
            } else {
                cat.examples.forEach(example => {
                    allOptions.push(typeof example === 'string' ? example : example.name);
                });
            }
        });
    } else {
        allOptions = stylesData.masterFramework[componentType].map(item => item.name);
    }

    renderModalContent(allOptions);
    fusionModal.classList.remove('hidden');
}

// Function to render the items inside the modal
function renderModalContent(options) {
    modalContent.innerHTML = '';
    const currentSelections = new Set(fusionSelections[currentFusionComponent]);

    options.forEach(option => {
        if (modalSearch.value && !option.toLowerCase().includes(modalSearch.value.toLowerCase())) {
            return; // Skip if it doesn't match search
        }
        const item = document.createElement('div');
        item.className = 'p-2 rounded-lg cursor-pointer hover:bg-gray-700';
        item.textContent = option;
        item.dataset.value = option;

        if (currentSelections.has(option)) {
            item.classList.add('bg-indigo-600', 'font-bold');
        }
        modalContent.appendChild(item);
    });
}

// Function to render the selected pills on the main screen
function renderFusionPills() {
    for (const componentType in fusionSelections) {
        const container = document.getElementById(`fusion${componentType.charAt(0).toUpperCase() + componentType.slice(1)}Pills`);
        if (!container) continue; // Skip if container doesn't exist (e.g., graphicEffects)
        container.innerHTML = '';
        fusionSelections[componentType].forEach(value => {
            const pill = document.createElement('div');
            pill.className = 'flex items-center bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-300';
            pill.innerHTML = `
                <span>${typeof value === 'string' ? value : value.name}</span>
                <button class="ml-2 text-red-400 font-bold" data-type="${componentType}" data-value="${typeof value === 'string' ? value : value.name}">&times;</button>
            `;
            container.appendChild(pill);
        });
    }
}

// Function to handle adding a custom item from the modal
function addCustomFusionItem() {
    const value = modalCustomInput.value.trim();
    if (!value || !currentFusionComponent) return;

    let itemToAdd = value;
    if (currentFusionComponent === 'lexicon') {
        itemToAdd = { name: value, definition: `The user-defined concept of '${value}'.` };
    }

    // Add to our current selections if not already there
    const currentNames = fusionSelections[currentFusionComponent].map(item => typeof item === 'string' ? item : item.name);
    if (!currentNames.includes(typeof itemToAdd === 'string' ? itemToAdd : itemToAdd.name)) {
        fusionSelections[currentFusionComponent].push(itemToAdd);
    }

    // Save to Supabase in the background
    saveIdeaToSupabase({ component_key: currentFusionComponent, value: value });

    // Re-render the modal content to show the new item as selected
    let allOptions = [];
    if (currentFusionComponent === 'subject' || currentFusionComponent === 'culturalAnchor' || currentFusionComponent === 'lexicon' || currentFusionComponent === 'graphicEffects') { // ADDED graphicEffects
        stylesData.masterFramework[currentFusionComponent].forEach(cat => {
            if (currentFusionComponent === 'graphicEffects') {
                allOptions.push(cat.name);
            } else {
                cat.examples.forEach(ex => allOptions.push(typeof ex === 'string' ? ex : ex.name));
            }
        });
    } else {
        allOptions = stylesData.masterFramework[currentFusionComponent].map(item => item.name);
    }
    // Add the new custom value to the list of options for immediate display
    if (!allOptions.includes(value)) {
        allOptions.unshift(value);
    }
    renderModalContent(allOptions);

    // Clear the input field for the next entry
    modalCustomInput.value = '';
}


// --- Event Listeners for Fusion Mode ---

// Add these new listeners for the custom input
modalAddCustomBtn.addEventListener('click', addCustomFusionItem);
modalCustomInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addCustomFusionItem();
    }
});

fusionModeContainer.addEventListener('click', (e) => {
    // Handle "+ Add" button clicks
    if (e.target.matches('.add-component-btn')) {
        openFusionModal(e.target.dataset.component);
    }
    // Handle "x" button clicks on pills to remove items
    if (e.target.matches('[data-value]')) {
        const { type, value } = e.target.dataset;
        if (type && value) {
            fusionSelections[type] = fusionSelections[type].filter(item => (typeof item === 'string' ? item : item.name) !== value);
            renderFusionPills();
        }
    }
});

modalContent.addEventListener('click', (e) => {
    if (e.target.dataset.value) {
        const value = e.target.dataset.value;
        const currentNames = new Set(fusionSelections[currentFusionComponent].map(item => typeof item === 'string' ? item : item.name));

        // Find the actual object if it's a lexicon item
        let itemToToggle = value;
        if (currentFusionComponent === 'lexicon') {
            for (const category of stylesData.masterFramework.lexicon) {
                const foundWord = category.examples.find(word => word.name === value);
                if (foundWord) {
                    itemToToggle = foundWord;
                    break;
                }
            }
        }

        if (currentNames.has(value)) {
            fusionSelections[currentFusionComponent] = fusionSelections[currentFusionComponent].filter(item => (typeof item === 'string' ? item : item.name) !== value);
            e.target.classList.remove('bg-indigo-600', 'font-bold');
        } else {
            fusionSelections[currentFusionComponent].push(itemToToggle);
            e.target.classList.add('bg-indigo-600', 'font-bold');
        }
        fusionSelections[currentFusionComponent] = Array.from(new Set(fusionSelections[currentFusionComponent])); // Ensure uniqueness
    }
});

modalCloseBtn.addEventListener('click', () => {
    fusionModal.classList.add('hidden');
    renderFusionPills();
});

modalSearch.addEventListener('keyup', () => {
    let allOptions = [];
    if (currentFusionComponent === 'subject' || currentFusionComponent === 'culturalAnchor' || currentFusionComponent === 'lexicon' || currentFusionComponent === 'graphicEffects') { // ADDED graphicEffects
        stylesData.masterFramework[currentFusionComponent].forEach(cat => {
            if (currentFusionComponent === 'graphicEffects') {
                allOptions.push(cat.name);
            } else {
                cat.examples.forEach(ex => allOptions.push(typeof ex === 'string' ? ex : ex.name));
            }
        });
    } else {
        allOptions = stylesData.masterFramework[currentFusionComponent].map(item => item.name);
    }
    renderModalContent(allOptions);
});

// --- DESIGN ITERATION & REFINEMENT SYSTEM ---

function generateBriefFromComponents(newComponents) {
    currentComponents = newComponents;
    renderPills();
    updateOutputContent();
}

function refineSimplify() {
    let newComponents = { ...currentComponents };
    // Rule-based simplification
    if (newComponents.conceptualMetaphorical) delete newComponents.conceptualMetaphorical;
    else if (newComponents.actionProcess) delete newComponents.actionProcess;
    else if (newComponents.mediumMateriality) delete newComponents.mediumMateriality;
    else if (newComponents.graphicEffects) delete newComponents.graphicEffects; // ADDED graphicEffects
    else if (newComponents.lexicon) delete newComponents.lexicon; // NEW: Simplify by removing lexicon
    else if (newComponents.culturalAnchor) delete newComponents.culturalAnchor; // NEW: Simplify by removing culturalAnchor

    generateBriefFromComponents(newComponents);
}

function refineElaborate() {
    let newComponents = { ...currentComponents };
    if (!newComponents.graphicEffects) { // ADDED graphicEffects
        newComponents.graphicEffects = getRandomElement(stylesData.masterFramework.graphicEffects, Math.random);
    } else if (!newComponents.conceptualMetaphorical) {
        newComponents.conceptualMetaphorical = getRandomElement(stylesData.masterFramework.conceptualMetaphorical, Math.random);
    } else if (!newComponents.culturalAnchor) { // NEW: Elaborate by adding culturalAnchor
        const category = getRandomElement(stylesData.masterFramework.culturalAnchor, Math.random);
        const example = getRandomElement(category.examples, Math.random);
        newComponents.culturalAnchor = { name: example.name || example, category: category.categoryName };
    } else if (!newComponents.lexicon) { // NEW: Elaborate by adding lexicon
        newComponents.lexicon = getRandomElement(stylesData.masterFramework.lexicon, Math.random);
    }
    generateBriefFromComponents(newComponents);
}

function refineShiftPerspective() {
    let newComponents = { ...currentComponents };
    // Rule-based perspective shift on composition
    const compositions = stylesData.masterFramework.contextComposition;
    let currentCompName = newComponents.contextComposition?.name || "Centered / Iconic Layout";
    let newComp = getRandomElement(compositions, Math.random);
    // Ensure we get a different one
    while (newComp.name === currentCompName) {
        newComp = getRandomElement(compositions, Math.random);
    }
    newComponents.contextComposition = newComp;
    generateBriefFromComponents(newComponents);
}

function refineSuggestPalette() {
    paletteOutput.innerHTML = ''; // Clear previous
    const keywords = Object.values(currentComponents).map(c => c.name).join(' ');
    let suggestedPalette = null;

    for (const key in colorPalettes) {
        if (keywords.toLowerCase().includes(key.toLowerCase().split(' / ')[0])) {
            suggestedPalette = colorPalettes[key];
            break;
        }
    }

    if (suggestedPalette) {
        const paletteHtml = suggestedPalette.map(color =>
            `<span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mr-2" style="background-color: ${color};">${color}</span>`
        ).join('');
        paletteOutput.innerHTML = `<strong>Suggested Palette:</strong> ${paletteHtml}`;
    } else {
        paletteOutput.innerHTML = `<span class="text-gray-400">No direct palette match found for this concept.</span>`;
    }
}

refinementBtns.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    switch (button.id) {
        case 'refineSimplifyBtn':
            refineSimplify();
            break;
        case 'refineElaborateBtn':
            refineElaborate();
            break;
        case 'refinePerspectiveBtn':
            refineShiftPerspective();
            break;
        case 'refinePaletteBtn':
            refineSuggestPalette();
            break;
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    // Load saved state from localStorage first, if it exists.
    const savedStateJSON = localStorage.getItem(AUTOSAVE_KEY);
    const savedState = JSON.parse(savedStateJSON || '{}');
    loadStateFromLocalStorage();

    // Populate inspiration mode dropdowns
    populateInspirationDropdowns();

    // Populate creation mode dropdowns and load audience profile
    await populateCreationDropdowns();
    await loadAudienceProfile();

    if (!savedState.currentComponents || Object.keys(savedState.currentComponents).length === 0) {
        pillsContainer.innerHTML = `<span class="text-gray-400 italic">Your creative components will appear here...</span>`;
        briefPre.textContent = "Click 'Forge New Prompt' to begin.";
    }
});
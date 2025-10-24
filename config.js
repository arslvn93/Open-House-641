const config = {
  "property": {
    "streetAddress": "73 Quarry Park Way SE",
    "city": "Calgary",
    "cityStateZip": "Calgary, AB T2C 5E5",
    "heroSubtitle": "Detached home | 5 beds | 3.5 baths | $1,100,000. Vacant, just bring furniture! Two fireplaces, a fully developed lower level, and fresh renovations in 2025 (new carpets, quartz counters, updated backsplashes, faucets, paint, and a new dryer). Expansive home in Quarry Park: riverside pathways, coffee shops, and quick access to downtown. Register to receive the complete Info Package, floor plan, virtual tour, and comparables.",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/8e8bd9761f53a949269ac969eff952efb0d5945ec6a801bd393405777dcf6f0c/kitche_area_quarry.jfif",
    "assets": [
      { "type": "Photos", "url": "https://api.typeform.com/responses/files/8e8bd9761f53a949269ac969eff952efb0d5945ec6a801bd393405777dcf6f0c/kitche_area_quarry.jfif" },
      { "type": "Photos", "url": "https://api.typeform.com/responses/files/d0b82054d38f8cad151a7fcd700aca109af4ce47854dd8c2a9f3c84e25fe7c9f/dining_quarry.jfif" },
      { "type": "Floor Plan", "url": "https://matrixmedia.pillarnine.com/mediaserver/GetMedia.ashx?Key=106053030&TableID=0&Type=3&Number=3&Size=0&NNF=1&RFN=floorplan_imperial_en+(1).pdf&tstmp=1023150443&exk=ee363103bc6c8be0acddb468dc971271" },
      { "type": "Virtual Tour", "url": "https://youriguide.com/73_quarry_way_se_calgary_ab" },
      { "type": "Recent Neighborhood Sales", "url": "https://matrix.pillarnine.com/DE.asp?p=DE-298660545-206&k=4209874X4C2F&eml=YW15bGNhdWdobGluQGdtYWlsLmNvbQ==" }
    ],
    "listingUrl": "https://matrix.pillarnine.com/DE.asp?p=DE-298660535-946&k=4209874X4C2F&eml=YW15bGNhdWdobGluQGdtYWlsLmNvbQ==",
    "openHouseDate": "2025-10-25",
    "listingPrice": "$1,100,000",
    "beds": 5,
    "baths": 3.5,
    "homeType": "Detached home",
    "feature1": "Two fireplaces",
    "feature2": "Fully developed lower level",
    "feature3": "2025 renovations: carpets, quartz counters, backsplashes, faucets, paint & new dryer",
    "keySellingFeature": "Vacant, just bring furniture",
    "neighborhoodInfo": "Tucked along the Bow River, Quarry Park blends city living with a relaxed, community feel. Think beautiful homes, riverside pathways, cozy coffee shops, and quick access to downtown — the perfect mix of convenience and calm."
  },
  "realtor": {
    "fullName": "Amy Caughlin",
    "title": "REALTOR®",
    "phone": "15874391618",
    "email": "amy@caughlinrealestate.ca",
    "bio": "A former risk manager turned Realtor, proptech co-founder, podcast host, and passionate community advocate. I help busy professionals and families find homes that truly fit their lives, while working behind the scenes to make real estate better for everyone involved. With a background in risk management, I bring a strategic lens to every transaction, ensuring my clients make informed, confident decisions. I’m also the co-founder of Jazzberry, a platform designed by realtors, for realtors, built to simplify the chaos behind the curtain so clients experience more clarity, transparency, and joy in their home journey. A proud Maritimer, I lead with authenticity, hospitality, and heart. Whether I’m running along the Bow River, adventuring in the mountains with my family, or hosting FutureRE — The Future of Real Estate, I’m always driven by curiosity, connection, and impact. My path hasn’t been linear — and I believe that’s where the magic lies. I’m here to challenge the status quo, build solutions that truly help people, and give back to the communities that raised me — especially organizations that uplift women, children, and families.",
    "photoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/d43b40bf-8ed2-49c3-a704-34908837cf96/SueMoodiePhotography_CalgaryBrandPhotography_AmyCaughlin_StudioSession_60_Edit.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sh",
    "social": {
      "facebook": "https://www.facebook.com/caughlinrealestate/",
      "instagram": "https://www.instagram.com/caughlin.realestate/",
      "website": null
    }
  },
  "brokerage": {
    "name": "Greater Property Group",
    "logoUrl": null,
    "address": "5940 Macleod Trl SW #500, Calgary, AB T2H 2G4"
  },
  "openHouse": {
    "eventDate": "2025-10-25",
    "bundleItems": [
      { "icon": "fas fa-ruler-combined", "text": "Architectural Floor Plan" },
      { "icon": "fas fa-star", "text": "Neighbourhood Guide" },
      { "icon": "fas fa-check-circle", "text": "Market Stats" },
      { "icon": "fas fa-car", "text": "School District Information" },
      { "icon": "fas fa-key", "text": "Financing Resources" },
      { "icon": "fas fa-home", "text": "Utility Cost Estimates" },
      { "icon": "fas fa-map-location-dot", "text": "Property Feature List" },
      { "icon": "fas fa-image", "text": "Home Inspection Tips" }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Amy Caughlin Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://www.welpneedthis.com"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-641",
    "repoUrl": "https://github.com/arslvn93/Open-House-641",
    "tag": "Open House 73 Quarry Park Way SE",
    "netlifyUrl": null,
    "siteId": "3cb30d1a-3272-431c-b4c1-c29988883480"
  }
}
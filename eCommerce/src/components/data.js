
const data = [
    {
        id: 21,
        image: "https://i.ibb.co/jD7vWsM/candles1.jpg",
        titulo: "Iridescent Jar Scented Candle",
        precio: 100,
        description: "The Volcano scent smells like tropical fruits, sugared oranges, and citrus. If you can't go on a beach vacation, this is the next closest thing. Plus, how chic will that gold and copper jar look on your dresser?",
        categoryId: 1,
        category:{
            name: "Calm",
            id: 1,
        },

    },
    {
        id: 22,
        image: "https://i.ibb.co/1KBxbwW/candles-2.jpg",
        titulo: "Terrarium Candle",
        precio: 100,
        description: "Plant lovers, these hand-poured candles are for you. The wax cacti one smells like pine and vanilla, and the poppy candle has a jasmine and white tea scent. ",
        categoryId: 1,
        category:{
            name: "Calm",
            id: 1,
        },

    },
    {
        id: 23,
        image: "https://i.ibb.co/D9vD0Nn/candles-3.jpg",
        titulo: "Jar Scented Candle",
        precio: 100,
        description: "Every candle in this line smells like a different dessert, so it'll give your whole house that fresh-baked scent, even if you only preheat your oven six times a year.",
        categoryId: 1, 
        category:{
            name: "Calm",
            id: 1,
        },
    },
    {
        id: 24,
        image: "https://i.ibb.co/7GXS8nC/candles-4.jpg",
        titulo: "Ombre Bergamot Musk Candle",
        precio: 100,
        description: "This sunset-hued candle is perfect for winter. And then once you've burned up all the wax, you can use it as a tumbler or catch-all. ",
        categoryId: 1,
        category:{
            name: "Calm",
            id: 1,
        },
    },
    {
        id: 25,
        image: "https://i.ibb.co/WPDNLkM/candles-5.png",
        titulo: "Inner Strength Candles",
        precio: 100,
        description: "In addition to smelling amazing, these hand-poured candles encourage you to embrace your inner strength and individuality.",
        categoryId: 1,
        category:{
            name: "Calm",
            id: 1,
        },

    },
    {
        id: 26,
        image: "https://i.ibb.co/41JSsCR/candles-6.jpg",
        titulo: "First Light Candle",
        precio: 100,
        description: "Wild! Mountain! Flora! This candle is as fresh, invigorating, and dreamy as its name. On our mountain, at first light, there’s a heavenly fragrance in the air. Before anyone starts an engine, or lights a fire, the air is clear, and still, and silent, says La Montaña's team about the Spanish cliffs where they're based. ",
        categoryId: 1,
        category:{
            name: "Calm",
            id: 1,
        },

    },
    {
        id: 27,
        image: "https://i.ibb.co/fdGnttg/candles-7.png",
        titulo: "Plant the Packaging Floral Candles",
        precio: 100,
        description: "Made from soy, these candles smell like poppies and sunflowers. The best part? Their packaging is infused with seeds so you can plant wildflowers and crimson poppies in your garden. ",
        categoryId: 2,
        category:{
            name: "Floral",
            id: 2,
        },

    },
    {
        id: 28,
        image: "https://i.ibb.co/tzpk8yk/candles-8.jpg",
        titulo: "Palo Santo Candle",
        precio: 100,
        description: "For a woody scent, try this candle made of coconut apricot wax and presented in a sleek container. It has notes of nectar, pomegranate, cedar wood, and more. ",
        categoryId: 2,
        category:{
            name: "Floral",
            id: 2,
        },
    },
    {
        id: 29,
        image: "https://i.ibb.co/FnnYC4D/candles-9.jpg",
        titulo: "Crossroads Ritual Candle",
        precio: 100,
        description: "Use this candle to illuminate a path when at a crossroads. The high magic of this traditional candle helps open the way for new possibilities where options are not readily seen. Try saying an incantation of 'my possibilities are open and clear' when lighting this candle, Magic Hour suggests. Hand-poured with specific herbs, essential oils, and infused with moon-charged crystals, it's a lovely ritual to adopt. ",
        categoryId: 2, 
        category:{
            name: "Floral",
            id: 2,
        },
    },
    {
        id: 30,
        image: "https://i.ibb.co/Z6SKgsY/candles-10.png",
        titulo: "Champagne Triple Wick Candle",
        precio: 100,
        description: "This oversized, 26 ounce candle comes beautifully packaged in a luxe leather bag-inspired box, but even more important, it smells like your favorite bubbly. ",
        categoryId: 2, 
        category:{
            name: "Floral",
            id: 2,
        },
    },
    {
        id: 31,
        image: "https://i.ibb.co/nwC0ck5/candles-11.jpg",
        titulo: "Tobacco Sunrise Candle",
        precio: 100,
        description: "This sleek candle (which, by the way, has a burn time of 80 to 90 hours) features notes of tobacco, spices, white tea, and woody notes for a warm, cozy feeling.",
        categoryId: 2, 
        category:{
            name: "Floral",
            id: 2,
        },

    },
    {
        id: 32,
        image: "https://i.ibb.co/hMymZx5/candles-12.jpg",
        titulo: "Scented Candle",
        precio: 100,
        description: "Parachute Home carries two signature candles, Dusk and Salt Water. The former is comprised of jasmine, patchouli, and saffron mixed with ebony wood and lily of the valley, while the latter features sea salt with notes of citrus, seagrass, cyprus, and driftwood.",
        categoryId: 2,
        category:{
            name: "Floral",
            id: 2,
        },
    },
    {
        id: 33,
        image: "https://i.ibb.co/F54N7XT/candles-13.jpg",
        titulo: "Charleston Candle",
        precio: 100,
        description: "If winding down with the scent of sweet tea sounds like exactly what you need, the Charleston candle is here to help with notes of currant and tea.",
        categoryId: 2, 
        category:{
            name: "Floral",
            id: 2,
        },

    },
    {
        id: 34,
        image: "https://i.ibb.co/9NLgcS5/candles-14.jpg",
        titulo: "Travel Jar Candle",
        precio: 100,
        description: "The teak and tobacco scent is not for the faint of heart (er, smell), but for the right person it's glorious.",
        categoryId: 2, 
        category:{
            name: "Floral",
            id: 2,
        },
    },
    {
        id: 35,
        image: "https://i.ibb.co/xS2tQPV/candles-15.jpg",
        titulo: "Canopy",
        precio: 100,
        description: "Bring the great outdoors inside with this candle. Featuring a burn time of nearly 55 hours, it'll fill your home with fresh scents of California fig, ivy greens, and summer dew.",
        categoryId: 3,
        category:{
            name: "Fruit",
            id: 3,
        },

    },
    {
        id: 36,
        image: "https://i.ibb.co/s6Lpk0f/candles-16.jpg",
        titulo: "Brownstone Candle",
        precio: 100,
        description: "Fill your home with the scents of a warm afternoon in a Harlem brownstone with this luxe candle, complete with notes of sandalwood, cardamom, patchouli, lemon, and more.",
        categoryId: 3,
        category:{
            name: "Fruit",
            id: 3,
        },

    },
    {
        id: 37,
        image: "https://i.ibb.co/drY9Xt5/candles-17.png",
        titulo: "Fragra Scented Jar Candle",
        precio: 100,
        description: "The blush concrete container makes this candle both edgy and warm, while the scent is familiar yet sophisticated. ",
        categoryId: 3,
        category:{
            name: "Fruit",
            id: 3,
        },
    },
    {
        id: 38,
        image: "https://i.ibb.co/gg77JqR/candles-18.jpg",
        titulo: "Safran Scented Candle",
        precio: 100,
        description: "Though not necessarily the sexiest of Byredo's candles name-wise, Safran definitely delivers the sultriest, richest, and warmest fragrance (in my opinion, at least). It has a scent profile of patchouli, vanilla, dark amber, leather accord, labdanum, violet, saffron, and black pepper for a musky/ sweet/ spicy whole. ",
        categoryId: 3,
        category:{
            name: "Fruit",
            id: 3,
        },
    },
    {
        id: 39,
        image: "https://i.ibb.co/7z7Jxbb/candles-19.jpg",
        titulo: "Domain Signature Scent Candle",
        precio: 100,
        description: "Domain's signature scent is the perfect combo of Meyer lemon and lavender. Talk about fresh and invigorating!",
        categoryId: 3,
        category:{
            name: "Fruit",
            id: 3,
        },

    },
    {
        id: 40,
        image: "https://i.ibb.co/LCXb9Jq/candles-20.jpg",
        titulo: "Lime Basil & Mandarin Candle",
        precio: 100,
        description: "Basil and thyme add a twist to this candle's lime and zesty mandarin scent. The classic Jo Malone scent will last for hours.",
        categoryId: 3,
        category:{
            name: "Fruit",
            id: 3,
        },

    },

];
module.exports = {
    data,
}


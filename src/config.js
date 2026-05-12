const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

const config = {
  style: 'mapbox://styles/mongabay/cmp16a81s000301s0c994ckvb',
 
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
 
  theme: 'mongabay',

  intro: {
    title: "What's missing?",
    subtitle: "A large-scale government-drafted map misses the details, driving a community anxious.",
    date: 'May 24, 2026',

   social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabayindia',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabayindia/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://india.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Produced by Kartik Chandramouli | Cartography by Andrés Alegría',
 
  chapters: [

  // Chapter 1
  {
  id: "chapter 1",
  alignment: 'left',

  title: 'Akkampetai',
  description: "This is a satellite view of a beach in a village near Puducherry.",

  location: { center: [79.853086, 10.965290], zoom: 14.80, pitch: 50, bearing: -28 },
  
  onChapterEnter: [
      { layer: 'icon_Turtle', opacity: 0, },
      { layer: 'icon_Boat', opacity: 0, },
      { layer: 'icon_Shelter', opacity: 0, },
      { layer: 'icon_Dune', opacity: 0, },
      { layer: 'icon_DryFish', opacity: 0, },
      { layer: 'icon_Hall', opacity: 0, },
      { layer: 'icon_Ice', opacity: 0, },
      { layer: 'Akkampetai-overlay-14000', opacity: 0, },
      { layer: 'Akkampetai-overlay-125000', opacity: 0, },
      { layer: 'Akkampetai', opacity: 0, },
  ],
  
  onChapterExit: [
  ]
},

  // Chapter 2

  {
  id: "chapter 2",
  alignment: 'right',

  title: ' ',
  description: "Fisherfolk park their boats here. Every morning, they head out to sea. Every evening, they return to the same stretch of sand.",
  
   images: [
        {
          src: 'image1.jpg',
          position: 'top',
          title: '',
        },
      ],

  location: { center: [79.853086, 10.965290], zoom: 14.80, pitch: 50, bearing: -28 },
  
  onChapterEnter: [ 
          { layer: 'icon_Boat', opacity: 1, },
      ],
  onChapterExit: [
      ]
},



  // Chapter 3

  {
  id: "chapter 3",
  alignment: 'right',

  title: ' ',
  description: "Just 200 metres away is a turtle nesting site. Elders in the village say turtles have come here for generations.",
  
   images: [
        {
          src: 'image2.jpg',
          position: 'top',
          title: '',
        },
      ],

  location: { center: [79.853086, 10.965290], zoom: 14.80, pitch: 50, bearing: -28 },
  
  onChapterEnter: [
          { layer: 'icon_Turtle', opacity: 1, },
      ],
  onChapterExit: [
  ]
},


// Chapter 4

  {
  id: "chapter 4",
  alignment: 'right',

  title: ' ',
  description: "Across the beach, blue tarpaulins stand out from above. <br> <br> This is a roughly 300 square metres fish-drying centre. But for Kannachiamma and several fisherwomen, it means daily income.",

 images: [
        {
          src: 'image3.jpg',
          position: 'top',
          title: '',
        },
      ],
      
  location: { center: [79.8516, 10.958], zoom: 17.250, pitch: 50, bearing: -28 },
  
  onChapterEnter: [
      { layer: 'icon_Turtle', opacity: 0, },
      { layer: 'icon_Boat', opacity: 0, },
      { layer: 'icon_Shelter', opacity: 0, },
      { layer: 'icon_Dune', opacity: 0, },
      { layer: 'icon_DryFish', opacity: 1, },
      { layer: 'icon_Hall', opacity: 0, },
      { layer: 'icon_Ice', opacity: 0, },
      { layer: 'Akkampetai-overlay-14000', opacity: 0, },
      { layer: 'Akkampetai-overlay-125000', opacity: 0, },
      { layer: 'Akkampetai', opacity: 0, },

      ],
  onChapterExit: [
      { layer: 'icon_DryFish', opacity: 0, },
  ]
},


// Chapter 5

{
 id: "chapter 5",
 type: "stage",
 stage: "PlainText",
 title: "",

 html:
`  <p style="text-align:center;">
From space, these places look small. <br> <br> On the ground, they support livelihoods and biodiversity.
</p> `,

  location: { center: [79.8516, 10.959621], zoom: 9, pitch: 10, bearing: 0 },

},    



// Chapter 6

  {
  id: "chapter 6",
  alignment: 'left',

  title: ' ',
  description: "So what happens when a map meant to guide infrastructure development and coastal protection misses these spots?",

  location: { center: [79.8516, 10.959621], zoom: 13.0, pitch: 0, bearing: 0 },
  
  onChapterEnter: [
          { layer: 'Akkampetai', opacity: 0, }, 
      ],
  onChapterExit: [
  ]
},
    
    
    
    
// Chapter 7

  {
  id: "chapter 7",
  alignment: 'left',

  title: ' ',
  description: "The draft Coastal Zone Management Plan (CZMP) map for Karaikal district left out the fish-drying centre, the turtle nesting site, the boat parking area, and several everyday spaces used by fishing communities.",

  location: { center: [79.8516, 10.959621], zoom: 13.0, pitch: 0, bearing: 0 },
  
   images: [
        {
          src: 'MAP_Legend.jpg',
          position: 'top',
          title: '',
        },
      ],

  onChapterEnter: [
      { layer: 'Akkampetai', opacity: 0.9, }, 
      ],
  onChapterExit: [
  ]
},
    

// Chapter 8

  {
  id: "chapter 8",
  alignment: 'left',

  title: ' ',
  description: "This version was prepared in September 2024, after communities objected to an earlier 2023 map that did not even identify or name fishing villages.",

  location: { center: [79.8516, 10.959621], zoom: 13.0, pitch: 0, bearing: 0 },
  
  onChapterEnter: [
      ],
  onChapterExit: [
   ]
},    




// Chapter 9

  {
  id: "chapter 9",
  alignment: 'right',

  title: ' ',
  description: "The revised map includes some locations such as a community hall and an ice plant. <br> <br> But residents say many crucial spaces remain missing.",

  location: { center: [79.851, 10.970461], zoom: 15.0, pitch: 0, bearing: 0 },
  
  onChapterEnter: [
      { layer: 'icon_Hall', opacity: 1, },
      { layer: 'icon_Ice', opacity: 1, },
      { layer: 'icon_Shelter', opacity: 0, },
      { layer: 'icon_Dune', opacity: 0, },
      { layer: 'Akkampetai', opacity: 1, }, 
        ],
  onChapterExit: [
  ]
},    



// Chapter 10

  {
  id: "chapter 10",
  alignment: 'right',

  title: ' ',
  description: "Like a government-built fishermen’s shelter.",

   images: [
        {
          src: 'image4.jpg',
          position: 'top',
          title: '',
        },
      ],
      
  location: { center: [79.851, 10.970461], zoom: 15.0, pitch: 0, bearing: 0 },
  
 onChapterEnter: [
      { layer: 'icon_Hall', opacity: 1, },
      { layer: 'icon_Ice', opacity: 1, },
      { layer: 'icon_Shelter', opacity: 1, },
      { layer: 'icon_Dune', opacity: 0, },
       ],
 onChapterExit: [
  ]
},    



// Chapter 11

  {
  id: "chapter 11",
  alignment: 'right',

  title: ' ',
  description: "...and sand dunes that protect inland areas from saltwater intrusion.",

   images: [
        {
          src: 'image5.jpg',
          position: 'top',
          title: '',
        },
      ],
      
  location: { center: [79.851, 10.970461], zoom: 15.0, pitch: 0, bearing: 0 },
  
  onChapterEnter: [
      { layer: 'icon_Hall', opacity: 1, },
      { layer: 'icon_Ice', opacity: 1, },
      { layer: 'icon_Shelter', opacity: 1, },
      { layer: 'icon_Dune', opacity: 1, },
      { layer: 'Akkampetai', opacity: 1, }, 
      { layer: 'Akkampetai-overlay-125000', opacity: 0, },

      ],
  onChapterExit: [
      { layer: 'icon_Hall', opacity: 0, },
      { layer: 'icon_Ice', opacity: 0, },
      { layer: 'icon_Shelter', opacity: 0, },
      { layer: 'icon_Dune', opacity: 0, },

  ]
},    



// Chapter 12

{
 id: "chapter 12",
 type: "stage",
 stage: "PlainText",
 title: "",

 html:
`  <p style="text-align:center;">
Why are these places missing?
</p> 
<p style="text-align:center; font-size:32px; font-weight:bold; font-family:'Rowan', serif;">
Scale.
</p>

`,

  location: { center: [79.825, 10.959621], zoom: 13.0, pitch: 0, bearing: 0 },

   onChapterEnter: [
      { layer: 'Akkampetai-overlay-14000', opacity: 0, },
      { layer: 'Akkampetai-overlay-125000', opacity: 0, },
      { layer: 'Akkampetai', opacity: 0, }, 
      ],
  onChapterExit: [
    
   ]
},    


// Chapter 13

  {
  id: "chapter 13",
  alignment: 'left',

  title: ' ',
  description: "The draft map is drawn at 1:25,000. <br> <br> At this scale, one grid covers nearly 14 × 14 kilometres. <br> <br> Large-scale planning maps can show the landscape. Not how people use it.",
      
  location: { center: [79.814736, 10.936032], zoom: 11, pitch: 0, bearing: 0 },
  
   onChapterEnter: [
      { layer: 'Akkampetai-overlay-14000', opacity: 0, },
      { layer: 'Akkampetai-overlay-125000', opacity: 1, },
      { layer: 'Akkampetai', opacity: 0, }, 
      ],
  onChapterExit: [
    
   ]
},    



// Chapter 14

  {
  id: "chapter 14",
  alignment: 'left',

  title: ' ',
  description: "Authorities will later prepare a finer map at 1:4,000 scale where one grid covers 2.7 × 2.7 kilometres. But this version will not go through public consultation.",
      
  location: { center: [79.779, 10.952], zoom: 14.7, pitch: 0, bearing: 0 },
  
   onChapterEnter: [
      { layer: 'Akkampetai-overlay-14000', opacity: 1, },
      { layer: 'Akkampetai-overlay-125000', opacity: 1, },
      ],
  onChapterExit: [
  ]

},    



// Chapter 15

{
 id: "chapter 15",
 type: "stage",
 stage: "PlainText",
 title: "",

 html:
`  <p style="text-align:center;">
Fishing communities worry that without indicating every detail on the map, their spaces could be opened up for tourism, real estate, or future infrastructure projects.
</p> `,


},    
  ],
};
export default config;

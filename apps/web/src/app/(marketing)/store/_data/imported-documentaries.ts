
// This file was manually created based on data from combatfilms.com/store.html
import { Product } from './products';

// Extended product interface to include institutional and personal prices
export interface DocumentaryProduct extends Product {
  institutionalPrice: number;
  personalPrice: number;
  subtitle?: string;
  notes?: string;
}

// Imported documentaries from the old website
export const importedDocumentaries: DocumentaryProduct[] = [
  {
    "id": "doc-unfortunate-brothers",
    "title": "Unfortunate Brothers – Korea's Reunification Dilemma",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://combatfilms.com/images/unfortunate%20bros%20thumbnail208x294.jpg",
    "shortDescription": "An exploration of the complex reunification challenges facing North and South Korea through the lens of two brothers separated by war.",
    "fullDescription": "\"Even though I live in South Korea, my heart is in North Korea. The [North Koreans] are not strangers, but my brethren.\" These words spoken by Mr. Lee, the film's main character, reveal an internal conflict in the national psyche of the Korean people. Since the armistice agreement at the end of the Korean War in 1953, tensions between the two nations--still technically at war--have shown little sign of abating. In their sixty years apart, the two Koreas have taken dramatically different paths.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": "Includes the short film, BALLOON MAN & extras"
  },
  {
    "id": "doc-global-car",
    "title": "Global Car",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Global+Car",
    "shortDescription": "An examination of globalization through the automotive global supply chain.",
    "fullDescription": "Global Car examines globalization by exploring the dynamics of the automotive global supply chain. The car is a symbol of American ingenuity and technological progress. Beyond that, it is a symbol of the American psyche. But there's probably not truly an American car that's built anymore.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-launch-pads",
    "title": "Launch Pads and Lily Pads",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Launch+Pads+and+Lily+Pads",
    "shortDescription": "Explores how the US military adapts its force posture to meet new security challenges.",
    "fullDescription": "New Threats require new strategy. The principles that guided America's military presence in Europe and elsewhere for fifty years have become less relevant. Launch Pends to Lily Pads explores the US military's on-going struggle to adapt its force posture to meet new challenges inherent to a shifting American security perimeter.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-masses-to-masses",
    "title": "From the Masses to the Masses",
    "subtitle": "An Artist in Mao's China",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=From+the+Masses+to+the+Masses",
    "shortDescription": "The story of Jin Zhilin, a Chinese artist whose career was dramatically altered by the currents that shaped Communist China.",
    "fullDescription": "What happens to the individual artist when culture becomes a tool of government? From the Masses to the Masses is the story of Jin Zhilin, a Chinese artist whose career was altered dramatically by the currents that shaped Communist China. Jin responded to Mao Zedong's call for artists to learn from the masses and create for the masses. But after Mao launched the Cultural Revolution in 1966 to purge China's intellectuals and those he deemed insufficiently \"red,\" Jin found himself on the wrong side of the new artistic mandate and was imprisoned.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-fog-friction",
    "title": "Fog and Friction",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Fog+and+Friction",
    "shortDescription": "A glimpse into the decision making process at the height of battle and the media's ability to portray an accurate view of war.",
    "fullDescription": "War is complicated and has always been so. Fog and Friction is a glimpse into the decision making process at the height of battle, the ability of the media to portray an accurate view of war, and, according to military scientists, what is being done on a continual basis to overcome the uncertainty of fog and friction.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-arms-bazaar",
    "title": "Arms Bazaar",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Arms+Bazaar",
    "shortDescription": "An inside look at the largest conventional arms show in the world.",
    "fullDescription": "Some argue that the weapons bought and sold at IDEX serve to prolong, intensify and escalate conflicts the world over. Others argue transparency in the arms trade promoted by fairs like IDEX creates stability around the world. Arms Bazaar lets the viewer decide by putting him in the middle of the largest conventional arms show in the world.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-ukraine-sonata",
    "title": "Ukraine Sonata",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Ukraine+Sonata",
    "shortDescription": "Examines how Ukraine negotiated post-Soviet changes on a musical level.",
    "fullDescription": "Ukraine Sonata looks at the years before, during, and after the great \"Perestroika\" of the Soviet Union and how the Independent Republic of Ukraine is negotiating the changes on a musical level.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-chechnya",
    "title": "Chechnya: Separatism or Jihad?",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Chechnya",
    "shortDescription": "Examines the nature of Islam in the ongoing Chechen conflict.",
    "fullDescription": "Chechnya: Separatism or Jihad? examines the nature of Islam in the ongoing Chechen conflict. In early 1995, numerous foreign mujahadeen arrived in Chechnya to assist the separatist movement, and there have been foreigners there ever since. Their contribution on the battlefield and their influence in the political situation within the Chechen resistance is not clear and has often been politically manipulated by all sides in the conflict.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-fault-lines",
    "title": "Fault Lines & Pipelines",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Fault+Lines+and+Pipelines",
    "shortDescription": "Explores the conflicts and corruption in the Caucasus region.",
    "fullDescription": "The beautiful and historic Caucasus Mountains are home to three major conflicts in the former Soviet Union, Nagorno-Karabakh, Abkhazia and Chechnya, and multiple minor struggles. Corruption is rampant and coups, random killing and kidnappings are so prevalent that foreigners in Georgia's capitol Tbilisi are warned not to walk after dark in its most affluent district, Rustaveli, more commonly referred to as the \"red zone\".",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-swift-company-k",
    "title": "Swift & Company K",
    "subtitle": "3/25 Marines Engage in West Africa",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Swift+and+Company+K",
    "shortDescription": "Follows Kilo Company 3/25 Marines as they interact for the first time with their West African counterparts.",
    "fullDescription": "Swift and Company K follows Kilo Company 3/25 Marines as they interact for the first time with their West African counterparts. As one of only three reserve infantry battalions not activated for deployment since September 11, 2001, this is the unit's first overseas deployment, consisting of a variety of missions including joint patrol, helo insertions, live-fire exercises with multiple weapons, riverine operations, and amphibious landings.\n\nIn the context of increased global security concerns, Kilo Company's mission to Africa also marks an increasing US interest in Africa. It also gave the Marines a chance to engage one-to-one with West African soldiers at a time when stereotypes of Africa, Muslims, Christians, and Americans are hazy at best.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-virgin-soldiers",
    "title": "Virgin Soldiers",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Virgin+Soldiers",
    "shortDescription": "Follows India Company 3rd Battalion, 7th Marine regiment during the Iraq invasion.",
    "fullDescription": "With unprecedented access, award winning filmmaker Dodge Billingsley tells the story of India Company 3rd Battalion, 7th Marine regiment, crack U.S. frontline troops in Iraq. With some as young as 19, the invasion of Iraq was the first time any of them had actually been sent into combat. Experience a day in the life of these young men as they play a vital role in the liberation of Iraq.\n\nWith remarkable battle footage, Virgin Soldiers reveals the true story of men who fought their way into the heart of Baghdad.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-helen-foster-snow",
    "title": "Helen Foster Snow",
    "subtitle": "Witness to Revolution",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Helen+Foster+Snow",
    "shortDescription": "The story of Helen Foster Snow's decade in China as a writer, activist, and witness to revolution.",
    "fullDescription": "The unstable and dangerous environment of 1930s China led aspiring author Helen Foster to spend a year gaining life experience and gathering material for her great American novel. She would, in fact, leave a full decade later--a writer, an activist, and witness to a revolution.",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  },
  {
    "id": "doc-immortal-fortress",
    "title": "Immortal Fortress",
    "subtitle": "A Look Inside Chechnya's Warrior Culture",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=Immortal+Fortress",
    "shortDescription": "A behind-the-scenes journey into Chechnya's war-driven culture.",
    "fullDescription": "Award winning Immortal Fortress takes the viewer on a dangerous behind-the-scenes journey into Chechnya, exploring the tiny mountain republic's war driven culture while searching for its most prolific warrior, Shamil Basayev.\n\n52 Minutes\n\nAvailable in NTSC or PAL format",
    "price": 19.99,
    "institutionalPrice": 150,
    "personalPrice": 19.99,
    "notes": ""
  },
  {
    "id": "doc-kennedy-way",
    "title": "The Kennedy Way",
    "subtitle": "",
    "category": "documentaries",
    "thumbnail": "https://placehold.co/600x400/333/fff?text=The+Kennedy+Way",
    "shortDescription": "Explores the key values of David M. Kennedy's leadership style and global perspective.",
    "fullDescription": "Explore the key values that contributed to David M. Kennedy's leadership style and global perspective, both of which are inextricably linked to his lifetime of service. Ambassador Kennedy's vision and legacy live on through Brigham Young University's Kennedy Center, students, and alumni.\n\n41 Minutes",
    "price": 14.99,
    "institutionalPrice": 150,
    "personalPrice": 14.99,
    "notes": ""
  }
];

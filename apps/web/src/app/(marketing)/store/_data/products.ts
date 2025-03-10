export interface Product {
  id: string;
  title: string;
  category: 'documentaries' | 'books' | 'documents';
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  institutionalPrice?: number;
  personalPrice?: number;
  subtitle?: string;
  notes?: string;
  institutionalPrice?: number;
  personalPrice?: number;
  subtitle?: string;
  notes?: string;
}

export const documentaries: Product[] = [
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

export const books: Product[] = [
  {
    id: 'book-1',
    title: 'Infantry Tactics: From Napoleonic Wars to Modern Conflict',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Infantry+Tactics',
    shortDescription: 'A comprehensive analysis of how infantry tactics have evolved over two centuries of warfare.',
    fullDescription: 'Infantry Tactics: From Napoleonic Wars to Modern Conflict offers a detailed examination of the evolution of ground combat over the past two centuries. The book traces the development of infantry doctrine from the massed formations of the Napoleonic era through the trenches of World War I, the combined arms approach of World War II, and into the counterinsurgency operations of recent conflicts. With detailed battle maps, firsthand accounts, and analysis of technological developments, this book provides military historians and enthusiasts with a thorough understanding of how infantry combat has transformed in response to changing technologies and strategic requirements.',
    price: 34.99
  },
  {
    id: 'book-2',
    title: 'Generals and Their Campaigns: Decisive Leadership in Combat',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Military+Leadership',
    shortDescription: 'Profiles of history\'s most influential military leaders and their strategic innovations.',
    fullDescription: 'Generals and Their Campaigns examines the careers and strategic approaches of history\'s most influential military commanders. From Alexander the Great to modern generals, this book analyzes the leadership qualities, decision-making processes, and tactical innovations that allowed these individuals to achieve remarkable military successes. Each chapter focuses on a specific general and their signature campaigns, providing context for their achievements and assessing their long-term impact on military thought. With insights into both the personal characteristics and professional methods of these commanders, this book offers valuable lessons on leadership that remain relevant across centuries.',
    price: 29.99
  },
  {
    id: 'book-3',
    title: 'Logistics of War: How Supplies Shape Battlefields',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Military+Logistics',
    shortDescription: 'Explores how supply chains and logistics determine the outcome of military campaigns.',
    fullDescription: 'Logistics of War reveals the often-overlooked but crucial role that supply chains play in determining military outcomes. This comprehensive study examines how the challenges of moving, maintaining, and supplying armies have influenced strategy from ancient times to the present day. Through case studies of campaigns where logistics proved decisive—from Napoleon\'s disastrous Russian campaign to the Allied success in World War II—the book demonstrates that battles are often won or lost before they are fought. With detailed analysis of transportation systems, supply depots, and the evolution of military logistics organizations, this book provides essential reading for understanding the "unglamorous" side of warfare that ultimately determines victory or defeat.',
    price: 32.99
  },
  {
    id: 'book-4',
    title: 'Combat Psychology: The Mind at War',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Combat+Psychology',
    shortDescription: 'An examination of the psychological effects of combat on soldiers throughout history.',
    fullDescription: 'Combat Psychology: The Mind at War offers a profound exploration of how warfare affects the human mind. Drawing on historical accounts, letters, diaries, and modern psychological research, this book examines how soldiers have coped with the extreme stress of combat across different eras and conflicts. The text addresses topics such as courage, fear, unit cohesion, moral injury, and post-traumatic stress, providing insights into both the immediate psychological challenges of battle and the long-term effects of war experiences. By understanding the psychological dimension of warfare, readers gain a more complete picture of military history and a deeper appreciation for the human cost of conflict.',
    price: 27.99
  },
  {
    id: 'book-5',
    title: 'Weapons That Changed Warfare',
    category: 'books',
    thumbnail: 'https://placehold.co/600x400/234/fff?text=Military+Weapons',
    shortDescription: 'Chronicles the development of revolutionary weapons and their impact on military strategy.',
    fullDescription: 'Weapons That Changed Warfare examines the technological innovations that have transformed combat throughout history. From the longbow to nuclear weapons, this book analyzes how new armaments have repeatedly rendered existing tactics obsolete and forced military leaders to adapt. Each chapter focuses on a specific weapon system, explaining its development, technical characteristics, and the strategic and tactical revolutions it sparked. With detailed illustrations and accounts of these weapons in action, this book demonstrates how technological innovation has been a primary driver of military evolution, often with consequences that extend far beyond the battlefield into politics, society, and culture.',
    price: 36.99
  }
];

export const documents: Product[] = [
  {
    id: 'doc-archive-1',
    title: 'D-Day Planning Documents: Operation Overlord',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=D-Day+Documents',
    shortDescription: 'Declassified planning documents for the Allied invasion of Normandy in 1944.',
    fullDescription: 'This collection contains declassified planning documents related to Operation Overlord, the Allied invasion of Normandy on June 6, 1944. The archive includes original maps, intelligence assessments, logistical plans, and command directives that reveal the extraordinary complexity of planning the largest amphibious invasion in military history. These documents provide unprecedented insight into the strategic thinking of Allied commanders, the challenges they anticipated, and the deception operations designed to mislead German forces. For historians, researchers, and World War II enthusiasts, this collection offers a rare opportunity to examine the detailed planning that underpinned one of history\'s most consequential military operations.',
    price: 42.99
  },
  {
    id: 'doc-archive-2',
    title: 'Cold War Intelligence Briefings (1960-1975)',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Cold+War+Intelligence',
    shortDescription: 'Declassified intelligence reports from the height of the Cold War period.',
    fullDescription: 'This archive contains declassified intelligence briefings from a critical fifteen-year period of the Cold War, covering major events such as the Cuban Missile Crisis, the Vietnam War, and détente. The collection includes CIA assessments, National Intelligence Estimates, and diplomatic cables that reveal how American intelligence agencies understood Soviet intentions and capabilities. These documents demonstrate the challenges of intelligence gathering during this period, the analytical frameworks used to interpret information, and how intelligence assessments influenced policy decisions. For researchers studying Cold War history, international relations, or intelligence operations, this collection provides valuable primary sources that illuminate the hidden dimensions of superpower competition.',
    price: 39.99
  },
  {
    id: 'doc-archive-3',
    title: 'Civil War Field Dispatches and Orders',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Civil+War+Dispatches',
    shortDescription: 'Original military communications from Union and Confederate forces during the American Civil War.',
    fullDescription: 'This comprehensive collection brings together field dispatches, orders, and communications from both Union and Confederate forces during the American Civil War. The documents include battlefield reports, tactical orders, strategic assessments, and correspondence between commanders that reveal the day-to-day reality of Civil War military operations. Organized chronologically and by campaign, these primary sources allow researchers to trace the development of military events as they unfolded, offering insights into command decisions, battlefield conditions, and the fog of war that influenced this pivotal American conflict. Each document is presented with contextual information and annotations to help readers understand its significance within the broader narrative of the war.',
    price: 45.99
  },
  {
    id: 'doc-archive-4',
    title: 'Desert Storm: Coalition Warfare Documents',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Desert+Storm+Documents',
    shortDescription: 'Official documents detailing the coordination of the multinational coalition during the Gulf War.',
    fullDescription: 'This archive contains official documents related to the formation and operation of the 35-nation coalition during the 1991 Gulf War. The collection includes diplomatic agreements, command structure documents, rules of engagement protocols, and after-action reports that demonstrate the challenges and successes of multinational military cooperation. These materials reveal how different national forces were integrated into a cohesive military effort, how command authority was established and maintained, and how political considerations shaped military operations. For those studying modern warfare, international relations, or coalition operations, these documents provide valuable insights into what has become an increasingly common approach to military interventions in the post-Cold War world.',
    price: 37.99
  },
  {
    id: 'doc-archive-5',
    title: 'Strategic Bombing Survey: World War II',
    category: 'documents',
    thumbnail: 'https://placehold.co/600x400/432/fff?text=Strategic+Bombing+Survey',
    shortDescription: 'Post-war assessment of the effectiveness and impact of strategic bombing campaigns.',
    fullDescription: 'The Strategic Bombing Survey collection contains the comprehensive assessment conducted by Allied forces after World War II to evaluate the effectiveness of strategic bombing campaigns against Germany and Japan. These documents include damage assessments, economic impact analyses, interviews with enemy officials, and evaluations of specific targeting strategies. The survey represents one of history\'s most thorough attempts to objectively assess the military value of strategic bombing and its effects on enemy war production, civilian morale, and military capabilities. These findings not only shaped historical understanding of World War II air campaigns but also influenced the development of air power doctrine during the Cold War and beyond. This collection is essential for researchers studying air warfare, strategic planning, or the economic dimensions of total war.',
    price: 41.99
  }
];

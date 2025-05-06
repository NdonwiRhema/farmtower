import { ProductType } from '../types/productTypes';

export const productData: ProductType[] = [
  {
    id: 'prod-1',
    name: 'Premium Compact Tractor',
    description: 'A versatile compact tractor perfect for small to medium-sized farms.',
    fullDescription: 'This premium compact tractor is designed for versatility and efficiency on small to medium-sized farms. With its powerful engine and compact design, it can navigate tight spaces while providing enough power for most farming tasks. The ergonomic design ensures comfort during long hours of operation, and the user-friendly controls make it accessible to both experienced and novice operators.',
    price: 12500,
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ],
    featured: true,
    category: 'Tractors & Equipment',
    categoryId: 'cat-1',
    brandId: 'brand-6',
    features: [
      '25HP diesel engine',
      '4-wheel drive for excellent traction',
      'Hydraulic power steering',
      'Adjustable seat for operator comfort',
      'Front loader compatibility',
      'Rear PTO for implements',
      'Compact design for maneuverability'
    ],
    specifications: {
      'Engine': '25HP Diesel',
      'Transmission': '8 forward, 2 reverse gears',
      'Drive System': '4-wheel drive',
      'Fuel Capacity': '30 liters',
      'Hydraulics': '3-point hitch Category 1',
      'PTO': '540 RPM rear',
      'Weight': '900 kg',
      'Dimensions': '2.8m x 1.3m x 2.2m (LxWxH)'
    }
  },
  {
    id: 'prod-2',
    name: 'Advanced Drip Irrigation Kit',
    description: 'Complete drip irrigation system for water-efficient crop production.',
    fullDescription: 'Our Advanced Drip Irrigation Kit provides everything needed for efficient water management in your fields. This system delivers water directly to plant roots, minimizing waste through evaporation and runoff while maximizing crop yield. The kit includes high-quality drip lines, filters, pressure regulators, and all necessary fittings for easy installation.',
    price: 1850,
    image: 'https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg',
    additionalImages: [
      'https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ],
    featured: true,
    category: 'Irrigation Systems',
    categoryId: 'cat-2',
    brandId: 'brand-5',
    features: [
      'Water-efficient design saves up to 60% compared to traditional irrigation',
      'Pressure-compensating emitters ensure uniform water distribution',
      'UV-resistant materials for long-term outdoor use',
      'Includes filters to prevent clogging',
      'Modular design allows for expansion',
      'Compatible with fertilizer injection systems'
    ],
    specifications: {
      'Coverage Area': 'Up to 1 acre',
      'Drip Line Length': '500 meters',
      'Emitter Spacing': '30 cm',
      'Flow Rate': '2 liters per hour per emitter',
      'Operating Pressure': '1-3 bar',
      'Filter Mesh': '120 mesh',
      'Material': 'UV-resistant polyethylene'
    }
  },
  {
    id: 'prod-3',
    name: 'Organic Vegetable Seed Collection',
    description: 'Premium certified organic seeds for a variety of vegetables.',
    price: 45,
    image: 'https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg',
    featured: false,
    category: 'Seeds & Fertilizers',
    categoryId: 'cat-3',
    brandId: 'brand-3',
    features: [
      'Certified organic, non-GMO seeds',
      'High germination rate',
      'Includes 15 popular vegetable varieties',
      'Suitable for African climate conditions',
      'Detailed planting and care instructions included'
    ]
  },
  {
    id: 'prod-4',
    name: 'Professional Farming Tool Set',
    description: 'Complete set of essential hand tools for everyday farming tasks.',
    price: 120,
    image: 'https://images.pexels.com/photos/6152391/pexels-photo-6152391.jpeg',
    featured: false,
    category: 'Hand Tools',
    categoryId: 'cat-4',
    brandId: 'brand-2',
    features: [
      'Includes 10 essential farming tools',
      'Ergonomic handles for comfortable use',
      'Durable stainless steel construction',
      'Comes in a sturdy storage case',
      'Lifetime warranty against defects'
    ]
  },
  {
    id: 'prod-5',
    name: 'Combine Harvester',
    description: 'High-capacity combine harvester for efficient grain harvesting.',
    fullDescription: 'Our high-capacity combine harvester revolutionizes grain harvesting with its efficient operation and advanced features. Designed for medium to large farms, this machine significantly reduces harvest time while minimizing grain loss. The spacious operator cab provides excellent visibility and comfort during long harvest days.',
    image: 'https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg',
    featured: true,
    category: 'Harvesting Equipment',
    categoryId: 'cat-5',
    brandId: 'brand-4',
    features: [
      'High-capacity grain tank',
      'Advanced threshing system with minimal grain loss',
      'Adjustable settings for different crop types',
      'Climate-controlled operator cab',
      'Built-in yield monitoring system',
      'GPS compatibility for precision agriculture'
    ]
  },
  {
    id: 'prod-6',
    name: 'Automated Poultry Feeding System',
    description: 'Complete automated system for efficient poultry feeding management.',
    price: 2800,
    image: 'https://images.pexels.com/photos/583850/pexels-photo-583850.jpeg',
    featured: true,
    category: 'Livestock Supplies',
    categoryId: 'cat-6',
    brandId: 'brand-1',
    features: [
      'Automated scheduled feeding',
      'Adjustable feed quantities',
      'Large capacity feed storage',
      'Low feed level alerts',
      'Durable construction for poultry environment',
      'Easy to clean and maintain'
    ]
  },
  {
    id: 'prod-7',
    name: 'Multi-Purpose Farm Cultivator',
    description: 'Versatile tractor attachment for soil preparation and cultivation.',
    price: 1650,
    image: 'https://images.pexels.com/photos/4947454/pexels-photo-4947454.jpeg',
    featured: false,
    category: 'Tractors & Equipment',
    categoryId: 'cat-1',
    brandId: 'brand-6'
  },
  {
    id: 'prod-8',
    name: 'Sprinkler Irrigation System',
    description: 'Efficient overhead irrigation system for medium to large fields.',
    price: 3200,
    image: 'https://images.pexels.com/photos/4019694/pexels-photo-4019694.jpeg',
    featured: false,
    category: 'Irrigation Systems',
    categoryId: 'cat-2',
    brandId: 'brand-5'
  },
  {
    id: 'prod-9',
    name: 'Premium Grain Seed Collection',
    description: 'High-yield grain seeds adapted for African growing conditions.',
    price: 85,
    image: 'https://images.pexels.com/photos/1359324/pexels-photo-1359324.jpeg',
    featured: false,
    category: 'Seeds & Fertilizers',
    categoryId: 'cat-3',
    brandId: 'brand-3'
  },
  {
    id: 'prod-10',
    name: 'Heavy-Duty Garden Hoe',
    description: 'Durable garden hoe for weeding and soil preparation.',
    price: 35,
    image: 'https://images.pexels.com/photos/2421480/pexels-photo-2421480.jpeg',
    featured: false,
    category: 'Hand Tools',
    categoryId: 'cat-4',
    brandId: 'brand-2'
  },
  {
    id: 'prod-11',
    name: 'Manual Grain Thresher',
    description: 'Efficient manual thresher for small-scale grain processing.',
    price: 450,
    image: 'https://images.pexels.com/photos/4149040/pexels-photo-4149040.jpeg',
    featured: false,
    category: 'Harvesting Equipment',
    categoryId: 'cat-5',
    brandId: 'brand-4'
  },
  {
    id: 'prod-12',
    name: 'Livestock Watering System',
    description: 'Automated water supply system for livestock.',
    price: 780,
    image: 'https://images.pexels.com/photos/1766307/pexels-photo-1766307.jpeg',
    featured: false,
    category: 'Livestock Supplies',
    categoryId: 'cat-6',
    brandId: 'brand-1'
  }
];
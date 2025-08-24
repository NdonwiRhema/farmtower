import { ProductType } from '../types/productTypes';

export const productData: ProductType[] = [
  {
    id: 'prod-1',
    name: 'Premium Compact Tractor',
    description: 'A versatile compact tractor perfect for small to medium-sized farms.',
    fullDescription: 'This premium compact tractor is designed for versatility and efficiency on small to medium-sized farms. With its powerful engine and compact design, it can navigate tight spaces while providing enough power for most farming tasks. The ergonomic design ensures comfort during long hours of operation, and the user-friendly controls make it accessible to both experienced and novice operators.',
    price: 12500,
    image: 'https://www.preet.co/images/PREET-2549-2WD-1.jpg',
    additionalImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4zQJr2igBGV9lEmsA4gzusrE15RkvFNgxw&s',
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'
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
    id: 'prod-12',
    name: 'Tractor Attachments',
    description: 'Tractor attachments are tools that connect to a tractor’s three-point hitch or PTO ...',
    fullDescription: 'Tractor attachments are tools that connect to a tractor’s three-point hitch or PTO (power take-off) to perform a variety of agricultural tasks. They can significantly improve the efficiency and productivity of a farm by automating or simplifying many labor-intensive processes. Here’s a look at some of the most common tractor attachments and how they can empower farmers',
    price:500,
    image: 'https://omagroindia.com/wp-content/uploads/2019/03/tractor-attachments-1587809404-5392403.jpg',
    additionalImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4zQJr2igBGV9lEmsA4gzusrE15RkvFNgxw&s',
      'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'
    ],
    featured: true,
    category: 'Tractors & Equipment',
    categoryId: 'cat-1',
    brandId: 'brand-6',
    features: [
      'Connect to a tractor’s three-point hitch or PTO',
      'High Quality',
    ],
    specifications: {
      'PTO': '540 RPM rear',
      'Weight': '300 kg',
      'Dimensions': '84cm x 36cm x 48cm (LxWxH)'
    }
  },
  {
    id: 'prod-2',
    name: 'Advanced Drip Irrigation Kit',
    description: 'Complete drip irrigation system for water-efficient crop production.',
    fullDescription: 'Our Advanced Drip Irrigation Kit provides everything needed for efficient water management in your fields. This system delivers water directly to plant roots, minimizing waste through evaporation and runoff while maximizing crop yield. The kit includes high-quality drip lines, filters, pressure regulators, and all necessary fittings for easy installation.',
    price: 1850,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cuHihcgvJ64fh5ozFuTvCjvzoKELxHVhOcoG7_088oCgqqgBa2sNvJn0KZzD8TyIbYU&usqp=CAU',
    additionalImages: [
      'https://m.media-amazon.com/images/I/81qS+0iTxTL._UF1000,1000_QL80_.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhz2CxmTg-Y7cKhdO7iN6bDOa5L-ShbjJagOpTFLEME94xuSF47iZ5f6RjN9KoyltHnhc&usqp=CAU'
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
    image: 'https://blog.machinefinder.com/wp-content/uploads/2019/07/tseries-combine-r2C001197-1024x576.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgR3WA1FWoJaIfFEKmgJ1Oqge8ty8sLyOze1MhhDsLD8S3yEK4_CxL36jiWX1SnnGJD0&usqp=CAU',
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
    image: 'https://image.made-in-china.com/202f0j00dIhcUNYGbiol/8HP-12HP-15HP-Power-Tiller-Mini-Tractor-Cultivator-Plough-Farm-Multipurpose-with-Plough-Rotovator-Corn-Wheat-Planter-Hand-Walking-Tractors.webp',
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
    image: 'https://automatworld.in/global/public/admin/assets/images/automat/Blog_thumbnail/1751006854-9%20Reasons%20Why%20Sprinkler%20Irrigation%20is%20a%20Cost-Effective%20Solution.jpg',
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
    image: 'https://4.imimg.com/data4/BE/VS/MY-11412500/organic-seed-500x500.jpg',
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
    image: 'https://d1utvfg27pmj9q.cloudfront.net/uploads/products/photos/837b891cf43748b6ab4bcfbf1f2220fd.webp',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZihj5ISx5X2gAtp24y1Yr0BI8LvLETfM8IJ1Jf6TjznNiuowOmFYnyxna8UscQ85QjYA&usqp=CAU',
    featured: false,
    category: 'Livestock Supplies',
    categoryId: 'cat-6',
    brandId: 'brand-1'
  }
];
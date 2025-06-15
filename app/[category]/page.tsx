import Link from 'next/link'
import menuData from '../../data/menu.json'

type Item = {
  nameTR: string;
  nameEN: string;
  price: string;
  descriptionTR: string;
  descriptionEN: string;
};

type Category = {
  slug: string;
  titleTR: string;
  titleEN: string;
  time?: string;
  items: Item[];
};

const categoryNames: { [key: string]: { tr: string; en: string } } = {
  'kahvalti': { tr: 'Kahvaltı', en: 'Breakfast' },
  'plaj': { tr: 'Plaj', en: 'Beach' },
  'kokteyl': { tr: 'Kokteyl', en: 'Cocktail' },
  'icecek': { tr: 'İçecek', en: 'Drinks' },
  'yemek': { tr: 'Yemek', en: 'Dinner' },
  'oda-servisi': { tr: 'Oda Servisi', en: 'Room Service' },
  'sarap': { tr: 'Şarap', en: 'Wine' },
}

export async function generateStaticParams() {
  return [
    { category: 'kahvalti' },
    { category: 'plaj' },
    { category: 'kokteyl' },
    { category: 'icecek' },
    { category: 'yemek' },
    { category: 'oda-servisi' },
    { category: 'sarap' },
  ]
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  
  // Find the category data from the menu array
  const categoryData = menuData.find(cat => cat.slug === category)
  const categoryName = categoryNames[category]

  if (!categoryName || !categoryData) {
    return (
      <div className="min-h-screen gradient-blue-wave flex items-center justify-center">
        <div className="glass-effect-blue rounded-3xl p-10 shadow-blue-xl text-center border-gradient-blue">
          <h1 className="text-gradient-blue font-display text-3xl font-bold mb-6">Kategori Bulunamadı</h1>
          <p className="text-brand-blue/80 mb-8 text-lg">Category Not Found</p>
          <Link href="/" className="inline-block gradient-blue text-white px-8 py-4 rounded-2xl hover-lift shadow-blue font-semibold">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    )
  }

  const items = categoryData.items

  return (
    <div className="min-h-screen gradient-blue-wave">
      {/* Premium Header with blue dominance */}
      <div className="glass-effect-blue shadow-blue-xl animate-float">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="hover-glow glass-effect-blue px-6 py-3 rounded-2xl shadow-blue hover-lift transition-all duration-300 border-blue"
            >
              <span className="text-brand-blue font-semibold text-lg">← Menü</span>
            </Link>
            
            <div className="text-center flex-1">
              <h1 className="text-gradient-blue font-display text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
                {categoryName.tr}
              </h1>
              <div className="divider-blue">
                <span className="font-body text-xl font-semibold">{categoryName.en}</span>
              </div>
            </div>
            
            <div className="w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Premium Menu Items with blue theme */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {items.map((item, index) => {
              // Check if this is a section header (no price)
              if (!item.price) {
                return (
                  <div 
                    key={index} 
                    className="divider-blue animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gradient-blue font-display text-2xl font-bold">
                      {item.nameTR}
                    </span>
                  </div>
                )
              }

              return (
                <div
                  key={index}
                  className="corner-accent-blue glass-effect-blue hover-lift hover-glow animate-fade-in-up animate-pulse-glow rounded-3xl p-8 shadow-blue border-gradient-blue transition-all duration-500 group hover-blue"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Blue shimmer overlay */}
                  <div className="shimmer-blue absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <div className="flex-1 pr-6">
                      {/* Item name with blue gradient */}
                      <h3 className="text-gradient-blue font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-gradient-premium transition-all duration-300">
                        {item.nameTR}
                      </h3>
                      
                      {/* English name with blue accent */}
                      <p className="text-brand-blue/70 font-body text-base md:text-lg italic mb-4 group-hover:text-brand-blue/90 transition-colors duration-300">
                        {item.nameEN}
                      </p>
                      
                      {/* Description with elegant blue typography */}
                      {item.descriptionTR && (
                        <p className="text-brand-blue/80 font-body text-sm md:text-base leading-relaxed mb-4 group-hover:text-brand-blue transition-colors duration-300">
                          {item.descriptionTR}
                        </p>
                      )}
                      
                      {/* Premium blue hover indicator */}
                      <div className="w-12 h-1 gradient-blue-light rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:w-20"></div>
                    </div>
                    
                    {/* Premium price styling with blue theme */}
                    <div className="flex-shrink-0 text-right">
                      <div className="glass-effect-blue px-6 py-4 rounded-2xl shadow-inner-blue border-gradient-blue">
                        <span className="text-gradient-blue font-display text-2xl md:text-3xl font-bold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Blue decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-brand-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-brand-blue-light/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 right-4 w-1 h-12 gradient-blue-light rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Premium Footer with blue theme */}
      <div className="glass-effect-blue shadow-inner-blue mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="divider-blue mb-8">
              <span className="font-display text-lg uppercase tracking-wider">Bonventi Restaurant</span>
            </div>
            <p className="text-brand-blue/80 font-body text-lg mb-8">
              Premium dining experience • Lüks yemek deneyimi
            </p>
            
            {/* Back to menu button with blue theme */}
            <div className="mb-6">
              <Link 
                href="/" 
                className="inline-block glass-effect-blue hover-glow px-10 py-4 rounded-2xl shadow-blue hover-lift transition-all duration-300 border-gradient-blue"
              >
                <span className="text-gradient-blue font-display font-bold text-lg">Ana Menüye Dön</span>
              </Link>
            </div>
            
            {/* Blue brand elements */}
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-0.5 gradient-blue rounded-full"></div>
              <div className="w-3 h-3 bg-brand-blue/30 rounded-full"></div>
              <div className="w-8 h-0.5 gradient-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
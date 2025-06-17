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
  'alacarte-kahvalti': { tr: 'A La Carte Kahvaltı', en: 'A La Carte Breakfast' },
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
    { category: 'alacarte-kahvalti' },
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
      {/* Premium Header with blue dominance - Mobile optimized */}
      <div className="glass-effect-blue shadow-blue-xl animate-float">
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="hover-glow glass-effect-blue px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-blue hover-lift transition-all duration-300 border-blue"
            >
              <span className="text-brand-blue font-semibold text-base md:text-lg">← Menü</span>
            </Link>
            
            <div className="text-center flex-1">
              <h1 className="text-gradient-blue font-display text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 animate-fade-in-up">
                {categoryName.tr}
              </h1>
              <div className="divider-blue">
                <span className="font-body text-sm md:text-xl font-semibold">{categoryName.en}</span>
              </div>
            </div>
            
            <div className="w-16 md:w-20"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Premium Menu Items with blue theme - Mobile optimized */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4 md:gap-8">
            {items.map((item, index) => {
              // Check if this is a category header (no price and often no description)
              const isCategoryHeader = !item.price && !item.descriptionTR && !item.descriptionEN;
              
              return (
                <div
                  key={index}
                  className={`corner-accent-blue glass-effect-blue hover-lift hover-glow animate-fade-in-up animate-pulse-glow rounded-2xl md:rounded-3xl shadow-blue border-gradient-blue transition-all duration-500 group hover-blue ${
                    isCategoryHeader 
                      ? 'p-4 md:p-6 bg-gradient-to-r from-brand-blue/5 to-brand-blue/10' 
                      : 'p-4 md:p-8'
                  }`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* Blue shimmer overlay */}
                  <div className="shimmer-blue absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {isCategoryHeader ? (
                      /* Category Header Styling */
                      <div className="text-center">
                        <h3 className="text-gradient-blue font-display text-xl md:text-2xl lg:text-3xl font-bold">
                          {item.nameTR}
                        </h3>
                        <p className="text-brand-blue/70 font-body text-sm md:text-base lg:text-lg italic mt-1">
                          {item.nameEN}
                        </p>
                      </div>
                    ) : (
                      /* Regular Item Styling - Mobile optimized */
                      <div className="flex justify-between items-start gap-3 md:gap-6">
                        <div className="flex-1 min-w-0">
                          {/* Item name with blue gradient - Responsive text sizes */}
                          <h3 className="text-gradient-blue font-display text-lg md:text-2xl lg:text-3xl font-bold mb-1 md:mb-3 group-hover:text-gradient-premium transition-all duration-300 leading-tight">
                            {item.nameTR}
                          </h3>
                          
                          {/* English name with blue accent - Smaller on mobile */}
                          <p className="text-brand-blue/70 font-body text-sm md:text-base lg:text-lg italic mb-2 md:mb-4 group-hover:text-brand-blue/90 transition-colors duration-300 leading-tight">
                            {item.nameEN}
                          </p>
                          
                          {/* Description with elegant blue typography - Collapsible on mobile */}
                          {item.descriptionTR && (
                            <div className="mb-2 md:mb-4">
                              <p className="text-brand-blue/80 font-body text-xs md:text-sm lg:text-base leading-relaxed mb-1 md:mb-2 group-hover:text-brand-blue transition-colors duration-300 whitespace-pre-line line-clamp-3 md:line-clamp-none">
                                {item.descriptionTR}
                              </p>
                              {item.descriptionEN && (
                                <p className="text-brand-blue/60 font-body text-xs md:text-sm lg:text-base leading-relaxed italic group-hover:text-brand-blue/80 transition-colors duration-300 whitespace-pre-line line-clamp-2 md:line-clamp-none hidden md:block">
                                  {item.descriptionEN}
                                </p>
                              )}
                            </div>
                          )}
                          
                          {/* Premium blue hover indicator - Smaller on mobile */}
                          <div className="w-8 md:w-12 h-0.5 md:h-1 gradient-blue-light rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:w-12 md:group-hover:w-20"></div>
                        </div>
                        
                        {/* Premium price styling with blue theme - Mobile optimized */}
                        {item.price && (
                          <div className="flex-shrink-0 text-right">
                            <div className="glass-effect-blue px-3 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-inner-blue border-gradient-blue">
                              <span className="text-gradient-blue font-display text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Blue decorative elements - Smaller on mobile */}
                  <div className="absolute top-3 md:top-6 right-3 md:right-6 w-2 md:w-3 h-2 md:h-3 bg-brand-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 w-1.5 md:w-2 h-1.5 md:h-2 bg-brand-blue-light/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-1/2 right-2 md:right-4 w-0.5 md:w-1 h-6 md:h-12 gradient-blue-light rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Premium Footer with blue theme - Mobile optimized */}
      <div className="glass-effect-blue shadow-inner-blue mt-12 md:mt-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            <div className="divider-blue mb-6 md:mb-8">
              <span className="font-display text-sm md:text-lg uppercase tracking-wider">Bonventi Restaurant</span>
            </div>
            <p className="text-brand-blue/80 font-body text-base md:text-lg mb-6 md:mb-8">
              Premium dining experience • Lüks yemek deneyimi
            </p>
            
            {/* Back to menu button with blue theme - Mobile optimized */}
            <div className="mb-4 md:mb-6">
              <Link 
                href="/" 
                className="inline-block glass-effect-blue hover-glow px-6 py-3 md:px-10 md:py-4 rounded-2xl shadow-blue hover-lift transition-all duration-300 border-gradient-blue"
              >
                <span className="text-gradient-blue font-display font-bold text-base md:text-lg">Ana Menüye Dön</span>
              </Link>
            </div>
            
            {/* Blue brand elements - Smaller on mobile */}
            <div className="flex justify-center items-center space-x-3 md:space-x-4">
              <div className="w-6 md:w-8 h-0.5 gradient-blue rounded-full"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-brand-blue/30 rounded-full"></div>
              <div className="w-6 md:w-8 h-0.5 gradient-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
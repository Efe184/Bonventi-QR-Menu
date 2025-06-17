import Link from "next/link";
import Image from "next/image";

const categories = [
  { 
    id: 'kahvalti', 
    name: 'Kahvaltı', 
    nameEn: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-amber-100 to-orange-100',
    description: 'Taze ve lezzetli kahvaltı seçenekleri'
  },
  { 
    id: 'alacarte-kahvalti', 
    name: 'A La Carte Kahvaltı', 
    nameEn: 'A La Carte Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-yellow-100 to-amber-100',
    description: 'Ayrı ayrı sipariş edilebilen kahvaltı seçenekleri'
  },
  { 
    id: 'plaj', 
    name: 'Plaj', 
    nameEn: 'Beach',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-cyan-100 to-blue-100',
    description: 'Deniz kenarında hafif atıştırmalıklar'
  },
  { 
    id: 'kokteyl', 
    name: 'Kokteyl', 
    nameEn: 'Cocktail',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-pink-100 to-rose-100',
    description: 'Özel karışım kokteyl çeşitleri'
  },
  { 
    id: 'icecek', 
    name: 'İçecek', 
    nameEn: 'Drinks',
    imageUrl: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-emerald-100 to-green-100',
    description: 'Serinletici içecek seçenekleri'
  },
  { 
    id: 'yemek', 
    name: 'Yemek', 
    nameEn: 'Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-red-100 to-orange-100',
    description: 'Ana yemek ve özel lezzetler'
  },
  { 
    id: 'oda-servisi', 
    name: 'Oda Servisi', 
    nameEn: 'Room Service',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-indigo-100 to-purple-100',
    description: 'Odanıza özel servis menüsü'
  },
  { 
    id: 'sarap', 
    name: 'Şarap', 
    nameEn: 'Wine',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop&crop=center',
    fallbackColor: 'bg-gradient-to-br from-purple-100 to-indigo-100',
    description: 'Seçkin şarap koleksiyonu'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen gradient-blue-wave">
      {/* Premium Header with Bonventi Branding - Mobile optimized */}
      <div className="glass-effect-blue shadow-blue-xl animate-float">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            {/* Bonventi Logo - Responsive sizing */}
            <div className="mb-6 md:mb-8 animate-fade-in-up">
              <h1 className="text-gradient-blue font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-2 tracking-wider">
                BONVÉNTI
              </h1>
              <div className="font-script text-brand-blue/80 text-xl md:text-2xl lg:text-3xl italic">
                by the sea
              </div>
            </div>
            
            <div className="divider-blue">
              <span className="font-display text-base md:text-xl">Premium Menu Experience</span>
            </div>
            <p className="text-brand-blue/90 font-body text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mt-4 md:mt-6">
              Lüks deneyimimizi keşfedin • Discover our luxury experience
            </p>
            
            {/* Blue accent decoration - Smaller on mobile */}
            <div className="flex justify-center mt-6 md:mt-8">
              <div className="w-16 md:w-24 h-0.5 md:h-1 gradient-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Categories Grid with authentic images - Mobile optimized */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/${category.id}`}
              className="group block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="corner-accent-blue glass-effect-blue hover-lift hover-glow animate-fade-in-up animate-pulse-glow rounded-2xl md:rounded-3xl overflow-hidden h-full border-gradient-blue shadow-blue transition-all duration-500 hover-blue">
                {/* Blue shimmer overlay */}
                <div className="shimmer-blue absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                
                {/* Premium Image Section - Responsive height */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  {/* Fallback gradient background */}
                  <div className={`absolute inset-0 ${category.fallbackColor}`}></div>
                  
                  {/* Main image */}
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                  
                  {/* Category badge - Enhanced visibility - Mobile responsive */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/30 shadow-lg">
                    <span className="text-brand-blue text-xs font-bold uppercase tracking-wider">
                      {category.nameEn}
                    </span>
                  </div>
                  
                  {/* Floating title on image - Mobile responsive */}
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                    <h3 className="text-white font-display text-xl md:text-2xl lg:text-3xl font-bold mb-1 drop-shadow-lg leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>
                
                {/* Content Section - Mobile optimized padding */}
                <div className="relative z-10 p-4 md:p-6 text-center bg-white/95 backdrop-blur-sm">
                  {/* Description - Mobile responsive text */}
                  <p className="text-brand-blue/80 font-body text-sm md:text-base leading-relaxed mb-3 md:mb-4 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 md:line-clamp-none">
                    {category.description}
                  </p>
                  
                  {/* Premium blue hover indicator - Mobile responsive */}
                  <div className="flex justify-center">
                    <div className="w-8 md:w-12 h-0.5 md:h-1 gradient-blue-light rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:w-12 md:group-hover:w-20"></div>
                  </div>
                </div>

                {/* Blue decorative elements - Mobile responsive */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 w-2 md:w-3 h-2 md:h-3 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-16 md:bottom-20 right-4 md:right-6 w-1.5 md:w-2 h-1.5 md:h-2 bg-brand-blue/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Premium Footer with Gventis Group Style - Mobile optimized */}
      <div className="glass-effect-blue shadow-inner-blue mt-12 md:mt-20">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center">
            {/* Gventis Group Style Logo - Mobile responsive */}
            <div className="mb-6 md:mb-8">
              <h2 className="font-body text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-brand-blue mb-2">
                GVENTIS
              </h2>
              <div className="font-body text-xs md:text-sm lg:text-base font-medium uppercase tracking-[0.3em] text-brand-blue/70">
                GROUP
              </div>
            </div>
            
            <p className="text-brand-blue/80 font-body text-base md:text-lg mb-6 md:mb-8">
              Premium dining experience • Lüks yemek deneyimi
            </p>
            
            {/* Blue brand elements - Mobile responsive */}
            <div className="flex justify-center items-center space-x-3 md:space-x-4">
              <div className="w-6 md:w-8 h-0.5 gradient-blue rounded-full"></div>
              <div className="w-2 md:w-3 h-2 md:h-3 bg-brand-blue/30 rounded-full"></div>
              <div className="w-6 md:w-8 h-0.5 gradient-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

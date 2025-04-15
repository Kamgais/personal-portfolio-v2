
import { ArrowLeft, Coffee, Book, Camera, Headphones, Gamepad, Code, Globe, MoveLeft, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";



// Photo data for gallery
const photos = [
  {
    id: 1,
    src: "/image1.jpeg",
    alt: "Professional portrait",
    caption: "Only Good vibes"
  },
  {
    id: 2,
    src: "/image3.jpeg",
    alt: "Nature hiking",
    caption: "Only Good vibes"
  },
  {
    id: 3,
    src: "/image4.jpeg",
    alt: "Traveling abroad",
    caption: "Only Good vibes"
  },
  {
    id: 4,
    src: "/image6.jpeg",
    alt: "With pets",
    caption: "Only Good vibes"
  },
  {
    id: 5,
    src: "/image9.jpeg",
    alt: "At home",
    caption: "Only Good vibes"
  }
];

const Index = () => {

  return (
    <div className="min-h-screen   px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:mt-16 mt-5">
      {/* Header with back button */}
      <div className="flex items-center mb-8">
        <button className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
          <Link href='/'>
          <MoveLeft size={15}/> 
          </Link>
        </button>
        <h1 className="text-2xl font-bold ml-2">#About me</h1>
      </div>

      {/* Greeting section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-medium mb-10">
          Hello I'm <span className="text-slate-700 text-3xl">Cyril Kamgais</span>
          <span className="inline-block ml-2">👋</span>
        </h2>

        {/* Profile image */}
        <div className="w-48 h-48 mx-auto mb-10 overflow-hidden rounded-full bg-blue-100 border-4 border-white shadow-xl ring-2 ring-gray-100 ring-opacity-50 transition-all duration-500 hover:shadow-2xl">
          <img
            src="/profile-pic.png"
            alt="Cyril Kamgais"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Me Content */}
      <div className="max-w-2xl mx-auto space-y-8 text-sm text-slate-700">
        <p className="leading-relaxed">
          <span className="inline-block mr-1">👋</span> Hey there! I'm Cyril, a curious soul with a passion for creativity and exploration. 
          When I'm not immersed in the digital world, I find joy in simple pleasures and meaningful connections.
        </p>

        {/* Photo Gallery Section */}
        <div className="py-6">
          <h3 className="text-2xl font-medium mb-6 text-slate-800 border-b border-slate-200 pb-2 inline-block">Photo Gallery</h3>
          
          <div className="space-y-6">
            {/* Main Carousel */}
            <Carousel className="w-full max-w-xl mx-auto"
             
            >
              <CarouselContent>
                {photos.map((photo, index) => (
                  <CarouselItem key={photo.id}>
                    <Card className="border-none shadow-none">
                      <CardContent className="p-0">
                        <AspectRatio ratio={4/3} className="bg-slate-50 rounded-lg overflow-hidden">
                          <img 
                            src={photo.src} 
                            alt={photo.alt}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                          />
                        </AspectRatio>
                        <p className="text-center text-sm text-slate-600 mt-2 italic">{photo.caption}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="py-6">
          <h3 className="text-2xl font-medium mb-6 text-slate-800 border-b border-slate-200 pb-2 inline-block">My Hobbies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <HobbyCard icon={<Lightbulb />} title="Ideas" description="💡 Exploring new saas ideas and tech companies out there" />
          <HobbyCard icon={<Book />} title="Reading" description="📚 Fiction, philosophy, and thought-provoking essays" />
          <HobbyCard icon={<Camera />} title="Photography" description="📸 Capturing moments and finding beauty in the ordinary" />
          <HobbyCard icon={<Headphones />} title="Music" description="🎧 From jazz classics to indie discoveries" />
          <HobbyCard icon={<Gamepad />} title="Gaming" description="🎮 Strategy games and immersive RPGs" />
          <HobbyCard icon={<Code />} title="Side Projects" description="🛠️ Building fun tools and experimenting with new tech" />

          </div>
        </div>

        {/* More About Me Section */}
        <div className="py-6">
          <h3 className="text-2xl font-medium mb-6 text-slate-800 border-b border-slate-200 pb-2 inline-block">More About Me</h3>
          <div className="space-y-4">
            <p className="leading-relaxed">
              I'm a firm believer in continuous learning and personal growth. Weekends often find me hiking local trails, 
              experimenting with new recipes, or losing track of time in bookstores.
            </p>
            <p className="leading-relaxed">
              I enjoy meaningful conversations over good food and dream of traveling to experience diverse cultures around the world.
            </p>
            <p className="leading-relaxed">
              My philosophy is simple: stay curious, be kind, and find joy in the journey rather than just the destination.
            </p>
          </div>
        </div>

        {/* Things I Love Section */}
        <div className="py-6">
          <h3 className="text-2xl font-medium mb-6 text-slate-800 border-b border-slate-200 pb-2 inline-block">Things I Love</h3>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 py-1.5">Sunrise hikes</Badge>
            <Badge className="bg-green-50 text-green-700 hover:bg-green-100 border border-green-100 py-1.5">Podcasts</Badge>
            <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-100 py-1.5">Documentary films</Badge>
            <Badge className="bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-100 py-1.5">Winter evenings</Badge>
            <Badge className="bg-red-50 text-red-700 hover:bg-red-100 border border-red-100 py-1.5">Afro music</Badge>
            <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-100 py-1.5">Street food</Badge>
            <Badge className="bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-100 py-1.5">Art museums</Badge>
            <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-100 py-1.5">Board games</Badge>
          </div>
        </div>

        {/* Connect Section */}
        <div className="py-10 text-center">
          <p className="italic mb-5 text-slate-600">Let's connect and share stories!</p>
          <div className="inline-flex items-center px-4 py-2 bg-slate-50 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
            <Globe className="h-5 w-5 mr-2 text-blue-500" />
            <span className="text-blue-500 font-medium">cyrilkamgais.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hobby Card Component
const HobbyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300">
      <div className="text-slate-700 mb-3">{icon}</div>
      <h4 className="font-medium text-slate-800 mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Index;

import { Book, Camera, Headphones, Gamepad, Code, Globe, MoveLeft, Lightbulb, User, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="group flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <div className="p-2 rounded-full group-hover:bg-slate-100 transition-colors duration-200">
                <MoveLeft size={18}/>
              </div>
              <span className="ml-2 font-medium">Back</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
            <User className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Hello, I&apos;m <span className="text-blue-600">Cyril Kamgais</span>
            <span className="inline-block ml-2 text-3xl">👋</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A curious soul with a passion for creativity, exploration, and meaningful connections.
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative mb-16">
          <Card className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 mb-6 overflow-hidden rounded-full bg-white/10 border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                    <Image
                      src="/profile-pic.png"
                      alt="Cyril Kamgais"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Cyril Kamgais</h2>
                  <p className="text-purple-200 text-lg">Software Developer & Creative Thinker</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-8">
                {/* Introduction */}
                <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-6">
                  <p className="text-slate-700 leading-relaxed text-center">
                    <span className="inline-block mr-1">👋</span> Hey there! I&apos;m Cyril, a curious soul with a passion for creativity and exploration. 
                    When I&apos;m not immersed in the digital world, I find joy in simple pleasures and meaningful connections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-pink-100 rounded-lg mr-3">
                  <Camera className="h-5 w-5 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Photo Gallery</h3>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {photos.map((photo) => (
                      <CarouselItem key={photo.id}>
                        <Card className="border-none shadow-none">
                          <CardContent className="p-0">
                            <AspectRatio ratio={4/3} className="bg-slate-50 rounded-xl overflow-hidden shadow-md">
                              <Image 
                                src={photo.src} 
                                alt={photo.alt}
                                width={400}
                                height={300}
                                className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                              />
                            </AspectRatio>
                            <p className="text-center text-sm text-slate-600 mt-3 font-medium">{photo.caption}</p>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/80 backdrop-blur-sm" />
                  <CarouselNext className="right-2 bg-white/80 backdrop-blur-sm" />
                </Carousel>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hobbies Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">My Hobbies</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <HobbyCard icon={<Lightbulb />} title="Ideas" description="💡 Exploring new saas ideas and tech companies out there" />
                <HobbyCard icon={<Book />} title="Reading" description="📚 Fiction, philosophy, and thought-provoking essays" />
                <HobbyCard icon={<Camera />} title="Photography" description="📸 Capturing moments and finding beauty in the ordinary" />
                <HobbyCard icon={<Headphones />} title="Music" description="🎧 From jazz classics to indie discoveries" />
                <HobbyCard icon={<Gamepad />} title="Gaming" description="🎮 Strategy games and immersive RPGs" />
                <HobbyCard icon={<Code />} title="Side Projects" description="🛠️ Building fun tools and experimenting with new tech" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* More About Me Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">More About Me</h3>
              </div>
              
              <div className="space-y-6 max-w-3xl">
                <div className="border-l-4 border-blue-200 pl-6">
                  <p className="text-slate-700 leading-relaxed">
                    I&apos;m a firm believer in continuous learning and personal growth. Weekends often find me hiking local trails, 
                    experimenting with new recipes, or losing track of time in bookstores.
                  </p>
                </div>
                <div className="border-l-4 border-purple-200 pl-6">
                  <p className="text-slate-700 leading-relaxed">
                    I enjoy meaningful conversations over good food and dream of traveling to experience diverse cultures around the world.
                  </p>
                </div>
                <div className="border-l-4 border-green-200 pl-6">
                  <p className="text-slate-700 leading-relaxed">
                    My philosophy is simple: stay curious, be kind, and find joy in the journey rather than just the destination.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Things I Love Section */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-lg bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-red-100 rounded-lg mr-3">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Things I Love</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 hover:from-blue-100 hover:to-blue-200 border border-blue-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Sunrise hikes</Badge>
                <Badge className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 hover:from-green-100 hover:to-green-200 border border-green-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Podcasts</Badge>
                <Badge className="bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 hover:from-yellow-100 hover:to-yellow-200 border border-yellow-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Documentary films</Badge>
                <Badge className="bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 hover:from-purple-100 hover:to-purple-200 border border-purple-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Winter evenings</Badge>
                <Badge className="bg-gradient-to-r from-red-50 to-red-100 text-red-700 hover:from-red-100 hover:to-red-200 border border-red-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Afro music</Badge>
                <Badge className="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 hover:from-indigo-100 hover:to-indigo-200 border border-indigo-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Street food</Badge>
                <Badge className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-700 hover:from-pink-100 hover:to-pink-200 border border-pink-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Art museums</Badge>
                <Badge className="bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 hover:from-teal-100 hover:to-teal-200 border border-teal-200 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200">Board games</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connect Section */}
        <div className="text-center">
          <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800">
            <CardContent className="p-8">
              <p className="text-slate-300 mb-6 text-lg">Let&apos;s connect and share stories!</p>
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Globe className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-blue-400 font-medium">cyrilkamgais.com</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Hobby Card Component with modern design
const HobbyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 group">
      <div className="text-slate-600 mb-4 group-hover:text-blue-600 transition-colors duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <h4 className="font-semibold text-slate-800 mb-2 text-lg">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default About;
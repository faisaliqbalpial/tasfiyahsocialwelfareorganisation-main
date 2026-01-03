import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { founder, coFounder } from "@/data/committeeData";
import { Quote } from "lucide-react";

interface FounderCardProps {
  person: {
    name: string;
    title: string;
    image: string;
    message: string;
  };
}

const FounderCard = ({ person }: FounderCardProps) => (
  <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-card">
    {/* Header Gradient */}
    <div className="h-32 md:h-40 bg-hero-gradient relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
    </div>

    {/* Profile Image */}
    <div className="relative -mt-16 md:-mt-20 px-6 flex justify-center">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background overflow-hidden shadow-lg">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">{person.name}</h2>
      <p className="text-primary font-medium mt-2">{person.title}</p>
      <p className="text-sm text-muted-foreground mt-1">তাসফিয়াহ্ সমাজকল্যাণ সংস্থা</p>

      {/* Message */}
      <div className="mt-6 bg-muted/30 rounded-2xl p-5 md:p-6 relative text-left">
        <Quote className="w-8 h-8 text-primary/20 absolute top-3 left-3" />
        <p className="text-xs text-primary font-medium mb-3 pt-6">{person.title}র বার্তা</p>
        <div className="space-y-3">
          {person.message.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-sm text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Founder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                নেতৃত্ব
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                প্রতিষ্ঠাতাদের <span className="text-gradient">বার্তা</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                যাদের স্বপ্ন ও প্রচেষ্টায় তাসফিয়াহ্ সমাজকল্যাণ সংস্থার যাত্রা শুরু
              </p>
            </div>

            {/* Founders Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <FounderCard person={founder} />
              <FounderCard person={coFounder} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Founder;

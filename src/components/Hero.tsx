import { ArrowRight, Users, TreePine, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { icon: Users, value: "১১৯+", label: "অনুসারী" },
    { icon: TreePine, value: "১০+", label: "বৃক্ষ প্রজাতি" },
    { icon: Award, value: "৫+", label: "সফল অনুষ্ঠান" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
            <span className="text-sm font-medium text-muted-foreground">
              মানবতার সেবায় নিবেদিত
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-100">
            তাসফিয়াহ্
            <span className="block text-gradient mt-2">সমাজকল্যাণ সংস্থা</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up delay-200">
            একটি অলাভজনক, অরাজনৈতিক ও স্বেচ্ছাসেবী প্রতিষ্ঠান যা সমাজের সকল স্তরের
            মানুষের মর্যাদা ও অধিকার প্রতিষ্ঠায় কাজ করে।
          </p>

          {/* English Name */}
          <p className="text-sm text-muted-foreground mb-10 opacity-0 animate-fade-up delay-300">
            Tasfiyah Social Welfare Organisation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-up delay-400">
            <Button variant="hero" size="xl" className="group">
              আমাদের সাথে যোগ দিন
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              আরও জানুন
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto opacity-0 animate-fade-up delay-500">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-card-gradient border border-border flex items-center justify-center group-hover:shadow-card transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Heart, Shield, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "মানবতা",
      description: "সমাজের প্রতিটি মানুষের সেবায় নিবেদিত",
    },
    {
      icon: Shield,
      title: "অরাজনৈতিক",
      description: "রাজনৈতিক প্রভাবমুক্ত স্বাধীন সংগঠন",
    },
    {
      icon: Users,
      title: "স্বেচ্ছাসেবী",
      description: "স্বতঃস্ফূর্ত অংশগ্রহণের মাধ্যমে সেবা",
    },
    {
      icon: Target,
      title: "লক্ষ্যমুখী",
      description: "সুনির্দিষ্ট লক্ষ্যে কার্যক্রম পরিচালনা",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              আমাদের সম্পর্কে
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              মানবতার সেবায় <span className="text-gradient">একত্রিত</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              তাসফিয়াহ্ সমাজকল্যাণ সংস্থা একটি অলাভজনক প্রতিষ্ঠান যা পরিবেশ সংরক্ষণ,
              শিক্ষা বিস্তার এবং মানবাধিকার রক্ষায় কাজ করে।
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                আমাদের যাত্রা
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                পূর্বে "পারসুয়ার্স অব পারপাস" নামে পরিচিত আমাদের সংগঠন এখন
                "তাসফিয়াহ্ সমাজকল্যাণ সংস্থা" হিসেবে মানবতার সেবায় কাজ করছে।
                রাজশাহী থেকে শুরু করে আমরা বাংলাদেশের বিভিন্ন প্রান্তে আমাদের
                কার্যক্রম বিস্তার করেছি।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                আমাদের সংগঠনে বিভিন্ন রাজনৈতিক মতাদর্শের মানুষ রয়েছেন, তবে
                সংগঠন হিসেবে আমরা সম্পূর্ণ অরাজনৈতিক। ব্যক্তিগত রাজনৈতিক মত বা
                আদর্শের সাথে সংগঠনের কোন সম্পর্ক নেই।
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-1 h-16 bg-hero-gradient rounded-full" />
                <blockquote className="text-lg italic text-foreground/80">
                  "গাছ শুধু পরিবেশের ভারসাম্য রক্ষা করে না, বরং আমাদের ভবিষ্যৎ
                  প্রজন্মের জন্য একটি সবুজ পৃথিবী গড়ে তোলে।"
                  <footer className="text-sm text-muted-foreground mt-2">
                    — নূর মোহাম্মদ সাদ, প্রতিষ্ঠাতা
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-hero-gradient p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse-soft" />
                    <p className="text-2xl font-bold text-foreground mb-2">
                      ১১৯+
                    </p>
                    <p className="text-muted-foreground">সক্রিয় সদস্য ও অনুসারী</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

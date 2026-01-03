import { TreePine, BookOpen, Users, Megaphone, Heart, Globe, Droplet, GraduationCap, Eye } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Droplet,
      title: "রক্তদান কর্মসূচি",
      description:
        "জরুরি রক্তের চাহিদা পূরণে রক্তদান ক্যাম্প ও থ্যালাসেমিয়া রোগীদের জন্য রক্ত সংগ্রহ কার্যক্রম।",
      color: "bg-destructive",
    },
    {
      icon: TreePine,
      title: "বৃক্ষরোপণ কর্মসূচি",
      description:
        "পরিবেশ সংরক্ষণ ও সবুজায়নের লক্ষ্যে বিভিন্ন শিক্ষাপ্রতিষ্ঠানে বৃক্ষরোপণ কার্যক্রম পরিচালনা করা হয়।",
      color: "bg-primary",
    },
    {
      icon: BookOpen,
      title: "জ্ঞান-বৃক্ষ কুইজ",
      description:
        "শিক্ষার্থীদের মেধা বিকাশ ও জ্ঞানচর্চার জন্য নিয়মিত কুইজ প্রতিযোগিতার আয়োজন।",
      color: "bg-secondary",
    },
    {
      icon: Megaphone,
      title: "মানবাধিকার সচেতনতা",
      description:
        "বিশ্ব মানবাধিকার দিবসে র্যালি ও পথসভার মাধ্যমে জনসচেতনতা বৃদ্ধি।",
      color: "bg-accent",
    },
    {
      icon: Users,
      title: "স্বেচ্ছাসেবী কার্যক্রম",
      description:
        "সমাজের বিভিন্ন স্তরে স্বেচ্ছাসেবী কাজের মাধ্যমে মানবসেবা প্রদান।",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "সামাজিক সহায়তা",
      description:
        "দুঃস্থ ও অসহায় মানুষদের পাশে দাঁড়িয়ে সামাজিক সহায়তা প্রদান।",
      color: "bg-secondary",
    },
  ];

  const futurePlans = [
    {
      icon: GraduationCap,
      title: "পথশিশুদের শিক্ষা (SDG 4)",
      description:
        "পিছিয়ে পড়া অঞ্চলগুলোতে পথশিশুদের জন্য শিক্ষা ব্যবস্থা চালু করার পরিকল্পনা রয়েছে।",
      status: "পরিকল্পনাধীন",
    },
    {
      icon: Eye,
      title: "চোখের ছানি অপারেশন",
      description:
        "দরিদ্র মানুষদের জন্য বিনামূল্যে চোখের ছানি অপারেশনের ব্যবস্থা করার প্রস্তাবনা রয়েছে।",
      status: "প্রস্তাবিত",
    },
    {
      icon: Globe,
      title: "আন্তর্জাতিক সংহতি",
      description:
        "বিশ্বের বিভিন্ন প্রান্তে মানবাধিকার লঙ্ঘনের বিরুদ্ধে সোচ্চার থাকা।",
      status: "চলমান",
    },
  ];

  return (
    <section id="activities" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              আমাদের কার্যক্রম
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              সেবামূলক <span className="text-gradient">কার্যক্রমসমূহ</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              পরিবেশ সংরক্ষণ থেকে শুরু করে শিক্ষা বিস্তার - আমাদের কার্যক্রম সমাজের
              সকল স্তরে ইতিবাচক প্রভাব ফেলছে।
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-transparent hover:shadow-card transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl ${activity.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <activity.icon
                      className={`w-7 h-7 ${
                        activity.color === "bg-primary" ? "text-primary" : 
                        activity.color === "bg-secondary" ? "text-secondary" : 
                        activity.color === "bg-destructive" ? "text-destructive" :
                        "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-hero-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>

          {/* Future Plans Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                ভবিষ্যৎ পরিকল্পনা
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                আমাদের <span className="text-gradient">স্বপ্ন</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {futurePlans.map((plan, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl bg-muted/30 border border-dashed border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      plan.status === "চলমান" ? "bg-primary/20 text-primary" :
                      plan.status === "পরিকল্পনাধীন" ? "bg-secondary/20 text-secondary" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {plan.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;

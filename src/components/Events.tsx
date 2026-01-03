import { Calendar, MapPin, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import bloodDonation1 from "@/assets/blood-donation-1.jpg";
import bloodDonation2 from "@/assets/blood-donation-2.jpg";
import bloodCamp1 from "@/assets/blood-camp-1.jpg";
import bloodCamp2 from "@/assets/blood-camp-2.jpg";
import bloodCamp3 from "@/assets/blood-camp-3.jpg";

const Events = () => {
  const events = [
    {
      date: "২৮ মে ২০২৫",
      title: "রক্তদান ও ব্লাড গ্রুপিং ক্যাম্প",
      description:
        "বরেন্দ্র বিশ্ববিদ্যালয়ের ক্যাম্পাসে Pursuers of Purpose এবং Business Administration Social Welfare Club, Varendra University এর যৌথ উদ্যোগে সফল রক্তদান কর্মসূচি। Rajshahi Blood Bank And Transfusion Centre রক্ত সংগ্রহে সার্বিক সহায়তা প্রদান করে। সকাল ৯টা থেকে বিকাল ৪টা পর্যন্ত চলা এই কর্মসূচিতে বিশ্ববিদ্যালয়ের শিক্ষক, শিক্ষার্থী এবং সাধারণ মানুষ স্বতঃস্ফূর্তভাবে অংশগ্রহণ করেন।",
      location: "বরেন্দ্র বিশ্ববিদ্যালয়, রাজশাহী",
      attendees: "১০০+",
      featured: true,
      images: [bloodCamp1, bloodCamp2, bloodCamp3],
      quote: "রক্তদান শুধু একটি মানবিক কাজ নয়, এটি একটি জীবন দান।",
    },
    {
      date: "ডিসেম্বর ২০২৫",
      title: "থ্যালাসেমিয়া রোগীর জন্য রক্তদান",
      description:
        "থ্যালাসেমিয়া আক্রান্ত ৫ বছর বয়সী শিশু আসিয়াকে বাঁচাতে এবং রক্তের ঘাটতি পূরণে সংগঠনের দপ্তর সম্পাদক ইফতেশাম আহমেদ তাজিম এবং সদস্য ইশতিয়াক রক্তদান করেন। মানবতার সেবায় তাদের এই মহৎ উদ্যোগের জন্য সংগঠন থেকে বিশেষভাবে ধন্যবাদ জানাচ্ছি।",
      location: "রাজশাহী",
      attendees: "২ জন দাতা",
      featured: true,
      images: [bloodDonation1, bloodDonation2],
      isSpecialThanks: true,
    },
    {
      date: "১০ ডিসেম্বর ২০২৫",
      title: "বিশ্ব মানবাধিকার দিবস উদযাপন",
      description:
        "মানবাধিকার সুরক্ষার গুরুত্বপূর্ণ দিনে র্যালি ও পথসভার আয়োজন। বাংলাদেশের প্রেক্ষাপটে মানবাধিকার লঙ্ঘন, সীমান্ত হত্যা এবং গাজার সংকটের নিন্দা জানানো হয়।",
      location: "রাজশাহী শহর",
      attendees: "৫০+",
      featured: false,
    },
    {
      date: "৪ আগস্ট ২০২৫",
      title: "জুলাই স্মৃতিতে বৃক্ষরোপণ",
      description:
        "রাজশাহী আদর্শ উচ্চ বিদ্যালয়ে জুলাই মাসের স্মৃতির প্রতি শ্রদ্ধা জানিয়ে বৃক্ষরোপণ এবং 'জ্ঞান-বৃক্ষ ০১' কুইজ প্রতিযোগিতা।",
      location: "রাজশাহী আদর্শ উচ্চ বিদ্যালয়",
      attendees: "১০০+",
      featured: false,
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              সাম্প্রতিক ঘটনা
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              সাম্প্রতিক <span className="text-gradient">কার্যক্রম</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের সাম্প্রতিক অনুষ্ঠান ও কার্যক্রমগুলোর বিস্তারিত জানুন।
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  event.featured
                    ? "bg-hero-gradient p-[2px]"
                    : "border border-border bg-card"
                }`}
              >
                <div
                  className={`${event.featured ? "bg-card rounded-3xl" : ""} p-6 md:p-8`}
                >
                  <div className="flex flex-col gap-6">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Date Badge */}
                      <div className="flex-shrink-0">
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                            event.featured
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                        {event.isSpecialThanks && (
                          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-600">
                            <Heart className="w-3 h-3 fill-current" />
                            <span className="text-xs font-medium">বিশেষ ধন্যবাদ</span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {event.description}
                        </p>
                        
                        {event.quote && (
                          <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-foreground/80">
                            "{event.quote}"
                          </blockquote>
                        )}
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            {event.attendees} অংশগ্রহণকারী
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex-shrink-0">
                        <Button
                          variant={event.featured ? "hero" : "outline"}
                          size="lg"
                        >
                          বিস্তারিত দেখুন
                        </Button>
                      </div>
                    </div>

                    {/* Images Grid */}
                    {event.images && event.images.length > 0 && (
                      <div className={`grid gap-4 ${
                        event.images.length === 1 ? 'grid-cols-1' :
                        event.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                      }`}>
                        {event.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden group/image"
                          >
                            <img
                              src={image}
                              alt={`${event.title} - ছবি ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="ghost" size="lg">
              আরও দেখুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

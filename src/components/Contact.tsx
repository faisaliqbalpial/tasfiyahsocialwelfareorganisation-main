import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "ঠিকানা",
      value: "Home no- 45, Hetemkha, GPO-6000, Boalia, Rajshahi, Bangladesh",
    },
    {
      icon: Phone,
      label: "ফোন",
      value: "01905-297717",
    },
    {
      icon: Mail,
      label: "ইমেইল",
      value: "tasfiyah.swo@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              যোগাযোগ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              আমাদের সাথে <span className="text-gradient">যোগাযোগ করুন</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের কার্যক্রমে অংশ নিতে বা যেকোনো প্রশ্নে যোগাযোগ করুন।
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  সামাজিক মাধ্যম
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/tasfiyah.swo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  ১১৯+ অনুসারী • ১৩ অনুসরণ
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                মেসেজ পাঠান
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      আপনার নাম
                    </label>
                    <Input
                      type="text"
                      placeholder="নাম লিখুন"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ইমেইল
                    </label>
                    <Input
                      type="email"
                      placeholder="ইমেইল লিখুন"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    বিষয়
                  </label>
                  <Input
                    type="text"
                    placeholder="বিষয় লিখুন"
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    মেসেজ
                  </label>
                  <Textarea
                    placeholder="আপনার মেসেজ লিখুন..."
                    className="min-h-[150px] rounded-xl resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full group">
                  মেসেজ পাঠান
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MemberProfileModal from "@/components/MemberProfileModal";
import { executiveCommittee, advisoryCommittee, volunteers, CommitteeMember } from "@/data/committeeData";
import { Users, UserCheck, Heart } from "lucide-react";

const Committee = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "executive";
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  const tabs = [
    { id: "executive", name: "কার্যনির্বাহী কমিটি", icon: Users, data: executiveCommittee },
    { id: "advisory", name: "উপদেষ্টা কমিটি", icon: UserCheck, data: advisoryCommittee },
    { id: "volunteers", name: "স্বেচ্ছাসেবক", icon: Heart, data: volunteers },
  ];

  const activeTab = tabs.find(t => t.id === type) || tabs[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                কমিটি
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                আমাদের <span className="text-gradient">নেতৃত্ব</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                সংগঠনের সফলতার পেছনে যাদের নিরলস প্রচেষ্টা
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`/committee?type=${tab.id}`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab.id === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
                </a>
              ))}
            </div>

            {/* Members Grid */}
            {activeTab.data.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {activeTab.data.map((member) => (
                  <div
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary/80 mt-1">{member.position}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-muted/30 rounded-2xl">
                <activeTab.icon className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground">শীঘ্রই আসছে</h3>
                <p className="text-muted-foreground/70 mt-2">
                  {activeTab.name}র তথ্য শীঘ্রই যোগ করা হবে
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {/* Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default Committee;

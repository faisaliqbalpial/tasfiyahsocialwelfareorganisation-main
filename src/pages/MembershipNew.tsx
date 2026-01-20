import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Heart, UserPlus, HandHeart } from "lucide-react";

type MembershipType = 'lifetime' | 'patron' | 'general' | 'volunteer';

const MembershipNew = () => {
    const navigate = useNavigate();

    const membershipTypes = [
        {
            type: 'lifetime' as MembershipType,
            title: 'আজীবন সদস্য',
            titleEn: 'Lifetime Member',
            icon: Users,
            description: 'একবার ২০,০০০ টাকা প্রদান করে আজীবন সদস্যপদ পান',
            features: [
                '২০,০০০ টাকা এককালীন পেমেন্ট',
                'আজীবন সদস্যপদ সার্টিফিকেট',
                'সকল কার্যক্রমে বিশেষ অগ্রাধিকার',
                'ইমেইলে ডিজিটাল সার্টিফিকেট'
            ],
            color: 'from-amber-500 to-yellow-600',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
            hoverBg: 'hover:bg-amber-100'
        },
        {
            type: 'patron' as MembershipType,
            title: 'পৃষ্ঠপোষক সদস্য',
            titleEn: 'Patron Member',
            icon: Heart,
            description: 'নিয়মিত অনুদানের মাধ্যমে সংগঠনকে সহায়তা করুন',
            features: [
                'নিজের পছন্দমতো অনুদানের পরিমাণ',
                'সাপ্তাহিক / মাসিক / বার্ষিক বিকল্প',
                'নিয়মিত রিমাইন্ডার পাবেন',
                'বিশেষ স্বীকৃতি ও সম্মাননা'
            ],
            color: 'from-rose-500 to-pink-600',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200',
            hoverBg: 'hover:bg-rose-100'
        },
        {
            type: 'general' as MembershipType,
            title: 'সাধারণ সদস্য',
            titleEn: 'General Member',
            icon: UserPlus,
            description: 'মাসিক চাঁদা প্রদান করে সক্রিয় সদস্য হন',
            features: [
                'মাসিক ১০০ টাকা চাঁদা',
                'সকল কার্যক্রমে অংশগ্রহণ',
                'ভোটিং অধিকার',
                'সংগঠনের নিয়মিত আপডেট'
            ],
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            hoverBg: 'hover:bg-blue-100'
        },
        {
            type: 'volunteer' as MembershipType,
            title: 'সহযোগী সদস্য',
            titleEn: 'Associate Member',
            icon: HandHeart,
            description: 'স্বেচ্ছাসেবক হিসেবে যোগ দিন, কোন চাঁদা নেই',
            features: [
                'কোন মাসিক চাঁদা নেই',
                'স্বেচ্ছাসেবক হিসেবে কাজ',
                'প্রয়োজনে ডাকা হবে',
                'সমাজসেবায় অবদান রাখুন'
            ],
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            hoverBg: 'hover:bg-green-100'
        }
    ];

    const handleSelectMembership = (type: MembershipType) => {
        navigate(`/membership/${type}`);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-24 md:py-32">
                {/* Page Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block mb-4">
                        <div className="text-sm font-arabic mb-2 text-muted-foreground">بسم الله الرحمن الرحيم</div>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        সদস্যপদ নির্বাচন করুন
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        আপনার পছন্দের সদস্যপদ টাইপ নির্বাচন করুন এবং তাসফিয়াহ সমাজকল্যাণ সংস্থার সাথে যুক্ত হন
                    </p>
                </div>

                {/* Membership Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {membershipTypes.map((membership) => {
                        const Icon = membership.icon;
                        return (
                            <div
                                key={membership.type}
                                onClick={() => handleSelectMembership(membership.type)}
                                className={`
                                    group cursor-pointer rounded-2xl border-2 ${membership.borderColor}
                                    ${membership.bgColor} ${membership.hoverBg}
                                    transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                                    overflow-hidden
                                `}
                            >
                                {/* Card Header with Gradient */}
                                <div className={`bg-gradient-to-r ${membership.color} p-6 text-white relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{membership.title}</h3>
                                            <p className="text-white/90 text-sm">{membership.titleEn}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <p className="text-gray-700 mb-6 text-base">
                                        {membership.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {membership.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <svg
                                                    className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        className={`
                                            w-full py-3 px-6 rounded-lg font-semibold
                                            bg-gradient-to-r ${membership.color}
                                            text-white shadow-lg
                                            transform transition-all duration-200
                                            group-hover:shadow-xl
                                        `}
                                    >
                                        আবেদন করুন →
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Info */}
                <div className="mt-12 text-center">
                    <div className="inline-block bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl">
                        <p className="text-sm text-blue-800 leading-relaxed">
                            <strong>বিঃদ্রঃ</strong> সদস্যপদ সম্পর্কে যেকোন প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন:
                            <span className="font-semibold block mt-2">০১৯০৮-২৯৫৭৯৪, ০১৭২২-৩৫৭৫০০</span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MembershipNew;

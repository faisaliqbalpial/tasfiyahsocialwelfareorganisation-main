// Committee Member Images
import astakAhadKhan from "@/assets/committee/astak-ahad-khan.jpeg";
import zinnatRayhanShishir from "@/assets/committee/zinnat-rayhan-shishir.jpeg";
import nurMohammadSad from "@/assets/committee/nur-mohammad-sad.jpeg";
import ratulIslam from "@/assets/committee/ratul-islam.jpeg";
import marufShahriar from "@/assets/committee/maruf-shahriar.jpeg";
import faisalIqbal from "@/assets/committee/faisal-iqbal.jpg";
import farhanShahriar from "@/assets/committee/farhan-shahriar.jpeg";

// Blank image placeholder (Solid soft grey)
const blankImage = "https://dummyimage.com/400x400/e2e8f0/e2e8f0";

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  image: string;
  message?: string;
  phone?: string;
  email?: string;
  period: string;
}

export const executiveCommittee: CommitteeMember[] = [
  {
    id: "astak-ahad-khan",
    name: "আস্তাক আহাদ খান",
    position: "সভাপতি",
    image: astakAhadKhan,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "সমাজের সেবায় নিজেকে উৎসর্গ করা আমাদের সংগঠনের মূল লক্ষ্য। মানবতার সেবায় আমরা সর্বদা প্রতিশ্রুতিবদ্ধ।"
  },
  {
    id: "zinnat-rayhan-shishir",
    name: "মো: জিন্নাত রায়হান শিশির",
    position: "সহ-সভাপতি",
    image: zinnatRayhanShishir,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "একতাবদ্ধ হয়ে কাজ করলে যেকোনো লক্ষ্য অর্জন সম্ভব।"
  },
  {
    id: "nur-mohammad-sad",
    name: "নূর মোহাম্মদ সাদ",
    position: "সাধারণ সম্পাদক",
    image: nurMohammadSad,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "রক্তদান শুধু একটি মানবিক কাজ নয়, এটি একটি জীবন দান। তরুণ সমাজকে উদ্বুদ্ধ করতে চাই।"
  },
  {
    id: "ratul-islam",
    name: "মোঃ রাতুল ইসলাম",
    position: "যুগ্ম সাধারণ সম্পাদক",
    image: ratulIslam,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "সামাজিক দায়বদ্ধতা থেকে কাজ করাই আমাদের অঙ্গীকার।"
  },
  {
    id: "maruf-shahriar",
    name: "মারুফ শাহরিয়ার",
    position: "কোষাধ্যক্ষ",
    image: marufShahriar,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "সততা ও স্বচ্ছতার সাথে সংগঠনের আর্থিক ব্যবস্থাপনায় প্রতিশ্রুতিবদ্ধ।"
  },
  {
    id: "faisal-iqbal",
    name: "মো: ফয়সাল ইকবাল",
    position: "সাংগঠনিক সম্পাদক",
    image: faisalIqbal,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "সংগঠনের শক্তি হলো এর সদস্যরা। সবাইকে নিয়ে এগিয়ে যাওয়াই আমার লক্ষ্য।"
  },
  {
    id: "farhan-shahriar",
    name: "ফারহান শাহরিয়ার",
    position: "নির্বাহী সদস্য",
    image: farhanShahriar,
    period: "কার্যনির্বাহী কমিটি ২০২৫-২৬",
    message: "সেবার মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনতে চাই।"
  }
];

export const advisoryCommittee: CommitteeMember[] = [
  {
    id: "advisor-1",
    name: "মোসা: রোকসানা বেগম (টুকটুকি)",
    position: "প্রধান উপদেষ্টা",
    period: "ভারপ্রাপ্ত পরিচালক, শরীর চর্চা বিভাগ, রাজশাহী বিশ্ববিদ্যালয়",
    image: blankImage,
  },
  {
    id: "advisor-2",
    name: "মোঃ মুঞ্জুর রহমান খান",
    position: "উপদেষ্টা",
    period: "উপ-পরীক্ষা নিয়ন্ত্রক (মাধ্যমিক), মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড রাজশাহী",
    image: blankImage,
  },
  {
    id: "advisor-3",
    name: "খাজা তারেক (সিজার)",
    position: "উপদেষ্টা",
    period: "বিশিষ্ট সমাজসেবক ও প্রথম শ্রেণীর ঠিকাদার, পানি উন্নয়ন বোর্ড, সপুরা, রাজশাহী",
    image: blankImage,
  },
  {
    id: "advisor-4",
    name: "মোঃ ইমদাদুল হক",
    position: "উপদেষ্টা",
    period: "রাজশাহী প্রতিনিধি, চ্যানেল এস | সভাপতি, রাজশাহী মডেল প্রেসক্লাব",
    image: blankImage,
  },
  {
    id: "advisor-5",
    name: "মো: জাকির হোসেন",
    position: "উপদেষ্টা",
    period: "আইনজীবী, জজ কোর্ট, রাজশাহী",
    image: blankImage,
  },
  {
    id: "advisor-6",
    name: "মোঃ আশরাফুল ইসলাম",
    position: "উপদেষ্টা",
    period: "ডেন্টিস্ট (বিএসসি ইন ডেন্টাল), ইসলাম ডেন্টাল কেয়ার",
    image: blankImage,
  },
  {
    id: "advisor-7",
    name: "শেখ মাহমুদুন্নবী তুষার",
    position: "উপদেষ্টা",
    period: "ক্রীড়াবিদ ও কারাতে কোচ, মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড রাজশাহী",
    image: blankImage,
  },
];

export const volunteers: CommitteeMember[] = [];

// Founder data
export const founder = {
  name: "নূর মোহাম্মদ সাদ",
  title: "প্রতিষ্ঠাতা",
  image: nurMohammadSad,
  message: `মানুষের পাশে দাঁড়ানোর ইচ্ছা থেকেই এই স্বেচ্ছাসেবী সংস্থার পথচলা শুরু। সমাজের এমন অনেক মানুষ আছেন, যাদের সামান্য সহায়তা, ভালোবাসা কিংবা সহযোগিতাই তাদের জীবনে বড় পরিবর্তন এনে দিতে পারে। সেই বিশ্বাস থেকেই আমরা একসাথে এগিয়ে চলেছি।

আমাদের লক্ষ্য শুধুমাত্র সাহায্য করা নয়, বরং মানুষের মধ্যে মানবিকতা, সহানুভূতি ও দায়িত্ববোধ জাগ্রত করা। আমরা বিশ্বাস করি—একজন মানুষের ছোট উদ্যোগও সমাজে বড় প্রভাব ফেলতে পারে। তাই সবাইকে সঙ্গে নিয়ে, সবাইকে পাশে রেখে আমরা কাজ করতে চাই।

এই সংস্থা কোনো একক ব্যক্তির নয়—এটি আপনাদের সবার। স্বেচ্ছাসেবক, সহযোগী, শুভানুধ্যায়ী এবং যাঁরা আমাদের ওপর বিশ্বাস রেখেছেন—আপনাদের অবদানেই আমাদের পথচলা আরও শক্তিশালী হচ্ছে।

আসুন, আমরা সবাই মিলে একটি সুন্দর, ন্যায়ভিত্তিক ও মানবিক সমাজ গড়ে তুলি। আপনাদের ভালোবাসা ও সহযোগিতাই আমাদের এগিয়ে যাওয়ার সবচেয়ে বড় প্রেরণা।`
};

export const coFounder = {
  name: "মো: জিন্নাত রায়হান শিশির",
  title: "সহ-প্রতিষ্ঠাতা",
  image: zinnatRayhanShishir,
  message: `তাসফিয়াহ্ প্রতিষ্ঠিত হয়েছে একটি সহজ বিশ্বাস থেকে—নির্লিপ্ততার পরিবর্তে মানুষ যখন উদ্দেশ্যকে বেছে নেয়, তখনই প্রকৃত পরিবর্তনের সূচনা হয়।

আমরা তৃণমূল পর্যায়ে কাজ করি—বাস্তব কমিউনিটির বাস্তব চাহিদা পূরণে আন্তরিকতা, জবাবদিহিতা এবং দীর্ঘমেয়াদি দৃষ্টিভঙ্গি নিয়ে। আমাদের লক্ষ্য শুধু সাহায্য করা নয়; ধারাবাহিক কার্যক্রম ও দায়িত্বশীল সেবার মাধ্যমে মানুষকে ক্ষমতায়ন করা।

তাসফিয়াহ্ মানে সততা, সহমর্মিতা এবং বাস্তব প্রভাব। আপনি যদি বিশ্বাস করেন যে সেবা একটি দায়িত্ব—তাহলে আপনি ইতোমধ্যেই আমাদের এই যাত্রার অংশ।`
};

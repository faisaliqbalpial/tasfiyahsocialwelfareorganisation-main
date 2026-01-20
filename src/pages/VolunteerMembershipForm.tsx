import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(1, "নাম আবশ্যক"),
    address: z.string().min(1, "ঠিকানা আবশ্যক"),
    workplace: z.string().min(1, "কর্মস্থল আবশ্যক"),
    mobile: z.string().min(11, "সঠিক মোবাইল নাম্বার দিন"),
    email: z.string().email("সঠিক ইমেইল দিন"),
    declaration: z.boolean().refine((val) => val === true, {
        message: "ঘোষণাটি গ্রহণ করা আবশ্যক",
    }),
});

const VolunteerMembershipForm = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            address: "",
            workplace: "",
            mobile: "",
            email: "",
            declaration: false,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("membershipType", "সহযোগী সদস্য / স্বেচ্ছাসেবক (Associate Member / Volunteer)");
        formData.append("name", values.name);
        formData.append("address", values.address);
        formData.append("workplace", values.workplace);
        formData.append("mobile", values.mobile);
        formData.append("email", values.email);
        formData.append("monthlyFee", "কোন চাঁদা নেই");

        try {
            const response = await fetch("https://formspree.io/f/xnjngpnq", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                toast.success("আবেদন সফলভাবে জমা দেওয়া হয়েছে! স্বেচ্ছাসেবক হিসেবে আপনাকে স্বাগতম।");
                form.reset();
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                toast.error("দুঃখিত, আবেদন জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
            }
        } catch (error) {
            toast.error("নেটওয়ার্ক ত্রুটি। অনুগ্রহ করে আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-24 md:py-32">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/membership")}
                    className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>ফিরে যান</span>
                </button>

                <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 md:p-10 text-white text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">সহযোগী সদস্যপদ ফর্ম</h1>
                        <p className="text-white/90">Associate Membership / Volunteer Form</p>
                        <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <p className="text-lg font-semibold">স্বেচ্ছাসেবক হিসেবে যোগ দিন - কোন চাঁদা নেই</p>
                        </div>
                    </div>

                    <div className="p-6 md:p-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {/* Personal Info */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>পূর্ণ নাম <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="আপনার পূর্ণ নাম লিখুন" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>ঠিকানা <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="আপনার সম্পূর্ণ ঠিকানা" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="workplace"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>কর্মস্থল / প্রতিষ্ঠান <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="আপনি কোথায় কাজ করেন বা পড়াশোনা করেন" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="mobile"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>মোবাইল নাম্বার <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="০১৭xxxxxxxx" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>ইমেইল <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="example@gmail.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Volunteer Info */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                                        🤝 স্বেচ্ছাসেবক হিসেবে আপনার ভূমিকা
                                    </h3>
                                    <div className="space-y-3 text-sm text-green-800">
                                        <div className="bg-green-100 border border-green-300 rounded-md p-4">
                                            <p className="font-semibold mb-2">✅ কোন মাসিক চাঁদা প্রয়োজন নেই</p>
                                            <p>সহযোগী সদস্য হিসেবে আপনাকে কোন ধরনের মাসিক বা বার্ষিক চাঁদা প্রদান করতে হবে না।</p>
                                        </div>
                                        <p>• প্রয়োজন অনুযায়ী আপনাকে স্বেচ্ছাসেবার জন্য ডাকা হবে</p>
                                        <p>• সমাজকল্যাণ কাজে আপনার সময় ও শ্রম দিতে পারবেন</p>
                                        <p>• বিভিন্ন কার্যক্রম ও প্রকল্পে অংশগ্রহণের সুযোগ</p>
                                        <p>• আপনার দক্ষতা অনুযায়ী কাজ দেওয়া হবে</p>
                                    </div>
                                </div>

                                {/* What We Expect */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                                        📋 আমরা যা আশা করি
                                    </h3>
                                    <ul className="space-y-2 text-sm text-blue-800">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>সংগঠনের আহ্বানে সাড়া দেওয়া (সময় থাকলে)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>স্বেচ্ছায় সমাজসেবামূলক কাজে অংশগ্রহণ</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>সংগঠনের মূল্যবোধ ও নীতিমালা মেনে চলা</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>নিয়মিত যোগাযোগ রক্ষা করা</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* What You Get */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                                        🎁 আপনি যা পাবেন
                                    </h3>
                                    <ul className="space-y-2 text-sm text-purple-800">
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>স্বেচ্ছাসেবার অভিজ্ঞতা ও সার্টিফিকেট</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>সমাজসেবায় অবদান রাখার সুযোগ</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>নেটওয়ার্কিং ও দক্ষতা বৃদ্ধির সুযোগ</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span>সাংগঠনিক কার্যক্রমের আপডেট</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Declaration */}
                                <div className="space-y-4 bg-muted/20 p-6 rounded-lg border">
                                    <h4 className="text-lg font-semibold">✍️ ঘোষণা</h4>
                                    <p className="text-sm text-muted-foreground text-justify">
                                        আমি অঙ্গীকার করছি যে, তাসফিয়াহ সমাজকল্যাণ সংস্থা-এর গঠনতন্ত্র, নীতিমালা ও সকল নিয়ম-কানুন সম্পূর্ণরূপে মেনে চলবো এবং একজন স্বেচ্ছাসেবক হিসেবে সংগঠনের ডাকে সাড়া দিয়ে সমাজসেবামূলক কাজে অংশগ্রহণ করবো।
                                    </p>

                                    <FormField
                                        control={form.control}
                                        name="declaration"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="cursor-pointer">
                                                        আমি উপরের শর্তাবলী মেনে নিচ্ছি এবং সম্মতি প্রদান করছি। <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex items-center justify-end gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => navigate("/membership")}
                                    >
                                        বাতিল
                                    </Button>
                                    <Button type="submit" size="lg" disabled={isSubmitting}>
                                        {isSubmitting ? "পাঠানো হচ্ছে..." : "আবেদন জমা দিন"}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VolunteerMembershipForm;

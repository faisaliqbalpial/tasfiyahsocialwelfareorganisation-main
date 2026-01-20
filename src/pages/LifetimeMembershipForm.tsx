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

const LifetimeMembershipForm = () => {
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
        formData.append("membershipType", "আজীবন সদস্য (Lifetime Member)");
        formData.append("name", values.name);
        formData.append("address", values.address);
        formData.append("workplace", values.workplace);
        formData.append("mobile", values.mobile);
        formData.append("email", values.email);
        formData.append("amount", "২০,০০০ টাকা");

        try {
            const response = await fetch("https://formspree.io/f/xnjngpnq", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                toast.success("আবেদন সফলভাবে জমা দেওয়া হয়েছে! পেমেন্টের তথ্য শীঘ্রই আপনার ইমেইলে পাঠানো হবে।");
                form.reset();
                // Navigate to payment info page or show payment instructions
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
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-6 md:p-10 text-white text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">আজীবন সদস্যপদ ফর্ম</h1>
                        <p className="text-white/90">Lifetime Membership Form</p>
                        <div className="mt-4 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                            <p className="text-lg font-semibold">সদস্যপদ ফি: ২০,০০০ টাকা (এককালীন)</p>
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
                                                <Input placeholder="আপনি কোথায় কাজ করেন" {...field} />
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

                                {/* Payment Info */}
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                                    <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                                        💳 পেমেন্ট তথ্য
                                    </h3>
                                    <div className="space-y-2 text-sm text-amber-800">
                                        <p>আবেদন জমা দেওয়ার পর, আপনার ইমেইলে পেমেন্ট সংক্রান্ত বিস্তারিত তথ্য পাঠানো হবে।</p>
                                        <p className="font-semibold">পেমেন্ট করার পর:</p>
                                        <ul className="list-disc list-inside ml-2 space-y-1">
                                            <li>আপনি আজীবন সদস্যপদ পাবেন</li>
                                            <li>একটি সার্টিফিকেট ইমেইলে পাঠানো হবে</li>
                                            <li>সকল সদস্য সুবিধা পাবেন</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Declaration */}
                                <div className="space-y-4 bg-muted/20 p-6 rounded-lg border">
                                    <h4 className="text-lg font-semibold">✍️ ঘোষণা</h4>
                                    <p className="text-sm text-muted-foreground text-justify">
                                        আমি অঙ্গীকার করছি যে, তাসফিয়াহ সমাজকল্যাণ সংস্থা-এর গঠনতন্ত্র, নীতিমালা ও সকল নিয়ম-কানুন সম্পূর্ণরূপে মেনে চলবো এবং সংগঠনের উন্নয়নে সহযোগিতা করবো।
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

export default LifetimeMembershipForm;

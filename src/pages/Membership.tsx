import { useRef, useState } from "react";
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
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
    nameBn: z.string().min(1, "নাম (বাংলা) আবশ্যক"),
    nameEn: z.string().min(1, "Name (English) is required"),
    fatherName: z.string().min(1, "পিতার নাম আবশ্যক"),
    motherName: z.string().min(1, "মাতার নাম আবশ্যক"),
    dob: z.string().min(1, "জন্ম তারিখ আবশ্যক"),
    maritalStatus: z.string().min(1, "বৈবাহিক অবস্থা আবশ্যক"),
    presentAddress: z.string().min(1, "বর্তমান ঠিকানা আবশ্যক"),
    permanentAddress: z.string().min(1, "স্থায়ী ঠিকানা আবশ্যক"),
    mobileWrapper: z.string().min(1, "মোবাইল নাম্বার আবশ্যক"),
    email: z.string().email("সঠিক ই-মেইল দিন").optional().or(z.literal("")),
    education: z.string().min(1, "শিক্ষাগত যোগ্যতা আবশ্যক"),
    institution: z.string().optional(),
    department: z.string().optional(),
    skills: z.string().optional(),
    socialServiceType: z.array(z.string()).refine((value) => value.length > 0, {
        message: "অন্তত একটি সমাজসেবার ধরন নির্বাচন করুন",
    }),
    declaration: z.boolean().default(false).refine((val) => val === true, {
        message: "ঘোষণাটি গ্রহণ করা আবশ্যক",
    }),
    signature: z.string().min(1, "স্বাক্ষর (নাম) আবশ্যক"),
});

const Membership = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nameBn: "",
            nameEn: "",
            fatherName: "",
            motherName: "",
            dob: "",
            maritalStatus: "",
            presentAddress: "",
            permanentAddress: "",
            mobileWrapper: "",
            email: "",
            education: "",
            institution: "",
            department: "",
            skills: "",
            socialServiceType: [],
            declaration: false,
            signature: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);

        // Construct email body
        const subject = "নতুন সদস্য আবেদন - তাসফিয়াহ সমাজকল্যাণ সংস্থা";
        const body = `
তাসফিয়াহ সমাজকল্যাণ সংস্থা - সদস্য আবেদন ফর্ম

ক্রমিক নং: (অফিস কর্তৃক পূরণীয়)
তারিখ: ${new Date().toLocaleDateString()}

ব্যক্তিগত তথ্য:
নাম (বাংলা): ${values.nameBn}
নাম (ইংরেজি): ${values.nameEn}
পিতার নাম: ${values.fatherName}
মাতার নাম: ${values.motherName}
জন্ম তারিখ: ${values.dob}
বৈবাহিক অবস্থা: ${values.maritalStatus}

ঠিকানা:
বর্তমান ঠিকানা: ${values.presentAddress}
স্থায়ী ঠিকানা: ${values.permanentAddress}

যোগাযোগ:
মোবাইল: ${values.mobileWrapper}
ই-মেইল: ${values.email}

শিক্ষা ও দক্ষতা:
শিক্ষাগত যোগ্যতা: ${values.education}
প্রতিষ্ঠান: ${values.institution}
বিষয় / বিভাগ: ${values.department}
দক্ষতা: ${values.skills}

সমাজসেবার ধরন: ${values.socialServiceType.join(", ")}

ঘোষণা:
আমি অঙ্গীকার করছি যে, তাসফিয়াহ সমাজকল্যাণ সংস্থা-এর গঠনতন্ত্র, নীতিমালা ও সকল নিয়ম-কানুন সম্পূর্ণরূপে মেনে চলবো।

আবেদনকারীর স্বাক্ষর: ${values.signature}
    `;

        // Create mailto link
        const mailtoLink = `mailto:mdsaadrafsan@gmail.com,subessarbis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open mail client
        window.location.href = mailtoLink;

        toast.success("আপনার ডিফল্ট ইমেইল অ্যাপ খোলা হচ্ছে। অনুগ্রহ করে সেন্ড বাটনে ক্লিক করুন এবং ছবি সংযুক্ত করতে ভুলবেন না।");
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-primary/5 p-6 md:p-10 text-center border-b border-border">
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">তাসফিয়াহ সমাজকল্যাণ সংস্থা</h1>
                        <div className="text-sm font-arabic mb-2">বিসমিল্লাহির রাহমানির রাহিম</div>
                        <div className="text-lg font-semibold text-primary mb-2">সেবা</div>
                        <h2 className="text-xl font-bold text-foreground mb-2">Tasfiyah Social Welfare Organization</h2>
                        <p className="text-muted-foreground italic mb-4">মানবতার সেবা, একটি উত্তম ধর্মীয় নির্দেশ</p>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p>প্রধান কার্যালয়: বাড়ি নং–৪৫ (হোসেন আলী), জিমিডাঙ্গা, ৬০০০, রাজশাহী</p>
                            <p>যোগাযোগ: ০১৯০৮-২৯৫৭৯৪, ০১৭২২-৩৫৭৫০০</p>
                        </div>
                        <div className="mt-6 inline-block border-b-2 border-primary pb-1">
                            <h3 className="text-xl font-bold">📝 সদস্য ফর্ম</h3>
                        </div>
                    </div>

                    <div className="p-6 md:p-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                {/* Office Use Only */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted/30 p-4 rounded-lg">
                                    <div className="form-item">
                                        <label className="text-sm font-medium text-muted-foreground">ক্রমিক নং: ........................ (অফিস ব্যবহারের জন্য)</label>
                                    </div>
                                    <div className="form-item">
                                        <label className="text-sm font-medium text-muted-foreground">তারিখ: {new Date().toLocaleDateString('bn-BD')}</label>
                                    </div>
                                </div>

                                {/* Personal Info */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold border-b pb-2">ব্যক্তিগত তথ্য</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="nameBn"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>নাম (বাংলা)</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="আপনার নাম লিখুন" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="nameEn"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>নাম (ইংরেজি)</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter your name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="fatherName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>পিতার নাম</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="পিতার নাম লিখুন" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="motherName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>মাতার নাম</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="মাতার নাম লিখুন" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="dob"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>জন্ম তারিখ</FormLabel>
                                                    <FormControl>
                                                        <Input type="date" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="maritalStatus"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>বৈবাহিক অবস্থা</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex gap-4 mt-2"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="married" id="married" />
                                                                <label htmlFor="married">বিবাহিত</label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="unmarried" id="unmarried" />
                                                                <label htmlFor="unmarried">অবিবাহিত</label>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold border-b pb-2">ঠিকানা</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="presentAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>বর্তমান ঠিকানা</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="আপনার বর্তমান ঠিকানা" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="permanentAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>স্থায়ী ঠিকানা</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="আপনার স্থায়ী ঠিকানা" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold border-b pb-2">যোগাযোগ</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="mobileWrapper"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>মোবাইল নাম্বার (হোয়াটসঅ্যাপ)</FormLabel>
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
                                                    <FormLabel>ই-মেইল</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="example@gmail.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Education & Skills */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold border-b pb-2">যোগ্যতা ও দক্ষতা</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="education"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>শিক্ষাগত যোগ্যতা</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="সর্বশেষ ডিগ্রি" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="institution"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>প্রতিষ্ঠান</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="প্রতিষ্ঠানের নাম" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="department"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>বিষয় / বিভাগ</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="বিষয় বা বিভাগ" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="skills"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>দক্ষতা (যদি থাকে)</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="আপনার বিশেষ দক্ষতা" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Social Service Type */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold border-b pb-2">সমাজসেবার ধরন</h4>
                                    <FormField
                                        control={form.control}
                                        name="socialServiceType"
                                        render={() => (
                                            <FormItem>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {["সাধারণ সমাজ", "স্বেচ্ছাসেবক সমাজ", "সমন্বিত সমাজ", "সহায়তাভিত্তিক সমাজ"].map((type) => (
                                                        <FormField
                                                            key={type}
                                                            control={form.control}
                                                            name="socialServiceType"
                                                            render={({ field }) => {
                                                                return (
                                                                    <FormItem
                                                                        key={type}
                                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                                    >
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                checked={field.value?.includes(type)}
                                                                                onCheckedChange={(checked) => {
                                                                                    return checked
                                                                                        ? field.onChange([...field.value, type])
                                                                                        : field.onChange(
                                                                                            field.value?.filter(
                                                                                                (value) => value !== type
                                                                                            )
                                                                                        )
                                                                                }}
                                                                            />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal cursor-pointer">
                                                                            {type}
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                )
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Attachments Notice */}
                                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                                        📎 সংযুক্তি (ইমেইল পাঠানোর সময় সংযুক্ত করুন)
                                    </h4>
                                    <p className="text-sm text-amber-700">
                                        জাতীয় পরিচয়পত্র / জন্ম নিবন্ধন সনদের ফটোকপি এবং পাসপোর্ট সাইজ ছবি।
                                    </p>
                                </div>

                                {/* Declaration */}
                                <div className="space-y-4 bg-muted/20 p-6 rounded-lg border">
                                    <h4 className="text-lg font-semibold">✍️ ঘোষণা</h4>
                                    <p className="text-sm text-muted-foreground text-justify">
                                        আমি অঙ্গীকার করছি যে, তাসফিয়াহ সমাজকল্যাণ সংস্থা-এর গঠনতন্ত্র, নীতিমালা ও সকল নিয়ম-কানুন সম্পূর্ণরূপে মেনে চলবো। সংগঠনের লক্ষ্য, উদ্দেশ্য ও পরিকল্পনা বাস্তবায়নে সর্বাত্মক সহযোগিতা করবো। সংগঠনের সুনাম, শৃঙ্খলা ও গোপনীয়তা বজায় রেখে একজন দায়িত্বশীল সদস্য হিসেবে সততা ও নিষ্ঠার সাথে কাজ করবো।
                                    </p>

                                    <FormField
                                        control={form.control}
                                        name="declaration"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="cursor-pointer">
                                                        আমি উপরের শর্তাবলী মেনে নিচ্ছি এবং সম্মতি প্রদান করছি।
                                                    </FormLabel>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="signature"
                                        render={({ field }) => (
                                            <FormItem className="mt-4 max-w-xs">
                                                <FormLabel>আবেদনকারীর স্বাক্ষর (আপনার পুরো নাম লিখুন)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="স্বাক্ষর" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="flex items-center justify-end gap-4">
                                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
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

export default Membership;

import RegisterForm from "@/components/register-form";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const RegisterPage = () => {
    return (
        <>
            <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 md:gap-4">
                <div className="w-full max-w-xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create an account</CardTitle>
                            <CardDescription>
                                Enter your information below to create your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RegisterForm />
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Image
                        src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1766646615/Gemini_Generated_Image_cramvxcramvxcram_qslglf.png"
                        width={500}
                        height={500}
                        alt="Login Image"
                        className="rounded-lg md:block hidden"
                    />
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
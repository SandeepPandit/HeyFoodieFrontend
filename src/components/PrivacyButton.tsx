import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"


const PrivacyButton = () => {

    return (
        <Drawer>
            <DrawerTrigger>Privacy Policy</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Privacy Policy By HeyFoodie
                    </DrawerTitle>
                    <DrawerDescription>
                        <p>HeyFoodie is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App") and services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the App.</p>

                        <h2>1. Information We Collect</h2>

                        <h3>1.1 Personal Information</h3>
                        <p>When you use our App, we may collect personal information that can identify you, such as your name, email address, phone number, delivery address, payment information, and any other information you provide directly to us.</p>

                        <h3>1.2 Usage Data</h3>
                        <p>We automatically collect information about your device, including your IP address, browser type, operating system, device identifiers, and how you use the App. This information helps us understand how you interact with our services and improve them.</p>

                        <h3>1.3 Location Information</h3>
                        <p>With your permission, we may collect precise location data to enhance your experience with our services, such as to suggest nearby restaurants and delivery options.</p>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide and manage your access to the App.</li>
                            <li>Process and fulfill your orders.</li>
                            <li>Communicate with you about your orders, promotions, and other related services.</li>
                            <li>Improve our App and services based on your usage patterns.</li>
                            <li>Personalize your experience by displaying content, products, and offers tailored to your preferences.</li>
                            <li>Ensure the security of our App and prevent fraudulent activities.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>

                        <h2>3. How We Share Your Information</h2>
                        <p>We may share your information with:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> We may share your information with third-party service providers that perform services on our behalf, such as payment processing, order fulfillment, and customer support.</li>
                            <li><strong>Business Partners:</strong> With your consent, we may share your information with our business partners to offer you certain products, services, or promotions.</li>
                            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.</li>
                        </ul>

                        <h2>4. Security of Your Information</h2>
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                        <h2>5. Your Choices</h2>
                        <p>You can update or delete your personal information by accessing your account settings within the App. You can also opt-out of receiving promotional communications from us by following the unsubscribe instructions provided in those communications.</p>

                        <h2>6. Children's Privacy</h2>
                        <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.</p>

                        <h2>7. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the App. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default PrivacyButton
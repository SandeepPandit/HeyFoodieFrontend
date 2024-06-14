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


const TermsButton = () => {

    return (
        <Drawer>
            <DrawerTrigger>Terms and Conditions</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle> Terms and Conditions By HeyFoodie
                    </DrawerTitle>
                    <DrawerDescription>
                        <p>Welcome to HeyFoodie! These terms and conditions ("Terms") govern your use of our mobile application ("App") and services. By accessing or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.</p>

                        <h2>1. Use of the App</h2>
                        <p>You must be at least 18 years old to use the App. You agree to use the App only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information you provide is accurate, complete, and current.</p>

                        <h2>2. Account Registration</h2>
                        <p>To use certain features of the App, you must create an account. You agree to provide accurate and complete information during the registration process and to update such information as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                        <h2>3. Orders and Payments</h2>
                        <p>When you place an order through the App, you agree to pay the total amount due, including any applicable taxes and delivery fees. All payments are processed securely, and you authorize us to charge your payment method for the total amount.</p>

                        <h2>4. Delivery</h2>
                        <p>We aim to deliver your order within the estimated time frame. However, delivery times are estimates only, and we do not guarantee delivery within any specific time frame. We are not responsible for any delays or failures in delivery due to factors beyond our control.</p>

                        <h2>5. Cancellations and Refunds</h2>
                        <p>Orders may be cancelled or modified within a certain time frame as specified in the App. Refunds will be issued in accordance with our refund policy, which is available in the App. We reserve the right to refuse any order or to cancel any order at our discretion.</p>

                        <h2>6. User Conduct</h2>
                        <p>You agree not to use the App to:</p>
                        <ul>
                            <li>Violate any laws or regulations.</li>
                            <li>Infringe on the rights of others, including intellectual property rights and privacy rights.</li>
                            <li>Post or transmit any harmful, offensive, or inappropriate content.</li>
                            <li>Interfere with the operation of the App or the servers or networks used to make the App available.</li>
                        </ul>

                        <h2>7. Intellectual Property</h2>
                        <p>The App and its content, including text, graphics, logos, and software, are the property of HeyFoodie or its licensors and are protected by intellectual property laws. You may not use, reproduce, or distribute any content from the App without our prior written permission.</p>

                        <h2>8. Disclaimers and Limitation of Liability</h2>
                        <p>The App is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted or error-free. To the fullest extent permitted by law, HeyFoodie disclaims all warranties and shall not be liable for any damages arising out of or in connection with your use of the App.</p>

                        <h2>9. Indemnification</h2>
                        <p>You agree to indemnify and hold harmless HeyFoodie, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of the App or your violation of these Terms.</p>

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

export default TermsButton
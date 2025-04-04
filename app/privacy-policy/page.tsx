"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="bg-gray-50 dark:bg-zinc-950 min-h-screen">
      {/* Header Section with Background */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-900 dark:to-red-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-100 text-lg">
              Last Updated: December 7, 2009
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8"
        >
          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to Dwinfotech.in ("we," "us," or "our"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <p>We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Personal Data</strong>: Name, email, phone number, company name, and other details provided voluntarily via contact forms, service inquiries, or newsletter sign-ups.</li>
                <li><strong>Automated Data</strong>: IP address, browser type, device information, pages visited, and usage patterns (collected via cookies and analytics tools).</li>
                <li><strong>Payment Data</strong>: If applicable, payment details processed securely through third-party gateways (e.g., Razorpay, PayPal).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p>Your data may be used to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide requested services and respond to inquiries.</li>
                <li>Improve website functionality and user experience.</li>
                <li>Send promotional emails (with opt-out options).</li>
                <li>Comply with legal obligations or prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Sharing of Information
              </h2>
              <p>We do not sell your data. However, we may share it with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Service Providers</strong>: Third-party vendors (e.g., hosting, analytics, payment processors) assisting our operations.</li>
                <li><strong>Legal Requirements</strong>: To comply with court orders, government requests, or protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies to enhance user experience. You can manage preferences via your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard measures (SSL encryption, secure servers) to protect your data. However, no online transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Your Rights
              </h2>
              <p>Depending on your jurisdiction, you may:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Request access to, correction, or deletion of your data.</li>
                <li>Opt out of marketing communications.</li>
                <li>Withdraw consent for data processing.</li>
              </ul>
              <p className="mt-2">
                Contact us at{" "}
                <Link href="mailto:support@dwinfotech.in" className="text-red-600 dark:text-red-400 hover:underline">
                  support@dwinfotech.in
                </Link>{" "}
                to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not intended for users under 13. We do not knowingly collect data from minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this policy periodically. Revised versions will be posted here with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Contact Us
              </h2>
              <p>For questions or concerns about this Privacy Policy, email us at:</p>
              <Link 
                href="mailto:support@dwinfotech.in"
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                support@dwinfotech.in
              </Link>
              <p className="mt-4">
                <strong>Address</strong>: 277 K-5, Kanke, Ranchi, Jharkhand, India 834008
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Third-Party Links
              </h2>
              <p>
                Our website may link to external sites. We are not responsible for their privacy practices.
              </p>
            </section>

            <div className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              Effective Date: December 7, 2009
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
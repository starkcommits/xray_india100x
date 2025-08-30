import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'

export const PrivacyPolicyPage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
  }>({
    isOpen: false,
    type: 'signup',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial') => {
    setSignUpModal({ isOpen: true, type })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | Reguard</title>
        <meta
          name="description"
          content="Read ReGuard India's Privacy Policy to learn how we handle your data with transparency, security, and compliance."
        />
        <link rel="canonical" href="https://reguard.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Reguard" />
        <meta
          property="og:description"
          content="We prioritize data security and privacy. Learn how we collect, use, and protect information."
        />
        <meta property="og:url" content="https://reguard.com/privacy-policy" />
      </Helmet>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-gilroy text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="font-inter text-gray-300 max-w-3xl">
            Last Updated: 28th August 2025
            <br />
            At Reguard, your privacy is our top priority. We understand that
            when you share your personal information with us, you trust us to
            protect it. This Privacy Policy explains what information we
            collect, how we use it, and the choices you have.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <p className="font-inter text-gray-700 leading-relaxed mb-6">
              By using our website (
              <a
                href="https://www.reguard.in"
                className="text-red-700 underline"
              >
                www.reguard.in
              </a>
              ) or our services, you agree to the practices described in this
              Privacy Policy. If you do not agree, please stop using our
              services.
            </p>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-2">
              We collect information in two ways:
            </p>
            <ul className="list-disc pl-6 font-inter text-gray-700 mb-2">
              <li>
                <span className="font-semibold">Information You Provide:</span>{' '}
                When you sign up, contact us, or use our services, you may share
                details such as:
                <ul className="list-disc pl-6">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Mobile Number</li>
                  <li>Postal Address</li>
                  <li>
                    Identity information (like Aadhaar, PAN, or other IDs if
                    required for verification services)
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">
                  Information Collected Automatically:
                </span>{' '}
                When you visit our website, some data is collected
                automatically, such as:
                <ul className="list-disc pl-6">
                  <li>Your IP address</li>
                  <li>Browser and device details</li>
                  <li>Pages you visit on our site</li>
                  <li>
                    Cookies (small files stored on your device to improve your
                    browsing experience)
                  </li>
                </ul>
                <span className="block mt-2">
                  You can choose to block cookies in your browser settings, but
                  this may affect certain features.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 font-inter text-gray-700 mb-2">
              <li>Provide and improve our services</li>
              <li>Contact you regarding service updates or customer support</li>
              <li>Keep your account secure</li>
              <li>
                Run analytics to understand how users interact with our website
              </li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p className="font-inter text-gray-700 leading-relaxed mt-2">
              <span className="font-semibold text-red-700">Important:</span> Any
              sensitive information you provide for identity verification (like
              Aadhaar/PAN) is only used for the specific service you request. We
              never sell or misuse your data.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              3. Sharing of Information
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed mb-2">
              We respect your privacy and do not sell or rent your personal
              data. We only share information in the following cases:
            </p>
            <ul className="list-disc pl-6 font-inter text-gray-700">
              <li>
                <span className="font-semibold">With Your Consent</span> – When
                you choose to use a specific service that requires sharing your
                details with our partners.
              </li>
              <li>
                <span className="font-semibold">Service Providers</span> – With
                trusted partners who help us run our services (like cloud
                hosting, analytics, or payment gateways). They are only allowed
                to use your information as necessary to perform their services.
              </li>
              <li>
                <span className="font-semibold">Business Transfers</span> – If
                Reguard is merged, acquired, or sells assets, user information
                may be transferred as part of the business.
              </li>
              <li>
                <span className="font-semibold">Legal Requirements</span> – When
                required by law, regulation, court order, or government request.
              </li>
              <li>
                <span className="font-semibold">Safety & Security</span> – When
                necessary to protect the rights, property, or safety of Reguard,
                our users, or the public.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              4. International Transfers
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              Your data may be stored and processed in India or other countries
              where our partners and servers are located. By using our services,
              you consent to this transfer.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              5. Data Retention
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              We retain your data as long as your account is active or as needed
              to provide our services. Certain information may be stored longer
              to meet legal, regulatory, or audit requirements.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              6. Your Rights & Choices
            </h2>
            <ul className="list-disc pl-6 font-inter text-gray-700 mb-2">
              <li>Access the information we hold about you</li>
              <li>Request corrections to your personal data</li>
              <li>Ask us to delete your data (where legally possible)</li>
              <li>Opt-out of marketing communications at any time</li>
            </ul>
            <p className="font-inter text-gray-700 leading-relaxed">
              To exercise these rights, contact us at{' '}
              <a
                href="mailto:privacy@reguard.in"
                className="text-red-700 underline"
              >
                privacy@reguard.in
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              7. Children’s Privacy
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              Our services are not directed at individuals under the age of 15.
              If we learn that we have collected personal information from a
              child below this age, we will delete it immediately.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              8. Security
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              We use industry-standard security measures to protect your data
              from unauthorized access, alteration, disclosure, or destruction.
              However, no method of online transmission is 100% secure, so we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              9. Changes to this Policy
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date.
              Please review it regularly to stay informed.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              10. Contact Us
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy,
              reach out to us:
              <br />
              <span className="block mt-2">
                Email:{' '}
                <a
                  href="mailto:privacy@reguard.in"
                  className="text-red-700 underline"
                >
                  privacy@reguard.in
                </a>
              </span>
              <span className="block">
                Address: [Your Company Address Here]
              </span>
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-gilroy text-xl font-bold text-gray-900">
                  Have questions about privacy?
                </h3>
                <p className="font-inter text-gray-600">
                  Reach out to our team or schedule a quick demo.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => openSignUpModal('demo')}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book a Demo
                </button>
                <a
                  href="mailto:privacy@reguard.com"
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
      />
    </div>
  )
}

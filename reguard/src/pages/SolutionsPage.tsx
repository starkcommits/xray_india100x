import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Solutions } from '../components/Solutions'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import { useState } from 'react'

export const SolutionsPage: React.FC = () => {
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
        <title>
          RegTech Solutions - EmbedKYC, WatchDawg, Hear'O'Clock | Reguard
        </title>
        <meta
          name="description"
          content="Comprehensive RegTech solutions including EmbedKYC custom flow builder, WatchDawg 360° risk monitoring, and Hear'O'Clock reputation management for enterprises, brands, and government organizations."
        />
        <meta
          name="keywords"
          content="RegTech solutions, EmbedKYC, custom KYC flow builder, WatchDawg, risk monitoring platform, Hear'O'Clock, reputation management, brand monitoring, enterprise compliance solutions, government RegTech, drag and drop KYC, 360 degree monitoring, reputation intelligence, compliance automation platform, regulatory technology solutions, enterprise risk management, brand protection software, government compliance tools"
        />
        <link rel="canonical" href="https://reguard.com/solutions" />
        <meta
          property="og:title"
          content="RegTech Solutions - EmbedKYC, WatchDawg, Hear'O'Clock"
        />
        <meta
          property="og:description"
          content="Comprehensive RegTech solutions for custom KYC flows, risk monitoring, and reputation management."
        />
        <meta property="og:url" content="https://reguard.com/solutions" />
      </Helmet>
      <Header />

      {/* Solutions Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gilroy text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Complete RegTech Solutions Suite
          </h1>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond APIs - comprehensive RegTech platforms designed to solve
            complex identity verification, risk management, and compliance
            challenges for modern financial institutions, enterprises, and
            government organizations.
          </p>
        </div>
      </section>

      <Solutions onOpenSignUp={openSignUpModal} />
      <Footer />

      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
      />
    </div>
  )
}

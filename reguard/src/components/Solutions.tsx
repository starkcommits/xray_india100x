import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Clock, ExternalLink } from 'lucide-react';

interface SolutionsProps {
  onOpenSignUp: (type: 'signup' | 'demo' | 'trial') => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenSignUp }) => {
  const solutions = [
    {
      name: 'EmbedKYC',
      tagline: 'Custom KYC Flow Builder',
      badge: 'NEW',
      description: 'Build and customize your own KYC workflows with our drag-and-drop interface. Create tailored verification processes that match your business requirements.',
      icon: Sparkles,
      features: [
        'Drag & Drop Flow Builder',
        'Custom Verification Steps',
        'White-label Interface',
        'Real-time Analytics'
      ],
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'WatchDawg',
      tagline: '360° Monitoring to Mitigate Risk',
      description: 'Comprehensive risk monitoring solution that provides continuous surveillance across all touchpoints to identify and mitigate potential threats before they impact your business.',
      icon: Shield,
      features: [
        'Real-time Risk Monitoring',
        'Multi-source Data Analysis',
        'Automated Alert System',
        'Compliance Dashboard'
      ],
      gradient: 'from-red-600 to-orange-600',
      bgGradient: 'from-red-50 to-orange-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Hear\'O\'Clock',
      tagline: 'Reputation Management for Brands, Enterprises & Govt.',
      description: 'Advanced reputation monitoring and management platform that tracks, analyzes, and helps manage your brand\'s online presence across all digital channels.',
      icon: Clock,
      features: [
        'Brand Sentiment Analysis',
        'Social Media Monitoring',
        'Crisis Management Tools',
        'Reputation Scoring'
      ],
      gradient: 'from-green-600 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'ComplianceIQ',
      tagline: 'Intelligent Regulatory Compliance Automation',
      description: 'AI-powered compliance automation platform that streamlines regulatory processes, ensures adherence to multiple frameworks, and reduces compliance costs by up to 60%.',
      icon: Gavel,
      features: [
        'Multi-Framework Compliance',
        'Automated Policy Updates',
        'Risk-Based Assessments',
        'Regulatory Change Management'
      ],
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'FraudShield',
      tagline: 'Advanced Fraud Detection & Prevention Platform',
      description: 'Machine learning-powered fraud detection system that identifies suspicious activities in real-time, preventing financial losses and protecting customer trust.',
      icon: AlertTriangle,
      features: [
        'Real-time Fraud Detection',
        'Behavioral Analytics',
        'Device Fingerprinting',
        'Adaptive ML Models'
      ],
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'RiskRadar',
      tagline: 'Real-time Risk Assessment & Monitoring Dashboard',
      description: 'Comprehensive risk management platform that provides 360-degree visibility into organizational risks with predictive analytics and automated mitigation strategies.',
      icon: TrendingUp,
      features: [
        'Predictive Risk Analytics',
        'Real-time Monitoring',
        'Automated Risk Scoring',
        'Mitigation Workflows'
      ],
      gradient: 'from-teal-600 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Complete Solutions Suite
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond APIs - comprehensive platforms designed to solve complex identity verification 
            and risk management challenges for modern businesses.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={solution.name} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Image Section */}
              <div className="flex-1 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} rounded-2xl transform rotate-3`}></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 ${solution.iconBg} rounded-lg`}>
                        <solution.icon size={20} className={solution.iconColor} />
                      </div>
                      {solution.badge && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                          {solution.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{solution.name}</h3>
                    <p className="text-gray-200 text-sm">{solution.tagline}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900">{solution.name}</h3>
                    {solution.badge && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {solution.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => onOpenSignUp('demo')}
                    className={`bg-gradient-to-r ${solution.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 flex items-center space-x-2`}
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={16} />
                  </button>
                  <Link 
                    to={`/solutions/${solution.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white rounded-2xl shadow-lg p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Combine the power of our APIs with comprehensive solutions for complete 
            identity verification and risk management coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onOpenSignUp('trial')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started Free
            </button>
            <button 
              onClick={() => onOpenSignUp('demo')}
              className="border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
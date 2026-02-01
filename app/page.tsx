import Link from 'next/link';
import {
  Droplets,
  Battery,
  Disc,
  Lightbulb,
  Filter,
  CircleDot,
  Sparkles,
  Gauge,
  Fuel,
  Car,
  Wrench,
  BookOpen,
  AlertTriangle,
  ArrowRight,
  Zap,
  ThermometerSun,
} from 'lucide-react';
import MaintenanceCard from '@/components/MaintenanceCard';

const quickTasks = [
  { icon: Droplets, label: 'Oil Change', href: '/maintenance/oil-change' },
  { icon: ThermometerSun, label: 'Coolant', href: '/maintenance/coolant' },
  { icon: Battery, label: 'Battery', href: '/maintenance/battery' },
  { icon: Disc, label: 'Brakes', href: '/maintenance/brakes' },
  { icon: Lightbulb, label: 'Lights', href: '/maintenance/lights' },
  { icon: Filter, label: 'Filters', href: '/maintenance/filters' },
  { icon: CircleDot, label: 'Tires', href: '/maintenance/tires' },
  { icon: Sparkles, label: 'Wipers', href: '/maintenance/wipers' },
];

const maintenanceCategories = [
  {
    icon: Droplets,
    title: 'Oil Change',
    description: 'Complete guide to changing oil and filter on your 1.3 Multijet diesel engine.',
    href: '/maintenance/oil-change',
  },
  {
    icon: ThermometerSun,
    title: 'Coolant System',
    description: 'Check, top up, and flush your cooling system to prevent overheating.',
    href: '/maintenance/coolant',
  },
  {
    icon: Battery,
    title: 'Battery Care',
    description: 'Battery maintenance, jumpstarts, and replacement procedures.',
    href: '/maintenance/battery',
  },
  {
    icon: Disc,
    title: 'Brake System',
    description: 'Inspect and maintain your brakes for safe stopping power.',
    href: '/maintenance/brakes',
  },
  {
    icon: Lightbulb,
    title: 'Lights & Bulbs',
    description: 'Replace headlights, tail lights, and all other bulbs on your Punto.',
    href: '/maintenance/lights',
  },
  {
    icon: Filter,
    title: 'Filters',
    description: 'Air filter, cabin filter, and fuel filter replacement guides.',
    href: '/maintenance/filters',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge hero-badge">
              <Car size={14} /> Fiat Punto 1.3 Multijet Diesel
            </div>
            <h1 className="hero-title">
              Keep Your <span className="hero-title-accent">Punto</span> Running Perfectly
            </h1>
            <p className="hero-subtitle">
              Your complete DIY maintenance guide with step-by-step tutorials, specifications,
              and troubleshooting tips for the Fiat Punto 1.3 Multijet.
            </p>
            <div className="hero-buttons">
              <Link href="/maintenance" className="btn btn-primary">
                <Wrench size={20} /> Browse Guides
              </Link>
              <Link href="/specifications" className="btn btn-secondary">
                <BookOpen size={20} /> View Specs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="quick-links">
            {quickTasks.map((task) => (
              <Link key={task.href} href={task.href} className="quick-link">
                <div className="quick-link-icon">
                  <task.icon size={20} />
                </div>
                <span className="quick-link-text">{task.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Car Specs Overview */}
      <section className="section">
        <div className="container">
          <div className="specs-overview">
            <div className="spec-item">
              <div className="spec-icon">
                <Fuel size={24} />
              </div>
              <div className="spec-value">1.3L</div>
              <div className="spec-label">Multijet Diesel</div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">
                <Zap size={24} />
              </div>
              <div className="spec-value">75-90</div>
              <div className="spec-label">Horsepower</div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">
                <Gauge size={24} />
              </div>
              <div className="spec-value">200 Nm</div>
              <div className="spec-label">Torque</div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">
                <Droplets size={24} />
              </div>
              <div className="spec-value">4.5L</div>
              <div className="spec-label">Oil Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Categories */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 className="section-title">Maintenance Guides</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything you need to keep your Punto in top condition
            </p>
          </div>
          <div className="grid grid-3">
            {maintenanceCategories.map((category) => (
              <MaintenanceCard
                key={category.href}
                href={category.href}
                icon={category.icon}
                title={category.title}
                description={category.description}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/maintenance" className="btn btn-secondary">
              View All Guides <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Wrench size={32} />
              </div>
              <h3 className="feature-title">Step-by-Step Guides</h3>
              <p className="feature-desc">
                Detailed instructions with all the information you need to complete each task.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3 className="feature-title">Complete Specifications</h3>
              <p className="feature-desc">
                All fluid capacities, torque values, and part numbers in one place.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <AlertTriangle size={32} />
              </div>
              <h3 className="feature-title">Troubleshooting Help</h3>
              <p className="feature-desc">
                Diagnose common problems and understand warning lights on your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto var(--space-xl)' }}>
              Browse our complete collection of maintenance guides and keep your Punto running like new.
            </p>
            <Link href="/maintenance" className="btn btn-primary">
              Explore Maintenance Guides <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

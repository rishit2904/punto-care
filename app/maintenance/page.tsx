import Link from 'next/link';
import {
    Droplets,
    Battery,
    Disc,
    Lightbulb,
    Filter,
    CircleDot,
    Sparkles,
    ThermometerSun,
} from 'lucide-react';
import MaintenanceCard from '@/components/MaintenanceCard';

const maintenanceCategories = [
    {
        icon: Droplets,
        title: 'Oil Change',
        description: 'Complete guide to changing oil and filter. Includes oil specs, drain plug location, and torque values.',
        href: '/maintenance/oil-change',
    },
    {
        icon: ThermometerSun,
        title: 'Coolant System',
        description: 'Check, top up, and flush your cooling system. Thermostat replacement and bleeding procedures.',
        href: '/maintenance/coolant',
    },
    {
        icon: Battery,
        title: 'Battery Care',
        description: 'Battery specifications, jumpstart procedures, terminal cleaning, and replacement guide.',
        href: '/maintenance/battery',
    },
    {
        icon: Disc,
        title: 'Brake System',
        description: 'Inspect brake pads, check fluid levels, understand wear indicators and replacement intervals.',
        href: '/maintenance/brakes',
    },
    {
        icon: Lightbulb,
        title: 'Lights & Bulbs',
        description: 'Replace headlights, tail lights, brake lights, and all other bulbs. Includes bulb specifications.',
        href: '/maintenance/lights',
    },
    {
        icon: Filter,
        title: 'Filters',
        description: 'Air filter, cabin filter, and fuel filter replacement. Keep your engine breathing clean.',
        href: '/maintenance/filters',
    },
    {
        icon: CircleDot,
        title: 'Tires',
        description: 'Tire pressure specs, rotation schedule, changing a flat, and recommended tire sizes.',
        href: '/maintenance/tires',
    },
    {
        icon: Sparkles,
        title: 'Wipers & Washer',
        description: 'Replace wiper blades, top up washer fluid, and maintain clear visibility.',
        href: '/maintenance/wipers',
    },
];

export default function MaintenancePage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Maintenance</span>
                    </div>
                    <h1 className="guide-title">Maintenance Guides</h1>
                    <p className="section-subtitle">
                        Complete DIY maintenance guides for your Fiat Punto 1.3 Multijet Diesel.
                        Select a category below to get started.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
                <div className="container">
                    <div className="grid grid-2">
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
                </div>
            </section>
        </>
    );
}

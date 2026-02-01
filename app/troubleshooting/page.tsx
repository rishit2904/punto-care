import Link from 'next/link';
import { AlertTriangle, CheckCircle, Info, AlertCircle, Gauge, ThermometerSun, Battery, Fuel, Settings, Car } from 'lucide-react';

const warningLights = [
    {
        name: 'Check Engine / MIL',
        icon: Settings,
        color: 'var(--color-warning)',
        description: 'Engine management issue. Can be minor (sensor) or serious.',
        action: 'Have diagnostics run. Don\'t ignore if flashing.',
    },
    {
        name: 'Oil Pressure',
        icon: Gauge,
        color: 'var(--color-error)',
        description: 'Low oil pressure. Serious - can cause engine damage.',
        action: 'STOP immediately. Check oil level. Don\'t drive if light stays on.',
    },
    {
        name: 'Temperature',
        icon: ThermometerSun,
        color: 'var(--color-error)',
        description: 'Engine overheating. Can cause head gasket failure.',
        action: 'Stop and let engine cool. Check coolant level. Check for leaks.',
    },
    {
        name: 'Battery',
        icon: Battery,
        color: 'var(--color-error)',
        description: 'Charging system problem. Alternator or battery issue.',
        action: 'Drive directly home/to garage. May lose power soon.',
    },
    {
        name: 'DPF (Diesel Particulate Filter)',
        icon: Fuel,
        color: 'var(--color-warning)',
        description: 'DPF needs regeneration. Common on short trips.',
        action: 'Take a 20-30 min highway drive at steady speed to trigger regen.',
    },
    {
        name: 'Glow Plug',
        icon: Settings,
        color: 'var(--color-warning)',
        description: 'Glow plug warming (normal), or failure warning if stays on.',
        action: 'Wait for light to go off before starting. If stays on, check glow plugs.',
    },
];

const commonProblems = [
    {
        problem: 'Hard Starting in Cold Weather',
        causes: [
            'Weak battery',
            'Glow plug failure',
            'Fuel filter clogged',
            'Air in fuel system',
        ],
        solutions: [
            'Test and replace battery if weak',
            'Check glow plug circuit with multimeter',
            'Replace fuel filter and bleed system',
            'Check fuel lines for air leaks',
        ],
    },
    {
        problem: 'DPF Warning Light / Regeneration Issues',
        causes: [
            'Too many short trips',
            'Using wrong oil',
            'Faulty DPF pressure sensor',
            'EGR valve issues',
        ],
        solutions: [
            'Take regular highway drives (30+ min)',
            'Use only Low SAPS oil',
            'Have sensor checked',
            'Clean or replace EGR valve',
        ],
    },
    {
        problem: 'Turbo Lag or Loss of Power',
        causes: [
            'Boost leak in intercooler hoses',
            'Turbo actuator stuck',
            'Air filter blocked',
            'EGR valve stuck open',
        ],
        solutions: [
            'Inspect all boost hoses for cracks',
            'Check turbo actuator movement',
            'Replace air filter',
            'Clean or replace EGR',
        ],
    },
    {
        problem: 'Rough Idle',
        causes: [
            'Dirty injectors',
            'EGR valve carbon buildup',
            'Vacuum leak',
            'Worn engine mounts',
        ],
        solutions: [
            'Use fuel system cleaner or have injectors cleaned',
            'Clean or replace EGR valve',
            'Check all vacuum hoses',
            'Inspect and replace engine mounts',
        ],
    },
    {
        problem: 'Starting Then Stalling',
        causes: [
            'Fuel pump failure',
            'Crankshaft position sensor',
            'Immobilizer issue',
            'Low fuel rail pressure',
        ],
        solutions: [
            'Test fuel pressure at rail',
            'Check sensor with diagnostic tool',
            'Check key transponder and antenna',
            'Inspect fuel system for leaks',
        ],
    },
    {
        problem: 'Excessive White/Blue Smoke',
        causes: [
            'Turbo seal failure',
            'Head gasket issue',
            'Injector problem',
            'Piston ring wear',
        ],
        solutions: [
            'Check for oil in intercooler',
            'Check coolant level and for coolant in oil',
            'Have injectors tested',
            'Compression test needed',
        ],
    },
];

export default function TroubleshootingPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Troubleshooting</span>
                    </div>
                    <h1 className="guide-title">Troubleshooting Guide</h1>
                    <p className="section-subtitle">
                        Common problems, warning light meanings, and diagnostic tips for your Fiat Punto
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
                <div className="container">
                    <h2 style={{ marginBottom: 'var(--space-xl)' }}>Warning Lights Explained</h2>

                    <div className="grid grid-2" style={{ marginBottom: 'var(--space-3xl)' }}>
                        {warningLights.map((light) => (
                            <div key={light.name} className="card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: 'var(--radius-lg)',
                                        background: `${light.color}20`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <light.icon size={24} style={{ color: light.color }} />
                                    </div>
                                    <h3 style={{ margin: 0 }}>{light.name}</h3>
                                </div>
                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>
                                    {light.description}
                                </p>
                                <div style={{
                                    padding: 'var(--space-md)',
                                    background: 'var(--color-surface)',
                                    borderRadius: 'var(--radius-md)',
                                    fontSize: 'var(--font-size-sm)'
                                }}>
                                    <strong>Action:</strong> {light.action}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ marginBottom: 'var(--space-xl)' }}>Common Problems & Solutions</h2>

                    {commonProblems.map((item, index) => (
                        <div key={index} className="card" style={{ marginBottom: 'var(--space-lg)' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <AlertCircle size={24} style={{ color: 'var(--color-warning)' }} />
                                {item.problem}
                            </h3>

                            <div className="grid grid-2" style={{ gap: 'var(--space-xl)' }}>
                                <div>
                                    <h4 style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-sm)',
                                        color: 'var(--color-error)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        <AlertTriangle size={18} /> Possible Causes
                                    </h4>
                                    <ul className="sidebar-list">
                                        {item.causes.map((cause, i) => (
                                            <li key={i}>{cause}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-sm)',
                                        color: 'var(--color-success)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        <CheckCircle size={18} /> Solutions
                                    </h4>
                                    <ul className="sidebar-list">
                                        {item.solutions.map((solution, i) => (
                                            <li key={i}>{solution}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="info-box info-box-info" style={{ marginTop: 'var(--space-2xl)' }}>
                        <div className="info-box-title">
                            <Info size={18} /> Diagnostic Tip
                        </div>
                        <div className="info-box-content">
                            <p>
                                Most auto parts stores will read your OBD-II codes for free. The diagnostic port is located
                                under the dashboard on the driver&apos;s side. Common Fiat Punto error codes include:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-xl)', marginTop: 'var(--space-md)' }}>
                                <li><strong>P0401</strong> - EGR Flow Insufficient</li>
                                <li><strong>P2002</strong> - DPF Efficiency Below Threshold</li>
                                <li><strong>P0234</strong> - Turbo Overboost</li>
                                <li><strong>P0380</strong> - Glow Plug Circuit</li>
                                <li><strong>P0087</strong> - Fuel Rail Pressure Too Low</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card" style={{ marginTop: 'var(--space-2xl)', textAlign: 'center' }}>
                        <Car size={48} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }} />
                        <h3>Need More Help?</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
                            If you&apos;re still having trouble, consult a qualified mechanic familiar with Fiat vehicles.
                            Always describe symptoms accurately and provide any error codes you&apos;ve retrieved.
                        </p>
                        <Link href="/maintenance" className="btn btn-primary">
                            Browse Maintenance Guides
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

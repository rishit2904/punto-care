import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, Disc, Info } from 'lucide-react';

export default function BrakesPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Brakes</span>
                    </div>
                    <h1 className="guide-title">Brake System Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 60-120 minutes
                        </div>
                        <div className="guide-meta-item">
                            <Wrench size={16} /> Intermediate
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
                <div className="container">
                    <div className="guide-content">
                        <div className="guide-main">
                            <h2>Overview</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                                Your Fiat Punto uses disc brakes on the front and drum or disc brakes on the rear
                                depending on the model. Regular inspection ensures safe stopping power. The brake
                                pads typically last 30,000-50,000 km depending on driving style.
                            </p>

                            <div className="info-box info-box-warning">
                                <div className="info-box-title">
                                    <AlertTriangle size={18} /> Safety Critical
                                </div>
                                <div className="info-box-content">
                                    Brakes are safety-critical components. If you&apos;re unsure about any procedure,
                                    have a professional inspect your brakes. Always work on a level surface with
                                    the vehicle properly supported.
                                </div>
                            </div>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Checking Brake Pads</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Visual Inspection Through Wheel</h4>
                                    <p className="step-content">
                                        Many alloy wheels allow you to see the brake pads without removing the wheel.
                                        Look for the pad material thickness - should be at least 3mm.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Listen for Warning Signs</h4>
                                    <p className="step-content">
                                        A squealing sound when braking usually indicates the wear indicator is
                                        touching the disc - pads need replacement soon.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check for Uneven Wear</h4>
                                    <p className="step-content">
                                        If one side wears faster than the other, the caliper may be sticking.
                                        This needs professional attention.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Checking Brake Fluid</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Locate Brake Fluid Reservoir</h4>
                                    <p className="step-content">
                                        The brake fluid reservoir is on top of the master cylinder, located in the
                                        engine bay on the driver&apos;s side near the firewall.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check Level</h4>
                                    <p className="step-content">
                                        The level should be between MIN and MAX marks. Low level can indicate
                                        worn brake pads or a leak in the system.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check Fluid Color</h4>
                                    <p className="step-content">
                                        Fresh brake fluid is clear to light yellow. Dark or cloudy fluid should
                                        be replaced. Brake fluid absorbs moisture over time.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Brake Disc Inspection</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Visual Check</h4>
                                    <p className="step-content">
                                        Look at the disc surface. It should be smooth with fine lines. Deep
                                        grooves, cracks, or blue spots indicate the disc needs replacement.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Measure Disc Thickness</h4>
                                    <p className="step-content">
                                        Using a micrometer, measure disc thickness at multiple points. Front
                                        discs minimum thickness is 20mm. Rear discs minimum is 8mm.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check for Runout</h4>
                                    <p className="step-content">
                                        If you feel pulsation when braking, the disc may be warped. This requires
                                        measurement with a dial gauge or disc replacement.
                                    </p>
                                </li>
                            </ol>

                            <div className="info-box info-box-info" style={{ marginTop: 'var(--space-2xl)' }}>
                                <div className="info-box-title">
                                    <Info size={18} /> When to Replace
                                </div>
                                <div className="info-box-content">
                                    <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                                        <li>Brake pads: When less than 3mm thick</li>
                                        <li>Brake discs: When at minimum thickness or grooved/cracked</li>
                                        <li>Brake fluid: Every 2 years regardless of mileage</li>
                                        <li>Brake hoses: If cracked, bulging, or leaking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Disc size={18} /> Brake Specifications
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Front Type:</strong> Disc (ventilated)</li>
                                    <li><strong>Front Diameter:</strong> 257mm</li>
                                    <li><strong>Front Min:</strong> 20mm</li>
                                    <li><strong>Rear Type:</strong> Drum/Disc</li>
                                    <li><strong>Fluid Type:</strong> DOT 4</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <AlertTriangle size={18} /> Warning Signs
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Squealing or grinding</li>
                                    <li>Brake pedal pulsation</li>
                                    <li>Longer stopping distance</li>
                                    <li>Vehicle pulls to one side</li>
                                    <li>Brake warning light on</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Info size={18} /> Service Intervals
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Inspection:</strong> Every 15,000 km</li>
                                    <li><strong>Fluid change:</strong> 2 years</li>
                                    <li><strong>Pad life:</strong> 30-50,000 km</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

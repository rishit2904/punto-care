import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, ThermometerSun, Info } from 'lucide-react';

export default function CoolantPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Coolant System</span>
                    </div>
                    <h1 className="guide-title">Coolant System Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 30-90 minutes
                        </div>
                        <div className="guide-meta-item">
                            <Wrench size={16} /> Beginner to Intermediate
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
                                The cooling system keeps your 1.3 Multijet engine at optimal operating temperature.
                                Regular maintenance prevents overheating and potential engine damage. Coolant should
                                be changed every 4-5 years or 60,000 km.
                            </p>

                            <div className="info-box info-box-warning">
                                <div className="info-box-title">
                                    <AlertTriangle size={18} /> Safety Warning
                                </div>
                                <div className="info-box-content">
                                    Never open the coolant reservoir or radiator cap when the engine is hot.
                                    The system is under pressure and can cause severe burns. Always wait for
                                    the engine to cool completely.
                                </div>
                            </div>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Checking Coolant Level</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Ensure Engine is Cold</h4>
                                    <p className="step-content">
                                        Wait at least 2 hours after driving or check first thing in the morning
                                        before starting the car.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Locate Expansion Tank</h4>
                                    <p className="step-content">
                                        The coolant expansion tank is located on the right side of the engine bay.
                                        It&apos;s a translucent plastic container with MIN and MAX markings.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check the Level</h4>
                                    <p className="step-content">
                                        The coolant level should be between the MIN and MAX marks when cold.
                                        If it&apos;s below MIN, top up with the correct coolant mixture.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Topping Up Coolant</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Prepare Coolant Mixture</h4>
                                    <p className="step-content">
                                        Use a 50/50 mix of coolant concentrate and distilled water. Pre-mixed
                                        coolant is also available. Use G12+ or G13 specification coolant (pink/red color).
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove Cap and Add Coolant</h4>
                                    <p className="step-content">
                                        Slowly turn the expansion tank cap counterclockwise to release any pressure.
                                        Add coolant until the level reaches the MAX mark.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Replace Cap and Check</h4>
                                    <p className="step-content">
                                        Secure the cap. Start the engine and let it warm up. Watch the temperature
                                        gauge and check for leaks. Re-check level when cold.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Complete Coolant Flush</h2>

                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                A complete flush replaces all old coolant and removes deposits from the system.
                            </p>

                            <ol className="steps-list">
                                <li className="step-item">
                                    <h4 className="step-title">Drain Old Coolant</h4>
                                    <p className="step-content">
                                        With engine cold, place a drain pan under the radiator. Open the drain
                                        plug at the bottom of the radiator. Remove the expansion tank cap to speed draining.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Flush with Distilled Water</h4>
                                    <p className="step-content">
                                        Close the drain plug. Fill with distilled water. Run the engine with
                                        heater on MAX for 10 minutes. Let cool, then drain again.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Fill with New Coolant</h4>
                                    <p className="step-content">
                                        Close drain plug. Fill system with correct coolant mixture. System
                                        capacity is approximately 6.5 liters.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Bleed Air from System</h4>
                                    <p className="step-content">
                                        With expansion cap off, run engine until thermostat opens (temperature
                                        gauge starts rising). Add coolant as level drops. Replace cap when
                                        no more bubbles appear.
                                    </p>
                                </li>
                            </ol>

                            <div className="info-box info-box-info" style={{ marginTop: 'var(--space-2xl)' }}>
                                <div className="info-box-title">
                                    <Info size={18} /> Thermostat Location
                                </div>
                                <div className="info-box-content">
                                    The thermostat is located in the thermostat housing on the left side of the
                                    engine block. It opens at approximately 87°C. If your engine overheats or
                                    takes too long to warm up, the thermostat may need replacement.
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <ThermometerSun size={18} /> Coolant Specifications
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Type:</strong> G12+ / G13</li>
                                    <li><strong>Color:</strong> Pink/Red</li>
                                    <li><strong>Mix Ratio:</strong> 50/50</li>
                                    <li><strong>Capacity:</strong> 6.5L</li>
                                    <li><strong>Thermostat:</strong> 87°C</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Info size={18} /> Service Interval
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Check:</strong> Monthly</li>
                                    <li><strong>Replace:</strong> 60,000 km</li>
                                    <li><strong>Time:</strong> 4-5 years</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <AlertTriangle size={18} /> Warning Signs
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Temperature gauge high</li>
                                    <li>Sweet smell from engine</li>
                                    <li>Visible leaks under car</li>
                                    <li>Coolant color is brown</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

import Link from 'next/link';
import { Clock, Wrench, CheckCircle, Sparkles, Info, Droplets } from 'lucide-react';

export default function WipersPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Wipers</span>
                    </div>
                    <h1 className="guide-title">Wipers & Washer Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 10-15 minutes
                        </div>
                        <div className="guide-meta-item">
                            <Wrench size={16} /> Beginner
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
                                Good visibility is crucial for safe driving. Wiper blades should be replaced
                                when they start streaking, smearing, or making noise. Most blades last 6-12
                                months depending on climate and usage.
                            </p>

                            <h2>Replacing Front Wiper Blades</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Lift Wiper Arm</h4>
                                    <p className="step-content">
                                        With the ignition off, carefully lift the wiper arm away from the
                                        windshield. It will stay in the raised position.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Release the Blade</h4>
                                    <p className="step-content">
                                        Find the release mechanism where the blade connects to the arm.
                                        Most Punto models use a hook-type fitting. Press the release tab
                                        and slide the blade down toward the windshield.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Install New Blade</h4>
                                    <p className="step-content">
                                        Slide the new blade onto the hook until it clicks into place.
                                        Gently lower the arm back onto the windshield.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Test Operation</h4>
                                    <p className="step-content">
                                        Turn on the wipers and spray washer fluid. Check for smooth,
                                        streak-free wiping across the entire windshield.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Replacing Rear Wiper Blade</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Lift and Release</h4>
                                    <p className="step-content">
                                        Lift the rear wiper arm. The rear blade typically snaps off -
                                        press the release clip and pull the blade away from the arm.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Attach New Blade</h4>
                                    <p className="step-content">
                                        Push the new blade onto the arm until you hear/feel it click
                                        securely in place. Lower the arm gently.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Topping Up Washer Fluid</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Locate Reservoir</h4>
                                    <p className="step-content">
                                        Open the hood. The washer fluid reservoir is a translucent plastic
                                        container with a blue cap, located on the left side of the engine bay.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check Level</h4>
                                    <p className="step-content">
                                        The container has level markings. If low, remove the cap and add
                                        washer fluid until near the top.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Choose the Right Fluid</h4>
                                    <p className="step-content">
                                        Use proper windshield washer fluid - not just water. In winter,
                                        use a freeze-resistant formulation rated for your climate.
                                    </p>
                                </li>
                            </ol>

                            <div className="info-box info-box-success" style={{ marginTop: 'var(--space-2xl)' }}>
                                <div className="info-box-title">
                                    <CheckCircle size={18} /> Wiper Care Tips
                                </div>
                                <div className="info-box-content">
                                    <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                                        <li>Clean wiper blades monthly with glass cleaner</li>
                                        <li>Lift blades off glass in freezing conditions to prevent sticking</li>
                                        <li>Clear ice and snow before using wipers</li>
                                        <li>Replace both front blades together</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Sparkles size={18} /> Wiper Blade Sizes
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Driver:</strong> 600mm (24&quot;)</li>
                                    <li><strong>Passenger:</strong> 400mm (16&quot;)</li>
                                    <li><strong>Rear:</strong> 300mm (12&quot;)</li>
                                    <li><strong>Type:</strong> Hook fitting</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Droplets size={18} /> Washer System
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Capacity:</strong> ~3L</li>
                                    <li><strong>Winter fluid:</strong> -20°C rating</li>
                                    <li><strong>Nozzle clean:</strong> Use pin</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Info size={18} /> Signs to Replace
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Streaking on glass</li>
                                    <li>Squeaking noise</li>
                                    <li>Skipping/chattering</li>
                                    <li>Visible blade damage</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <CheckCircle size={18} /> Quality Brands
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Bosch</li>
                                    <li>Valeo</li>
                                    <li>Denso</li>
                                    <li>PIAA</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, Battery, Info, Zap } from 'lucide-react';

export default function BatteryPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Battery</span>
                    </div>
                    <h1 className="guide-title">Battery Care Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 15-30 minutes
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
                                The battery in your Fiat Punto powers all electrical systems when the engine is off
                                and provides the initial power to start the engine. Diesel engines require more
                                cranking power, so a healthy battery is essential.
                            </p>

                            <div className="info-box info-box-warning">
                                <div className="info-box-title">
                                    <AlertTriangle size={18} /> Safety First
                                </div>
                                <div className="info-box-content">
                                    Always disconnect the negative (-) terminal first and reconnect it last.
                                    Never allow metal tools to touch both terminals simultaneously.
                                    Batteries contain sulfuric acid - wear eye protection and gloves.
                                </div>
                            </div>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Jump Starting Your Punto</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Position Vehicles</h4>
                                    <p className="step-content">
                                        Park the working vehicle close enough for jump cables to reach, but vehicles
                                        should not touch. Turn off both vehicles and remove keys.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Connect Positive Cables</h4>
                                    <p className="step-content">
                                        Connect red cable to dead battery positive (+) terminal first, then to
                                        working battery positive (+) terminal.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Connect Negative Cables</h4>
                                    <p className="step-content">
                                        Connect black cable to working battery negative (-) terminal. Connect other
                                        end to unpainted metal surface on dead car&apos;s engine block (not the battery).
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Start Vehicles</h4>
                                    <p className="step-content">
                                        Start the working vehicle and let it run for 2-3 minutes. Then try starting
                                        your Punto. If it doesn&apos;t start, wait another few minutes.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove Cables</h4>
                                    <p className="step-content">
                                        With your Punto running, remove cables in reverse order: black from your car,
                                        black from working car, red from working car, red from your car.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Recharge Battery</h4>
                                    <p className="step-content">
                                        Drive for at least 30 minutes to recharge the battery. Consider having the
                                        battery tested if this happens frequently.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Battery Replacement</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Turn Off All Electronics</h4>
                                    <p className="step-content">
                                        Turn off the ignition and all electrical consumers. Remove the key from
                                        the ignition.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Disconnect Negative Terminal</h4>
                                    <p className="step-content">
                                        Using a 10mm wrench, loosen the negative (-) terminal clamp and remove
                                        the cable. Tuck it aside where it won&apos;t touch the battery.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Disconnect Positive Terminal</h4>
                                    <p className="step-content">
                                        Loosen and remove the positive (+) terminal clamp. Be careful not to
                                        touch any metal parts with the positive cable.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove Battery Hold-Down</h4>
                                    <p className="step-content">
                                        Remove the battery hold-down clamp using a 10mm or 13mm socket.
                                        This secures the battery in the tray.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove Old Battery</h4>
                                    <p className="step-content">
                                        Carefully lift out the old battery. It&apos;s heavy (about 15-20 kg),
                                        so use proper lifting technique or a battery carrying strap.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Install New Battery</h4>
                                    <p className="step-content">
                                        Place the new battery in the tray with terminals in correct orientation.
                                        Reinstall hold-down clamp. Connect positive (+) first, then negative (-).
                                    </p>
                                </li>
                            </ol>

                            <div className="info-box info-box-success" style={{ marginTop: 'var(--space-2xl)' }}>
                                <div className="info-box-title">
                                    <CheckCircle size={18} /> Maintenance Tips
                                </div>
                                <div className="info-box-content">
                                    <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                                        <li>Clean terminals with baking soda and water if corroded</li>
                                        <li>Apply petroleum jelly to terminals to prevent corrosion</li>
                                        <li>If your Punto sits unused, consider a battery maintainer/trickle charger</li>
                                        <li>Most batteries last 4-6 years in moderate climates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Battery size={18} /> Battery Specifications
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Group Size:</strong> L2 / Type 027</li>
                                    <li><strong>Voltage:</strong> 12V</li>
                                    <li><strong>Capacity:</strong> 60-70 Ah</li>
                                    <li><strong>CCA:</strong> 540-680 A</li>
                                    <li><strong>Terminal:</strong> Top Post</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Zap size={18} /> Signs of Weak Battery
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Slow engine cranking</li>
                                    <li>Dim headlights at idle</li>
                                    <li>Battery warning light on</li>
                                    <li>Electrical issues</li>
                                    <li>Swollen battery case</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Info size={18} /> Good to Know
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Lifespan:</strong> 4-6 years</li>
                                    <li><strong>Cold weather:</strong> Reduces capacity</li>
                                    <li><strong>Disposal:</strong> Recycle at auto shop</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

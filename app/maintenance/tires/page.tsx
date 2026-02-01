import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, CircleDot, Info, Gauge } from 'lucide-react';

export default function TiresPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Tires</span>
                    </div>
                    <h1 className="guide-title">Tire Maintenance Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 15-45 minutes
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
                                Proper tire maintenance ensures safety, extends tire life, and improves fuel
                                economy. Check your tire pressure at least monthly and before long trips.
                            </p>

                            <h2>Checking Tire Pressure</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Check When Cold</h4>
                                    <p className="step-content">
                                        Always check pressure when tires are cold (not driven for 3+ hours).
                                        Warm tires give higher readings that aren&apos;t accurate.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Find Correct Pressure</h4>
                                    <p className="step-content">
                                        Check the sticker on the driver&apos;s door jamb or fuel filler flap.
                                        The Punto typically requires 2.1-2.3 bar (30-33 psi) front and rear.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check All Tires</h4>
                                    <p className="step-content">
                                        Remove valve cap, press gauge firmly onto valve stem, read pressure.
                                        Don&apos;t forget the spare tire - check it monthly too.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Adjust if Needed</h4>
                                    <p className="step-content">
                                        Add air at a petrol station if low. If too high, press the center
                                        pin to release air. Replace valve caps to prevent dirt entry.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Changing a Flat Tire</h2>

                            <div className="info-box info-box-warning">
                                <div className="info-box-title">
                                    <AlertTriangle size={18} /> Safety First
                                </div>
                                <div className="info-box-content">
                                    Only change a tire in a safe location - pull well off the road.
                                    Turn on hazard lights, apply parking brake, and use wheel chocks if available.
                                </div>
                            </div>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Gather Equipment</h4>
                                    <p className="step-content">
                                        Locate the spare tire, jack, and wheel wrench in the trunk.
                                        The jack and tools are usually under the trunk floor.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Loosen Wheel Nuts</h4>
                                    <p className="step-content">
                                        With the car still on the ground, loosen (don&apos;t remove) the wheel
                                        nuts by turning counterclockwise. They may be very tight.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Position and Raise Jack</h4>
                                    <p className="step-content">
                                        Place jack under designated jacking point (reinforced area behind
                                        front wheel or in front of rear wheel). Raise until tire is off ground.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove Wheel</h4>
                                    <p className="step-content">
                                        Remove wheel nuts completely and pull off the flat tire.
                                        Place it under the car as a safety measure.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Mount Spare</h4>
                                    <p className="step-content">
                                        Lift spare onto studs, hand-tighten nuts in star pattern.
                                        Lower car partially, then fully tighten nuts. Torque: 110 Nm.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Tire Sizes & Specifications</h2>

                            <table className="specs-table">
                                <thead>
                                    <tr>
                                        <th>Wheel Size</th>
                                        <th>Tire Size</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>14 inch</td>
                                        <td>175/65 R14</td>
                                        <td>Standard</td>
                                    </tr>
                                    <tr>
                                        <td>15 inch</td>
                                        <td>185/65 R15</td>
                                        <td>Common upgrade</td>
                                    </tr>
                                    <tr>
                                        <td>15 inch</td>
                                        <td>195/55 R15</td>
                                        <td>Sport models</td>
                                    </tr>
                                    <tr>
                                        <td>16 inch</td>
                                        <td>195/45 R16</td>
                                        <td>Sport/Abarth</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="info-box info-box-info" style={{ marginTop: 'var(--space-xl)' }}>
                                <div className="info-box-title">
                                    <Info size={18} /> Tire Rotation
                                </div>
                                <div className="info-box-content">
                                    Rotate tires every 10,000-12,000 km to ensure even wear. Front-wheel drive
                                    cars wear front tires faster. Rotate front to rear, keeping same side.
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Gauge size={18} /> Tire Pressure
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Front:</strong> 2.1-2.3 bar</li>
                                    <li><strong>Rear:</strong> 2.0-2.2 bar</li>
                                    <li><strong>Loaded:</strong> +0.2 bar</li>
                                    <li><strong>Spare:</strong> 2.5 bar</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <CircleDot size={18} /> Tread Depth
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>New:</strong> 7-8mm</li>
                                    <li><strong>Legal min:</strong> 1.6mm</li>
                                    <li><strong>Replace at:</strong> 3mm</li>
                                    <li><strong>Winter:</strong> 4mm minimum</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <AlertTriangle size={18} /> Warning Signs
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Uneven wear patterns</li>
                                    <li>Vibration at speed</li>
                                    <li>Bulges or cracks</li>
                                    <li>Embedded objects</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Wrench size={18} /> Wheel Nuts
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Torque:</strong> 110 Nm</li>
                                    <li><strong>Pattern:</strong> Star</li>
                                    <li><strong>Thread:</strong> M12x1.25</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

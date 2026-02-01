import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, Droplets, Info } from 'lucide-react';

export default function OilChangePage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Oil Change</span>
                    </div>
                    <h1 className="guide-title">Oil Change Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 45-60 minutes
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
                                Regular oil changes are crucial for your 1.3 Multijet diesel engine. The recommended
                                interval is every 15,000 km or 12 months, whichever comes first. Using the correct
                                oil specification is essential for the diesel particulate filter (DPF) longevity.
                            </p>

                            <div className="info-box info-box-warning">
                                <div className="info-box-title">
                                    <AlertTriangle size={18} /> Important
                                </div>
                                <div className="info-box-content">
                                    Always use Low SAPS (Sulfated Ash, Phosphorus, Sulfur) oil for diesel engines
                                    with DPF. Using incorrect oil can clog the DPF and cause expensive damage.
                                </div>
                            </div>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>What You&apos;ll Need</h2>

                            <h3 style={{ marginTop: 'var(--space-lg)', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-lg)' }}>Parts</h3>
                            <ul className="sidebar-list" style={{ marginBottom: 'var(--space-lg)' }}>
                                <li><CheckCircle size={16} style={{ color: 'var(--color-success)' }} /> 5W-40 Low SAPS Engine Oil (4.5L)</li>
                                <li><CheckCircle size={16} style={{ color: 'var(--color-success)' }} /> Oil filter (UFI or equivalent)</li>
                                <li><CheckCircle size={16} style={{ color: 'var(--color-success)' }} /> Drain plug washer (copper or aluminum)</li>
                            </ul>

                            <h3 style={{ marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-lg)' }}>Tools</h3>
                            <ul className="sidebar-list" style={{ marginBottom: 'var(--space-xl)' }}>
                                <li><Wrench size={16} style={{ color: 'var(--color-primary)' }} /> 13mm socket or wrench</li>
                                <li><Wrench size={16} style={{ color: 'var(--color-primary)' }} /> Oil filter wrench (cap type)</li>
                                <li><Wrench size={16} style={{ color: 'var(--color-primary)' }} /> Drain pan (6L minimum)</li>
                                <li><Wrench size={16} style={{ color: 'var(--color-primary)' }} /> Funnel</li>
                                <li><Wrench size={16} style={{ color: 'var(--color-primary)' }} /> Jack and jack stands</li>
                                <li><Wrench size={16} style={{ color: 'var(--color-primary)' }} /> Gloves and shop towels</li>
                            </ul>

                            <h2>Step-by-Step Instructions</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Warm Up the Engine</h4>
                                    <p className="step-content">
                                        Run the engine for 5-10 minutes to warm up the oil. Warm oil drains faster and
                                        carries more contaminants. Turn off the engine and pop the hood.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Raise the Vehicle</h4>
                                    <p className="step-content">
                                        Safely jack up the front of the car and place it on jack stands. Make sure
                                        the vehicle is level for complete drainage. Apply the parking brake.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Locate & Remove Drain Plug</h4>
                                    <p className="step-content">
                                        Locate the drain plug on the bottom of the oil pan. Place the drain pan
                                        underneath. Use a 13mm socket to remove the plug. Let the oil drain completely
                                        (about 10-15 minutes).
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Replace Oil Filter</h4>
                                    <p className="step-content">
                                        The oil filter is located on the front of the engine block. Use an oil filter
                                        wrench to remove it. Apply a thin layer of fresh oil to the new filter gasket.
                                        Install the new filter hand-tight, then turn an additional 3/4 turn.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Reinstall Drain Plug</h4>
                                    <p className="step-content">
                                        Install a new crush washer on the drain plug. Thread the plug by hand first,
                                        then tighten to 25 Nm (18 lb-ft). Do not overtighten.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Add New Oil</h4>
                                    <p className="step-content">
                                        Lower the vehicle. Using a funnel, add approximately 4.2L of oil through the
                                        oil filler cap. Start the engine and let it run for a minute. Check for leaks.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Check Oil Level</h4>
                                    <p className="step-content">
                                        Turn off the engine and wait 2 minutes. Check the dipstick - the level should
                                        be between the MIN and MAX marks. Add oil as needed. The total capacity with
                                        filter is 4.5L.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Reset Service Indicator</h4>
                                    <p className="step-content">
                                        Turn ignition to ON (don&apos;t start). Press the accelerator pedal 3 times fully
                                        within 10 seconds. The service light should flash and then go off.
                                    </p>
                                </li>
                            </ol>

                            <div className="info-box info-box-success" style={{ marginTop: 'var(--space-2xl)' }}>
                                <div className="info-box-title">
                                    <CheckCircle size={18} /> Pro Tips
                                </div>
                                <div className="info-box-content">
                                    <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                                        <li>Always dispose of old oil properly at a recycling center</li>
                                        <li>Keep a record of your oil changes for resale value</li>
                                        <li>Check for leaks after 100 km of driving</li>
                                        <li>Consider using Selenia WR 5W-40 - the OEM recommended oil</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Droplets size={18} /> Oil Specifications
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Grade:</strong> 5W-40</li>
                                    <li><strong>Type:</strong> Low SAPS / C3</li>
                                    <li><strong>Capacity:</strong> 4.5L (with filter)</li>
                                    <li><strong>Drain Plug:</strong> 25 Nm</li>
                                    <li><strong>OEM Brand:</strong> Selenia WR</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Info size={18} /> Service Interval
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Distance:</strong> 15,000 km</li>
                                    <li><strong>Time:</strong> 12 months</li>
                                    <li><strong>Severe use:</strong> 10,000 km</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, Filter, Info } from 'lucide-react';

export default function FiltersPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Filters</span>
                    </div>
                    <h1 className="guide-title">Filter Replacement Guide</h1>
                    <div className="guide-meta">
                        <div className="guide-meta-item">
                            <Clock size={16} /> 15-60 minutes
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
                                Your Fiat Punto has several filters that need periodic replacement. Clean filters
                                ensure efficient engine operation and good cabin air quality. Most filters are
                                easy to replace yourself.
                            </p>

                            <h2>Air Filter</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                The engine air filter prevents dust and debris from entering the engine.
                                A dirty air filter reduces power and fuel economy.
                            </p>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Locate the Air Filter Box</h4>
                                    <p className="step-content">
                                        The air filter box is located on the left side of the engine bay.
                                        It&apos;s a large black plastic box with a ribbed intake hose.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Open the Air Box</h4>
                                    <p className="step-content">
                                        Release the clips holding the lid (usually 4 spring clips around the edge).
                                        Lift the lid carefully without disconnecting any sensors.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove Old Filter</h4>
                                    <p className="step-content">
                                        Lift out the old filter. Note its orientation. Take a moment to vacuum
                                        or wipe out any debris from the box.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Install New Filter</h4>
                                    <p className="step-content">
                                        Place the new filter with the rubber seal facing up. Ensure it seats
                                        properly in the housing. Close the lid and secure all clips.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Cabin/Pollen Filter</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                The cabin filter cleans the air entering the passenger compartment.
                                Replace it annually or if you notice reduced airflow from the vents.
                            </p>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Locate the Filter</h4>
                                    <p className="step-content">
                                        The cabin filter is located behind the glove box or under the dashboard
                                        on the passenger side, depending on model year.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Access the Filter Housing</h4>
                                    <p className="step-content">
                                        For glove box access: Empty the glove box, squeeze the sides to release
                                        the stops, and lower it down to reveal the filter cover.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Replace the Filter</h4>
                                    <p className="step-content">
                                        Remove the cover (usually clips or screws), slide out the old filter,
                                        insert the new one with the airflow arrow pointing into the cabin.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Fuel Filter</h2>

                            <div className="info-box info-box-warning">
                                <div className="info-box-title">
                                    <AlertTriangle size={18} /> Professional Service Recommended
                                </div>
                                <div className="info-box-content">
                                    The fuel filter on diesel engines is part of the fuel system and requires
                                    bleeding/priming after replacement. While it can be DIY, we recommend
                                    professional service to avoid air entering the fuel system.
                                </div>
                            </div>

                            <h3 style={{ marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>Fuel Filter Information</h3>
                            <ul className="sidebar-list">
                                <li><strong>Location:</strong> Engine bay, near fuel injection system</li>
                                <li><strong>Interval:</strong> Every 30,000 km</li>
                                <li><strong>Note:</strong> Diesel fuel filters have a water separator that should be drained periodically</li>
                                <li><strong>Winter:</strong> Use cold-weather rated fuel filter in winter</li>
                            </ul>

                            <div className="info-box info-box-success" style={{ marginTop: 'var(--space-2xl)' }}>
                                <div className="info-box-title">
                                    <CheckCircle size={18} /> Filter Benefits
                                </div>
                                <div className="info-box-content">
                                    <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-sm)' }}>
                                        <li>Improved fuel economy (air filter)</li>
                                        <li>Better engine performance</li>
                                        <li>Cleaner cabin air, especially for allergy sufferers</li>
                                        <li>Protected fuel injection system (fuel filter)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Filter size={18} /> Filter Intervals
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>Air Filter:</strong> 30,000 km</li>
                                    <li><strong>Cabin Filter:</strong> 15,000 km</li>
                                    <li><strong>Fuel Filter:</strong> 30,000 km</li>
                                    <li><strong>Oil Filter:</strong> Every oil change</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Info size={18} /> Signs of Dirty Filters
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Reduced acceleration</li>
                                    <li>Black smoke (diesel)</li>
                                    <li>Weak A/C airflow</li>
                                    <li>Musty smell in cabin</li>
                                    <li>Hard starting</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <CheckCircle size={18} /> Quality Brands
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Mann Filter</li>
                                    <li>Bosch</li>
                                    <li>UFI</li>
                                    <li>Mahle</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

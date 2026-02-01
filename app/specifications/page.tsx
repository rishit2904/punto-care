import Link from 'next/link';
import { Gauge, Droplets, Wrench, Fuel, Zap, Settings } from 'lucide-react';

export default function SpecificationsPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Specifications</span>
                    </div>
                    <h1 className="guide-title">Fiat Punto Specifications</h1>
                    <p className="section-subtitle">
                        Complete technical specifications for the Fiat Punto 1.3 Multijet Diesel
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
                <div className="container">
                    <div className="grid grid-2">
                        {/* Engine Specifications */}
                        <div className="card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <Fuel size={24} style={{ color: 'var(--color-primary)' }} /> Engine
                            </h3>
                            <table className="specs-table">
                                <tbody>
                                    <tr>
                                        <td>Engine Code</td>
                                        <td>199 A3.000</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement</td>
                                        <td>1248 cc</td>
                                    </tr>
                                    <tr>
                                        <td>Configuration</td>
                                        <td>Inline 4-cylinder</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel System</td>
                                        <td>Common Rail Direct Injection</td>
                                    </tr>
                                    <tr>
                                        <td>Turbocharger</td>
                                        <td>Garrett GT1444</td>
                                    </tr>
                                    <tr>
                                        <td>Power</td>
                                        <td>75 HP @ 4000 rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Torque</td>
                                        <td>190 Nm @ 1500 rpm</td>
                                    </tr>
                                    <tr>
                                        <td>Compression Ratio</td>
                                        <td>17.6:1</td>
                                    </tr>
                                    <tr>
                                        <td>Valve Train</td>
                                        <td>SOHC, 8 valves</td>
                                    </tr>
                                    <tr>
                                        <td>Emission Standard</td>
                                        <td>Euro 5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Performance */}
                        <div className="card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <Zap size={24} style={{ color: 'var(--color-primary)' }} /> Performance
                            </h3>
                            <table className="specs-table">
                                <tbody>
                                    <tr>
                                        <td>Top Speed</td>
                                        <td>170 km/h</td>
                                    </tr>
                                    <tr>
                                        <td>0-100 km/h</td>
                                        <td>13.2 seconds</td>
                                    </tr>
                                    <tr>
                                        <td>Urban Consumption</td>
                                        <td>5.2 L/100km</td>
                                    </tr>
                                    <tr>
                                        <td>Extra Urban</td>
                                        <td>3.5 L/100km</td>
                                    </tr>
                                    <tr>
                                        <td>Combined</td>
                                        <td>4.2 L/100km</td>
                                    </tr>
                                    <tr>
                                        <td>Tank Capacity</td>
                                        <td>45 liters</td>
                                    </tr>
                                    <tr>
                                        <td>Range (est.)</td>
                                        <td>~1070 km</td>
                                    </tr>
                                    <tr>
                                        <td>CO2 Emissions</td>
                                        <td>109 g/km</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Fluid Capacities */}
                        <div className="card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <Droplets size={24} style={{ color: 'var(--color-primary)' }} /> Fluid Capacities
                            </h3>
                            <table className="specs-table">
                                <tbody>
                                    <tr>
                                        <td>Engine Oil (with filter)</td>
                                        <td>4.5 L</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Oil (dry fill)</td>
                                        <td>5.0 L</td>
                                    </tr>
                                    <tr>
                                        <td>Coolant</td>
                                        <td>6.5 L</td>
                                    </tr>
                                    <tr>
                                        <td>Gearbox Oil (C510)</td>
                                        <td>1.8 L</td>
                                    </tr>
                                    <tr>
                                        <td>Brake Fluid</td>
                                        <td>0.5 L</td>
                                    </tr>
                                    <tr>
                                        <td>Power Steering</td>
                                        <td>Electric (no fluid)</td>
                                    </tr>
                                    <tr>
                                        <td>Washer Fluid</td>
                                        <td>~3 L</td>
                                    </tr>
                                    <tr>
                                        <td>A/C Refrigerant</td>
                                        <td>425g R134a</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Recommended Fluids */}
                        <div className="card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <Settings size={24} style={{ color: 'var(--color-primary)' }} /> Recommended Fluids
                            </h3>
                            <table className="specs-table">
                                <tbody>
                                    <tr>
                                        <td>Engine Oil</td>
                                        <td>5W-40 Low SAPS (C3)</td>
                                    </tr>
                                    <tr>
                                        <td>OEM Oil Brand</td>
                                        <td>Selenia WR 5W-40</td>
                                    </tr>
                                    <tr>
                                        <td>Coolant</td>
                                        <td>G12+ / G13 (Pink)</td>
                                    </tr>
                                    <tr>
                                        <td>Gearbox Oil</td>
                                        <td>75W-80 GL-4</td>
                                    </tr>
                                    <tr>
                                        <td>Brake Fluid</td>
                                        <td>DOT 4</td>
                                    </tr>
                                    <tr>
                                        <td>Fuel</td>
                                        <td>Diesel EN 590</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Dimensions */}
                        <div className="card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <Gauge size={24} style={{ color: 'var(--color-primary)' }} /> Dimensions
                            </h3>
                            <table className="specs-table">
                                <tbody>
                                    <tr>
                                        <td>Length</td>
                                        <td>4030 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Width</td>
                                        <td>1687 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>1490 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Wheelbase</td>
                                        <td>2510 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Front Track</td>
                                        <td>1467 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Rear Track</td>
                                        <td>1460 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Curb Weight</td>
                                        <td>1130 kg</td>
                                    </tr>
                                    <tr>
                                        <td>Boot Capacity</td>
                                        <td>275 L</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Torque Specifications */}
                        <div className="card">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                                <Wrench size={24} style={{ color: 'var(--color-primary)' }} /> Torque Values
                            </h3>
                            <table className="specs-table">
                                <tbody>
                                    <tr>
                                        <td>Oil Drain Plug</td>
                                        <td>25 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Wheel Nuts</td>
                                        <td>110 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Spark Plugs (petrol)</td>
                                        <td>25 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Glow Plugs</td>
                                        <td>8 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Brake Caliper Bolts</td>
                                        <td>30 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Caliper Bracket</td>
                                        <td>105 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Suspension Strut</td>
                                        <td>50 Nm</td>
                                    </tr>
                                    <tr>
                                        <td>Exhaust Manifold</td>
                                        <td>25 Nm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Service Intervals */}
                    <div className="card" style={{ marginTop: 'var(--space-xl)' }}>
                        <h3 style={{ marginBottom: 'var(--space-lg)' }}>Service Intervals</h3>
                        <table className="specs-table">
                            <thead>
                                <tr>
                                    <th>Service Item</th>
                                    <th>Distance</th>
                                    <th>Time</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Engine Oil & Filter</td>
                                    <td>15,000 km</td>
                                    <td>12 months</td>
                                    <td>Use Low SAPS oil</td>
                                </tr>
                                <tr>
                                    <td>Air Filter</td>
                                    <td>30,000 km</td>
                                    <td>24 months</td>
                                    <td>Check at each service</td>
                                </tr>
                                <tr>
                                    <td>Cabin Filter</td>
                                    <td>15,000 km</td>
                                    <td>12 months</td>
                                    <td>Every oil change</td>
                                </tr>
                                <tr>
                                    <td>Fuel Filter</td>
                                    <td>30,000 km</td>
                                    <td>24 months</td>
                                    <td>Professional recommended</td>
                                </tr>
                                <tr>
                                    <td>Brake Fluid</td>
                                    <td>-</td>
                                    <td>24 months</td>
                                    <td>DOT 4</td>
                                </tr>
                                <tr>
                                    <td>Coolant</td>
                                    <td>60,000 km</td>
                                    <td>5 years</td>
                                    <td>G12+ specification</td>
                                </tr>
                                <tr>
                                    <td>Timing Belt</td>
                                    <td>120,000 km</td>
                                    <td>5 years</td>
                                    <td>Critical - don&apos;t skip</td>
                                </tr>
                                <tr>
                                    <td>Gearbox Oil</td>
                                    <td>80,000 km</td>
                                    <td>-</td>
                                    <td>If contaminated</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

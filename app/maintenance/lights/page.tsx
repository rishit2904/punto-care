import Link from 'next/link';
import { Clock, Wrench, AlertTriangle, CheckCircle, Lightbulb, Info } from 'lucide-react';

export default function LightsPage() {
    return (
        <>
            <section className="guide-header">
                <div className="container">
                    <div className="guide-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/maintenance">Maintenance</Link>
                        <span>/</span>
                        <span>Lights & Bulbs</span>
                    </div>
                    <h1 className="guide-title">Lights & Bulbs Guide</h1>
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
                                Properly functioning lights are essential for safety and legal compliance.
                                Check all your lights regularly - it&apos;s one of the easiest maintenance tasks
                                you can do yourself.
                            </p>

                            <div className="info-box info-box-info">
                                <div className="info-box-title">
                                    <Info size={18} /> Tip
                                </div>
                                <div className="info-box-content">
                                    Never touch halogen bulbs with bare fingers. The oil from your skin can
                                    cause hot spots and premature failure. Use gloves or hold the bulb by its base.
                                </div>
                            </div>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Headlight Bulb Replacement</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Access the Headlight</h4>
                                    <p className="step-content">
                                        Open the hood. The headlight bulbs are accessible from behind the headlight
                                        assembly. You may need to remove the air filter box on the left side for easier access.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove the Dust Cover</h4>
                                    <p className="step-content">
                                        Twist the round rubber dust cover counterclockwise and pull it off.
                                        This exposes the bulb holder.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Disconnect the Connector</h4>
                                    <p className="step-content">
                                        Unplug the electrical connector from the bulb by pressing the release
                                        tab and pulling away.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Remove the Bulb</h4>
                                    <p className="step-content">
                                        Release the metal spring clip by pressing it down and swinging it aside.
                                        The bulb will come out.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Install New Bulb</h4>
                                    <p className="step-content">
                                        Insert the new bulb (without touching the glass), secure with the spring
                                        clip, reconnect the connector, and replace the dust cover.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Tail Light Bulb Replacement</h2>

                            <ol className="steps-list" style={{ marginTop: 'var(--space-xl)' }}>
                                <li className="step-item">
                                    <h4 className="step-title">Access from Inside Trunk</h4>
                                    <p className="step-content">
                                        Open the trunk/hatch. Remove the trim panel covering the back of the
                                        tail light assembly by unclipping or unscrewing.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Locate the Bulb Holder</h4>
                                    <p className="step-content">
                                        You&apos;ll see several bulb holders. Turn the appropriate one counterclockwise
                                        about 1/4 turn and pull it out.
                                    </p>
                                </li>
                                <li className="step-item">
                                    <h4 className="step-title">Replace the Bulb</h4>
                                    <p className="step-content">
                                        Push the old bulb in slightly and twist counterclockwise to remove.
                                        Install new bulb by pushing and twisting clockwise. Reinstall holder.
                                    </p>
                                </li>
                            </ol>

                            <h2 style={{ marginTop: 'var(--space-2xl)' }}>Bulb Specifications</h2>

                            <table className="specs-table">
                                <thead>
                                    <tr>
                                        <th>Light</th>
                                        <th>Bulb Type</th>
                                        <th>Wattage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Low Beam</td>
                                        <td>H7</td>
                                        <td>55W</td>
                                    </tr>
                                    <tr>
                                        <td>High Beam</td>
                                        <td>H1</td>
                                        <td>55W</td>
                                    </tr>
                                    <tr>
                                        <td>Front Indicator</td>
                                        <td>PY21W</td>
                                        <td>21W</td>
                                    </tr>
                                    <tr>
                                        <td>Side Indicator</td>
                                        <td>W5W</td>
                                        <td>5W</td>
                                    </tr>
                                    <tr>
                                        <td>Tail Light</td>
                                        <td>P21/5W</td>
                                        <td>21/5W</td>
                                    </tr>
                                    <tr>
                                        <td>Brake Light</td>
                                        <td>P21W</td>
                                        <td>21W</td>
                                    </tr>
                                    <tr>
                                        <td>Reverse Light</td>
                                        <td>P21W</td>
                                        <td>21W</td>
                                    </tr>
                                    <tr>
                                        <td>Number Plate</td>
                                        <td>W5W</td>
                                        <td>5W</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <aside className="guide-sidebar">
                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <Lightbulb size={18} /> Common Bulbs
                                </h4>
                                <ul className="sidebar-list">
                                    <li><strong>H7:</strong> Low beam</li>
                                    <li><strong>H1:</strong> High beam</li>
                                    <li><strong>P21W:</strong> Indicators/brake</li>
                                    <li><strong>W5W:</strong> Side lights</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <CheckCircle size={18} /> Testing Lights
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Park near reflective surface</li>
                                    <li>Use phone to record while walking around</li>
                                    <li>Ask someone to check while you operate</li>
                                    <li>Check at MOT/inspection</li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h4 className="sidebar-box-title">
                                    <AlertTriangle size={18} /> Tips
                                </h4>
                                <ul className="sidebar-list">
                                    <li>Replace bulbs in pairs</li>
                                    <li>Keep spare bulbs in car</li>
                                    <li>Clean lens with glass cleaner</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

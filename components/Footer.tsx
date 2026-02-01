import Link from 'next/link';
import { Car, Wrench, Gauge, AlertTriangle, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo">
                            <div className="logo-icon">
                                <Car size={24} />
                            </div>
                            <span>Punto<span style={{ color: 'var(--color-primary)' }}>Care</span></span>
                        </Link>
                        <p>
                            Your complete DIY maintenance guide for the Fiat Punto 1.3 Multijet Diesel.
                            Keep your car running smoothly with our detailed guides.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-title">Maintenance</h4>
                        <div className="footer-links">
                            <Link href="/maintenance/oil-change" className="footer-link">Oil Change</Link>
                            <Link href="/maintenance/coolant" className="footer-link">Coolant System</Link>
                            <Link href="/maintenance/battery" className="footer-link">Battery</Link>
                            <Link href="/maintenance/brakes" className="footer-link">Brakes</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">More Guides</h4>
                        <div className="footer-links">
                            <Link href="/maintenance/lights" className="footer-link">Lights & Bulbs</Link>
                            <Link href="/maintenance/filters" className="footer-link">Filters</Link>
                            <Link href="/maintenance/tires" className="footer-link">Tires</Link>
                            <Link href="/maintenance/wipers" className="footer-link">Wipers</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-title">Resources</h4>
                        <div className="footer-links">
                            <Link href="/specifications" className="footer-link">Full Specifications</Link>
                            <Link href="/troubleshooting" className="footer-link">Troubleshooting</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 PuntoCare. Made with <Heart size={14} style={{ display: 'inline', color: 'var(--color-primary)' }} /> for Punto owners.</p>
                    <p>Not affiliated with Fiat Chrysler Automobiles.</p>
                </div>
            </div>
        </footer>
    );
}

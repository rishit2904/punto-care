import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface MaintenanceCardProps {
    href: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function MaintenanceCard({ href, icon: Icon, title, description }: MaintenanceCardProps) {
    return (
        <Link href={href} className="maintenance-card">
            <div className="maintenance-card-icon">
                <Icon size={28} />
            </div>
            <h3 className="maintenance-card-title">{title}</h3>
            <p className="maintenance-card-desc">{description}</p>
            <div className="maintenance-card-arrow">
                View Guide <ArrowRight size={16} />
            </div>
        </Link>
    );
}

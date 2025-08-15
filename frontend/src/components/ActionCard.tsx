import React from 'react';
import { Link } from 'react-router-dom';

interface ActionCardProps {
    icon: string;
    title: string;
    description: string;
    buttonText: string;
    buttonColor: string;
    link: string;
    iconColor?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({
    icon,
    title,
    description,
    buttonText,
    buttonColor,
    link,
    iconColor = 'primary'
}) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 action-card">
                <div className="card-body text-center d-flex flex-column">
                    <div className={`mb-3 text-${iconColor}`}>
                        <i className={`bi ${icon}`} style={{ fontSize: '3rem' }}></i>
                    </div>
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text text-muted flex-grow-1">{description}</p>
                    <Link
                        to={link}
                        className={`btn btn-${buttonColor} mt-auto`}
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ActionCard;

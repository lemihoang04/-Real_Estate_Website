import React from 'react';
import ActionCard from '../../components/ActionCard';

const Home: React.FC = () => {
    return (
        <div className="min-vh-100">

            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="h3 fw-bold text-dark mb-3">What would you like to do?</h2>
                        <p className="text-muted">Choose an action to get started with managing your properties</p>
                    </div>
                </div>

                <div className="row">
                    <ActionCard
                        icon="bi-plus-circle-fill"
                        title="Create Property"
                        description="Add new property listings to your database with detailed information and specifications"
                        buttonText="Add New Property"
                        buttonColor="success"
                        link="/properties/create"
                        iconColor="success"
                    />

                    <ActionCard
                        icon="bi-list-ul"
                        title="View Properties"
                        description="Browse, search, and filter through all your property listings with advanced search options"
                        buttonText="View All Properties"
                        buttonColor="primary"
                        link="/properties"
                        iconColor="primary"
                    />

                    <ActionCard
                        icon="bi-pencil-square"
                        title="Edit Properties"
                        description="Update and modify existing property information, pricing, and details as needed"
                        buttonText="Edit Properties"
                        buttonColor="warning"
                        link="/properties"
                        iconColor="warning"
                    />

                    <ActionCard
                        icon="bi-archive"
                        title="Deleted Properties"
                        description="View and restore soft-deleted property listings or permanently remove them"
                        buttonText="View Deleted"
                        buttonColor="secondary"
                        link="/properties/deleted"
                        iconColor="secondary"
                    />
                </div>
            </div>


        </div>
    );
};

export default Home;



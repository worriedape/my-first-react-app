/* import React from 'react'; */
import BusRouteCard from './BusRouteCard'; // Import the card component
import './BusRouteCards.css'; // Or whatever you named your CSS file

const BusRouteCards = () => {
    // Mock bus route data (replace with your actual data source)
    const busRoutesData = [
        {
            routeName: 'City Express Route 1',
            routeNumber: 'CE1',
            routeDescription: 'Fast service through the city center.',
            routeCoordinates: [
                [51.505, -0.09], [51.51, -0.08], [51.515, -0.07], [51.52, -0.06], [51.525, -0.05]
            ],
        },
        {
            routeName: 'Suburban Link Route 12',
            routeNumber: 'SL12',
            routeDescription: 'Connects suburban areas with the main city.',
            routeCoordinates: [
                [51.49, -0.12], [51.495, -0.11], [51.50, -0.10], [51.505, -0.09], [51.51, -0.08]
            ],
        },
        {
            routeName: 'Green Valley Shuttle',
            routeNumber: 'GV-S',
            routeDescription: 'Scenic route through Green Valley.',
            routeCoordinates: [
                [51.52, -0.15], [51.525, -0.14], [51.53, -0.13], [51.535, -0.12], [51.54, -0.11]
            ],
        },
        {
            routeName: 'Outer Loop Route 50',
            routeNumber: 'OL50',
            routeDescription: 'Circular route around the city outskirts.',
            routeCoordinates: [
                [51.48, -0.05], [51.485, -0.04], [51.49, -0.03], [51.495, -0.02], [51.50, -0.01]
            ],
        },
        {
            routeName: 'Downtown Connector Route 7',
            routeNumber: 'DC7',
            routeDescription: 'Quick connection to the downtown core.',
            routeCoordinates: [
                [51.51, -0.10], [51.515, -0.09], [51.52, -0.08], [51.525, -0.07], [51.53, -0.06]
            ],
        },
        {
            routeName: 'Industrial Park Express',
            routeNumber: 'IP-X',
            routeDescription: 'Direct service to the industrial park area.',
            routeCoordinates: [
                [51.47, -0.10], [51.475, -0.09], [51.48, -0.08], [51.485, -0.07], [51.49, -0.06]
            ],
        },
        // ... add 14 more routes to reach a total of 20
        {
            routeName: 'North Residential Route 22',
            routeNumber: 'NR22',
            routeDescription: 'Serves the northern residential neighborhoods.',
            routeCoordinates: [
                [51.53, -0.20], [51.535, -0.19], [51.54, -0.18], [51.545, -0.17], [51.55, -0.16]
            ],
        },
        {
            routeName: 'South Business Link Route 35',
            routeNumber: 'SB35',
            routeDescription: 'Links southern business districts.',
            routeCoordinates: [
                [51.46, -0.02], [51.465, -0.01], [51.47, 0.00], [51.475, 0.01], [51.48, 0.02]
            ],
        },
        {
            routeName: 'East Side Commuter',
            routeNumber: 'EC',
            routeDescription: 'Commuter route from the east side.',
            routeCoordinates: [
                [51.50, 0.02], [51.505, 0.03], [51.51, 0.04], [51.515, 0.05], [51.52, 0.06]
            ],
        },
        {
            routeName: 'West End Local Route 9',
            routeNumber: 'WE9',
            routeDescription: 'Local service in the west end area.',
            routeCoordinates: [
                [51.52, -0.25], [51.525, -0.24], [51.53, -0.23], [51.535, -0.22], [51.54, -0.21]
            ],
        },
        {
            routeName: 'Airport Shuttle A',
            routeNumber: 'AS-A',
            routeDescription: 'Shuttle service to the airport.',
            routeCoordinates: [
                [51.45, -0.15], [51.455, -0.14], [51.46, -0.13], [51.465, -0.12], [51.47, -0.11]
            ],
        },
        {
            routeName: 'University Direct Route 20',
            routeNumber: 'UD20',
            routeDescription: 'Direct route to the University campus.',
            routeCoordinates: [
                [51.52, -0.05], [51.525, -0.04], [51.53, -0.03], [51.535, -0.02], [51.54, -0.01]
            ],
        },
        {
            routeName: 'Hospital Link Route 15',
            routeNumber: 'HL15',
            routeDescription: 'Links major hospitals across the city.',
            routeCoordinates: [
                [51.49, 0.00], [51.495, 0.01], [51.50, 0.02], [51.505, 0.03], [51.51, 0.04]
            ],
        },
        {
            routeName: 'Park and Ride Route 2',
            routeNumber: 'PR2',
            routeDescription: 'Park and ride service to the city center.',
            routeCoordinates: [
                [51.47, -0.20], [51.475, -0.19], [51.48, -0.18], [51.485, -0.17], [51.49, -0.16]
            ],
        },
        {
            routeName: 'Expressway Connector Route 30',
            routeNumber: 'EX30',
            routeDescription: 'Express connection using the expressway.',
            routeCoordinates: [
                [51.51, -0.25], [51.515, -0.24], [51.52, -0.23], [51.525, -0.22], [51.53, -0.21]
            ],
        },
        {
            routeName: 'Waterfront Service Route 8',
            routeNumber: 'WF8',
            routeDescription: 'Scenic route along the waterfront.',
            routeCoordinates: [
                [51.48, 0.05], [51.485, 0.06], [51.49, 0.07], [51.495, 0.08], [51.50, 0.09]
            ],
        },
        {
            routeName: 'Shopping District Shuttle',
            routeNumber: 'SD-S',
            routeDescription: 'Shuttle service to major shopping areas.',
            routeCoordinates: [
                [51.53, -0.10], [51.535, -0.09], [51.54, -0.08], [51.545, -0.07], [51.55, -0.06]
            ],
        },
        {
            routeName: 'Cultural Center Loop',
            routeNumber: 'CC-L',
            routeDescription: 'Loop route around cultural centers.',
            routeCoordinates: [
                [51.46, -0.10], [51.465, -0.09], [51.47, -0.08], [51.475, -0.07], [51.48, -0.06]
            ],
        },
        {
            routeName: 'Old Town Explorer Route 11',
            routeNumber: 'OT11',
            routeDescription: 'Explores the historic Old Town area.',
            routeCoordinates: [
                [51.50, -0.15], [51.505, -0.14], [51.51, -0.13], [51.515, -0.12], [51.52, -0.11]
            ],
        },
        {
            routeName: 'Residential Area Connector Route 25',
            routeNumber: 'RC25',
            routeDescription: 'Connects various residential areas.',
            routeCoordinates: [
                [51.49, -0.20], [51.495, -0.19], [51.50, -0.18], [51.505, -0.17], [51.51, -0.16]
            ],
        },
    ];

    return (
        <div className="bus-card-container">
            {busRoutesData.map((route, index) => (
                <BusRouteCard key={index} route={route} />
            ))}
        </div>
    );
};

export default BusRouteCards;
import React from 'react';

const DataInsights: React.FC = () => {
    const insightsData = [
        { title: 'Project A', value: 75, description: 'Completion rate of Project A' },
        { title: 'Project B', value: 50, description: 'Completion rate of Project B' },
        { title: 'Project C', value: 90, description: 'Completion rate of Project C' },
    ];

    return (
        <section className="data-insights">
            <h2>Data Insights</h2>
            <div className="insights-container">
                {insightsData.map((insight, index) => (
                    <div key={index} className="insight-card">
                        <h3>{insight.title}</h3>
                        <p>{insight.description}</p>
                        <div className="insight-value">{insight.value}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DataInsights;
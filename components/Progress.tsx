import React from 'react';

interface ProgressBarProps {
    completed: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
    // Calculate the percentage
    const percentage = Math.min(100, Math.max(0, (completed / total) * 100));

    return (
        <div className="w-full md:w-1/2">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">
                    Interviews Created: {completed}/{total}
                </span>
                <span className="text-sm font-medium text-white">
                    {percentage.toFixed(0)}%
                </span>
            </div>

            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-purple-500 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
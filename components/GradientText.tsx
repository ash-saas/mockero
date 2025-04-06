import React from 'react'

const GradientText = ({ text }: { text: string }) => {
    return (
        <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
            {text}
        </span>
    )
}

export default GradientText
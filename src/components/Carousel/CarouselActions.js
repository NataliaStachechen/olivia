import React from 'react'

import { Box } from '@chakra-ui/core'

import { useCarousel } from 'components/Carousel'
import { DotButton } from 'components/DotButton'

export const CarouselActions = () => {

    const {totalSteps, currentStep, setCurrentStep} = useCarousel()
 
    return (
        <Box display="flex" flex={1} justifyContent="center" width="100%" position="fixed" bottom="40px">
            {
                Array.from({length: totalSteps}, (_, key) => 
                    <DotButton key={key}  contained={key < currentStep} onClick={() => setCurrentStep(key + 1)}/>
                )
            }
        </Box>
    )
}
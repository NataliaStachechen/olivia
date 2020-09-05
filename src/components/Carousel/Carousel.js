import React, { useState, useEffect, Children, useContext } from 'react'

import { createContext } from 'react'

export const CarouselContext = createContext()

export const useCarousel = () => useContext(CarouselContext)

export const CarouselContent = ({ children }) => {
  const { currentStep, setTotalSteps } = useCarousel()

  useEffect(() => {
    setTotalSteps(children.length)
  }, [children.length, setTotalSteps])

  return Children.toArray(children)[currentStep - 1] || null
}

export const Carousel = ({ children }) => {
  const [totalSteps, setTotalSteps] = useState(1)
  const [currentStep, setCurrentStep] = useState(1)

  const value = {
    totalSteps,
    setTotalSteps,
    currentStep,
    setCurrentStep
  }

  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

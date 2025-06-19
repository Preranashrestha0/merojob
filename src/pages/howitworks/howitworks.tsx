import CardGrid from '@/components/card/servicesCards'
import StepsTimeline from '@/components/stepsTimeline'
import { Button } from '@/components/ui/button'
import React from 'react'

const Howitworks = () => {
  return (
    <div>
        <Button variant={'destructive'}>HOW IT WORKS</Button>
        <h2>How It Works</h2>
        <p>Our platform is designed to make managing your finances simple and efficient. Follow these easy steps to get started:</p>
        <StepsTimeline/>
        <CardGrid/>
    </div>
  )
}

export default Howitworks
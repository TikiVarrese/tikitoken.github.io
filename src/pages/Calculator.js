import React, { useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'
import { CartIcon, MoneyIcon, PeopleIcon, HeartIcon, CoinsIcon } from '../icons'
import { Card, CardBody, Button } from '@windmill/react-ui'


function Calculator() {
  return (
    <>
      <PageTitle>Calculator</PageTitle>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Your TIKI Holdings" value={`0 TIKI`}>
          <RoundIcon
            icon={CoinsIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        
        <Card>
          <CardBody className="flex items-center">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total BNB Paid</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200"><span className="text-yellow-300">0</span><span className="italic font-light text-md text-green-400">0</span></p>
            </div>
          </CardBody>
        </Card>

        <InfoCard className="" title="Last Payout Time" value={`0`}>
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-blue-500 dark:text-blue-100"
              bgColorClass="bg-blue-100 dark:bg-blue-500"
              className="mr-4"
            />
        </InfoCard>
        
        <Card>
          <CardBody className="flex items-center">
            <RoundIcon
              icon={CartIcon}
              iconColorClass="text-yellow-500 dark:text-yellow-100"
              bgColorClass="bg-yellow-100 dark:bg-yellow-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Payout Loading</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">0</p>
            </div>
          </CardBody>
        </Card>

      </div>
    </>
  )
}

export default Calculator

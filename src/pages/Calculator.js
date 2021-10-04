import React, { useEffect, useState } from 'react'
import PageTitle from '../components/Typography/PageTitle'
import InfoCard from '../components/Cards/InfoCard'
import RoundIcon from '../components/RoundIcon'
import { CartIcon, ChartsIcon, MoneyIcon, PeopleIcon, HeartIcon, CoinsIcon } from '../icons'
import { Card, CardBody, Button } from '@windmill/react-ui'
import numberWithCommas from '../utils/numberWithCommas'


function Calculator(props) {
  const [tikiPrice, setTikiPrice] = useState(0)
  const [tikiVolume, setTikiVolume] = useState(0)
  const [tikiHoldings, setTikiHoldings] = useState(0)
  const [customHoldings, setCustomHoldings] = useState(0)
  const [customVolume, setCustomVolume] = useState(0)
  const [test, setTest] = useState(false)

  console.log(props)

  useEffect(() => {
    setTikiHoldings(numberWithCommas(props.holdings))
    setTikiPrice(props.tikiPrice.toFixed(4))
    setTikiVolume(numberWithCommas(props.tikiVolume.toFixed(2)))
  })

  return (
    <>
      <PageTitle>Calculator</PageTitle>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <Card >
          <CardBody className="flex items-center">
            <RoundIcon
              icon={CoinsIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">TIKI Holdings</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{tikiHoldings} TIKI</p>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="flex items-center">
            <RoundIcon
              icon={ChartsIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Volume</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">${tikiVolume} USD</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-blue-500 dark:text-blue-100"
              bgColorClass="bg-blue-100 dark:bg-blue-500"
              className="mr-4"
            />
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Price</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">${tikiPrice} USD</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Calculator

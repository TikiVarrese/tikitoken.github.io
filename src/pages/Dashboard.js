import React, { useState, useEffect } from 'react'
import _ from "lodash";

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import { CartIcon, MoneyIcon, PeopleIcon, HeartIcon, CoinsIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import {
  Card,
  CardBody,
  Button
} from '@windmill/react-ui'

import TimeDifference from '../utils/timeDifference'
import numberWithCommas from '../utils/numberWithCommas'

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard(props) {


  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  // pagination setup
  const resultsPerPage = 0
  const totalResults = response.length

  const { bnbPrice, bnbHoldings, totalPaid, holdings, paid, lastPaid, address, nextPayoutProgress, nextPayoutValue, setHoldings, setPaid, setLastPaid, setAddress, setNextPayoutProgress, setNextPayoutValue } = props
  
  const payoutText = <><span className="text-yellow-300">{nextPayoutValue} BNB</span>{Date.now()-lastPaid >= 3600000 ? ` | ${nextPayoutProgress}%` : ` | ${(60-((Date.now()-lastPaid)/60000)).toFixed(0)}m`}</>

  const earningsInDollars = (holdings/1000000000)*1000000
  const earningsInBnb = earningsInDollars/bnbPrice

  return (
    <div className="pb-10">
      <PageTitle className="text-3xl">TIKI Earnings Manager</PageTitle>

      <CTA holdings={holdings} address={(address !== "" && bnbHoldings !== 0) ? `${address} | BNB In Your Wallet: ${bnbHoldings} ($${numberWithCommas((bnbHoldings*bnbPrice).toFixed(2))})` : address} />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Your TIKI Holdings" value={`${numberWithCommas(holdings)} TIKI`}>
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
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200"><span className="text-yellow-300">{`${(paid / 1e18).toFixed(4)}`} BNB</span></p>
            </div>
          </CardBody>
        </Card>

        <InfoCard className="" title="Last Payout Time" value={`${lastPaid === 0 ? 'Never' : TimeDifference(Date.now(), lastPaid)}`}>
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
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Next Payout Loading</p>
              
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{payoutText}</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <a  className="w-full h-full" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9b76D1B12Ff738c113200EB043350022EBf12Ff0" target="_blank" rel="noopener noreferrer">
        <Button className="w-full mt-4 mb-4" style={{background: 'lime !important'}} iconLeft={HeartIcon}>
            Click Here To Reinvest Your Dividends And Earn Even More BNB Over Time
        </Button>
      </a>

      <div className="flex">
        <Card className="w-1/2 mr-3">
          <CardBody className="flex flex-col text-center items-center">
            <img className="w-32 h-32 mb-4 mt-4" src={require('../assets/img/money.png')} />
            <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">Your {numberWithCommas(holdings)} TIKI Earns:</p><br/>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas(earningsInBnb.toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Day</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas((earningsInBnb*7).toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars*7).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Week</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas((earningsInBnb*30).toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars*30).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Month</span>
            </div>
            <div className="flex">
              <p className="text-green-400 dark:text-green-400 text-2xl text-center"><span className="text-yellow-300">{numberWithCommas((earningsInBnb*365).toFixed(2))} BNB</span> (${numberWithCommas((earningsInDollars*365).toFixed(2))})</p><span className="text-gray-600 dark:text-gray-400 text-xl text-center ml-2 mt-2">Per Year</span>
            </div>
            <br/>
            <p className="text-gray-600 dark:text-gray-400 text-xl text-center -mt-2">Estimations are based on $10m trading volume</p>
          </CardBody>
        </Card>

        <Card className="w-1/2">
          <CardBody className="flex flex-col text-center items-center">
            <img className="w-32 h-32 mb-4 mt-4" src={require('../assets/img/bnb.png')} />
            <p className="mt-4 font-semibold text-gray-600 dark:text-gray-300 text-3xl text-center">Total BNB Paid To TIKI Holders</p><br/>
            <p className="text-green-400 dark:text-green-400 text-6xl text-center mb-8">{numberWithCommas(totalPaid)} <span className="text-yellow-300">BNB</span><br/> = ${numberWithCommas((bnbPrice*totalPaid).toFixed(0))}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}


export default Dashboard
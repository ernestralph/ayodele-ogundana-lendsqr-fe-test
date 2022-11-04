import React from 'react'
import {TbCurrencyNaira} from 'react-icons/tb'

interface Props {
  edu: {
    sector?: string;
    officeEmail?: string;
    duration?: string;
    monthlyIncome?: [];
    employmentStatus?: string;
    level?: string;
    loanRepayment?: string;
  }
}

const Index: React.FC<Props> = ({edu}) => {
  // const [a] =[edu.monthlyIncome];
  // console.log(edu);
  
  return (
    <>
      <div className="row align-item-end  text-capitalize border-bottom py-3">
        <h6 className='color__primary mb-4'>education and employment</h6>
        <div className="col-md-3">
          <h6 className='info-title'>level of education</h6>
          <h6 className='color__primary'>{edu.level}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>employment status</h6>
          <h6 className='color__primary'>{edu.employmentStatus}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>sector of employment</h6>
          <h6 className='color__primary'>{edu.sector}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>duration of employment</h6>
          <h6 className='color__primary'>{edu.duration}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title '>office email</h6>
          <h6 className='color__primary text-lowercase'>{edu.officeEmail}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>monthly income</h6>
          <h6 className='color__primary'><TbCurrencyNaira />200000 - <TbCurrencyNaira />400000</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>loan payment</h6>
          <h6 className='color__primary'>40000</h6>
        </div>
      </div>
    </>
  )
}

export default Index
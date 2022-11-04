import React from 'react'
// import {TbCurrencyNaira} from 'react-icons/tb'

interface Props {
  data: {
    twitter?: string; 
    facebook?: string;
    instagram?: string;
  }
}

const Index: React.FC<Props> = ({data}) => {
  return (
    <>
      <div className="row align-item-end  text-capitalize border-bottom pt-3 pb-3">
        <h6 className='color__primary mb-4'>socials</h6>
        <div className="col-md-3">
          <h6 className='info-title'>twitter</h6>
          <h6 className='color__primary text-lowercase'>{data.twitter}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>facebook</h6>
          <h6 className='color__primary'>{data.facebook}</h6>
        </div>
        <div className="col-md-3">
          <h6 className='info-title'>instagram</h6>
          <h6 className='color__primary text-lowercase'>{data.instagram}</h6>
        </div>
      </div>
    </>
  )
}

export default Index
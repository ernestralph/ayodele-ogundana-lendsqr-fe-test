import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {TbCurrencyNaira} from 'react-icons/tb'


interface Props {
  data: {
    firstName?:string
    lastName?:string
    avatar?:string
  },

  account: string,
}
const Index: React.FC<Props> = ({data, account}) => {
  // console.log(data);
  
  return (
    <>
      <div className="summary__card w-100">
        <div className="row p-4">
          <div className="col-3 border-end">
            <div className="d-flex">
              {data?.avatar?.length ?
                <img src={data.avatar} className="default_img" alt="" />
                :
                <div className="default_icon me-1">
                  <AiOutlineUser className='summary__usericon' />
                </div>

              }
              <div className='p-2'>
                <h5 className='color__primary'>{data.firstName} {data.lastName}</h5>
                <p className='color__primary'>{account}</p>
              </div>
            </div>
          </div>
          <div className="col-2 border-end text-center pt-2">
            <h6 className='color__primary'>User's Teir</h6>
            <div className="user__rating">
              <AiOutlineStar className='rate' />
              <AiOutlineStar className='' />
              <AiOutlineStar className='' />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex">
              {/* <img src="" alt="" /> */}
              <div className='p-2'>
                <h5 className='color__primary'><TbCurrencyNaira />2000000</h5>
                <p className='color__primary'>9912345678/Providus Bank</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-item-end pd-4  text-capitalize">
          <div className="col-2 active__tab text-center fs-13">general details</div>
          <div className="col-2 text-center fs-13">document</div>
          <div className="col-2 text-center fs-13">bank details</div>
          <div className="col-2 text-center fs-13">loan</div>
          <div className="col-2 text-center fs-13">savings</div>
          <div className="col-2 text-center fs-13">app and systems</div>
        </div>
      </div>
    </>
  )
}

export default Index
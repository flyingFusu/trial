import Mock from 'mockjs'

const Random = Mock.Random

export const InitAct = req => {
  const data = {
    IsJoin: 1,
    sk: '1111',
    BeginDate: '2021-03-01',
    EndDate: '2021-03-31',
    Tyj_Amount: 10000.3,
    Remain_Amount: 8000,
    Ystd_Profit: 0.3,
    Total_Profit: 0.3,
    Profit_Rate: 0.02,
    Caizhi_NewUser: 0,
    Season_Rank: 0,
    Caizhi_Rank: Random(),
    Funds: [
      {
        id: 2,
        fund_name: '银华医疗健康A',
        fund_code: '005237',
        fund_amount: 2000,
        addtime: '2021-03-25 15:29',
        buy_days: 1,
        ystd_profit: 0.3,
        total_profit: 0.3
      }

    ]
  }

  return Promise.resolve({ data: data })
}

export const Join = req => {
  const data = { succ: true, flag: 1 }

  return Promise.resolve({ data: data })
}

export const InitTrade = req => {
  const data = {
    Remain_Amount: 8000,
    Available_Share: 100,
    ShowTimePoint: 0,
    Buy_Date: '3月29日',
    Buy_Week: '星期一',
    Confirm_Date: '3月30日',
    Confirm_Week: '星期二',
    Profit_Date: '3月31日',
    Profit_Week: '星期三'
  }

  return Promise.resolve({ data: data })
}

export const Buy = req => {
  const data = { succ: true, flag: 1 }

  return Promise.resolve({ data: data })
}
export const Redeem = req => {
  const data = { succ: true, flag: 1 }

  return Promise.resolve({ data: data })
}
export const InitTask = req => {
  const data = {
    IsSignIn: 0,
    InviteCon: 0
  }

  return Promise.resolve({ data: data })
}

export const SignIn = req => {
  const data = { succ: true, flag: 1 }
  return Promise.resolve({ data: data })
}
export const GetMyFriends = req => {
  const data = {
    InviteCon: 1,
    Amount: 1.8,
    QrcodeUrl: '/TYJ_Site/download/tiyanjin/2021032515093760946316045.jpg',
    Friends: [
      {
        avatar: '',
        phone: '150****1006'
      }
    ]
  }

  return Promise.resolve({ data: data })
}

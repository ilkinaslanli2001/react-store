
export const AddOrder = (maxCount,orderCount,func)=>{
    if(orderCount<maxCount)
    {
       func(orderCount+1)
    }
}
export const MinusOrder = (maxCount,orderCount,func)=>{
    if(orderCount>0)
    {
        func(orderCount-1)
    }
}

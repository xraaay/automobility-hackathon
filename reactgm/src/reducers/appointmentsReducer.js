const appointmentState = [
    {
        id:0
        ,appointmentTime: new Date('2018-11-27T10:00:00')
        ,shopName:'GM Dealership 0'
        ,address: '777 S Alameda St, Los Angeles, CA 90021'
        ,default: true
    },
    {
        id:1
        ,appointmentTime: new Date('2018-11-28T08:00:00')
        ,shopName:'GM Dealership 1'
        ,address: '777 S Alameda St, Los Angeles, CA 90021'
        ,default: true
    },
    {
        id:2
        ,appointmentTime: new Date('2018-11-29T02:00:00')
        ,shopName:'GM Dealership 2'
        ,address: '777 S Alameda St, Los Angeles, CA 90021'
        ,default: true
    },
    {
        id:3
        ,appointmentTime: new Date('2018-11-30T04:00:00')
        ,shopName:'GM Dealership 3'
        ,address: '777 S Alameda St, Los Angeles, CA 90021'
        ,default: true
    }
]

const reducer = (state = appointmentState, action) => {
    switch(action.type){

        default:
            return state;
    }
}

export default reducer;
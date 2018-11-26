const initialState = {
        appointmentTimes: [
            new Date('2018-11-27T08:00:00')
            ,new Date('2018-11-27T09:00:00')
            ,new Date('2018-11-27T10:00:00')
            ,new Date('2018-11-27T11:00:00')
            ,new Date('2018-11-27T12:00:00')
            ,new Date('2018-11-27T13:00:00')
            ,new Date('2018-11-27T14:00:00')
            ,new Date('2018-11-27T15:00:00')
            ,new Date('2018-11-27T16:00:00')
        ],
        shops:[
            {
                name:'GM Dealership 0'
                ,address: '777 S Alameda St, Los Angeles, CA 90021'
                ,distance: '1.3'
            },
            {
                name:'GM Dealership 1'
                ,address: '123 S Fake St, Los Angeles, CA 90021'
                ,distance: '0.6'
            },
            {
                name:'GM Dealership 2'
                ,address: '1029 N Figuroa St, Los Angeles, CA 90021'
                ,distance: '2.3'
            },
            {
                name:'GM Dealership 3'
                ,address: '234 Main Ave, Alhambra, CA 90237'
                ,distance: '0.2'
            }
        ]
    }

const reducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;
    }
}

export default reducer;
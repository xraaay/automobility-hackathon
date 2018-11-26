const appointmentsReducer = {
        appointmentTimes: [
            new Date('2018-11-27 08:00')
            ,new Date('2018-11-27 09:00')
            ,new Date('2018-11-27 10:00')
            ,new Date('2018-11-27 11:00')
            ,new Date('2018-11-27 12:00')
            ,new Date('2018-11-27 1:00')
            ,new Date('2018-11-27 2:00')
            ,new Date('2018-11-27 3:00')
            ,new Date('2018-11-27 4:00')
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
        ],
        vehicalData:[
            {
                vin: "1GKS1BKC5FR564261"
                ,aaia: "12110"
                ,make: "GMC"
                ,year: 2015
                ,model: "YUKON"
                ,engine: "5.3L V8 16 Valve Flex-fuel (FFV) L83"
                ,engineType: "5.3L V8 16 Valve Flex-fuel (FFV) L83"
                ,recall:{
                    number:"14V374000"
                    ,startDate:'06/27/2014'
                    ,reason:"an electrical signal short may cause the transfer case to shift to neutral without the driver's input"
                    ,consequence:"If the transfer case switches to neutral while the vehicle is parked and the parking brake is not in use, the vehicle may roll away increasing the risk of injury to bystanders."
                }
            }
            // {
            //     vin: "1FTRW08L83KA45962"
            //     ,aaia: "12112"
            //     ,make: "BMW"
            //     ,year: 2017
            //     ,model: "M3"
            //     ,engine: "V6, 3.0L; V6"
            //     ,engineType: "V6, 3.0L; V6"
            //     ,recall:{
            //         number:"14V374000"
            //         ,startDate:'06/27/2014'
            //         ,reason:"an electrical signal short may cause the transfer case to shift to neutral without the driver's input"
            //         ,consequence:"If the transfer case switches to neutral while the vehicle is parked and the parking brake is not in use, the vehicle may roll away increasing the risk of injury to bystanders."
            //     }
            // },
            // {
            //     vin: "1GC2KVEG6FZ106009"
            //     ,aaia: "12113"
            //     ,make: "CHEVY"
            //     ,year: 2015
            //     ,model: "SILVERADO"
            //     ,engine: "6.0 Engine FFV (L96)"
            //     ,engineType: "6.0L 8cyl 6A"
            //     ,recall:{
            //         number:"16V209000"
            //         ,startDate:'07/23/2014'
            //         ,reason:"Due to an incomplete weld on the seat hook bracket assembly, the front seats in the affected vehicles may not stay secured in place during a high load condition such as a crash."
            //         ,consequence:"A seat that does not stay secured increases the risk of occupant injury in a vehicle crash."
            //     }
            // },
            // {
            //     vin: "1FTRW08L83KA45964"
            //     ,aaia: "12114"
            //     ,make: "CHRYSLER"
            //     ,year: 2018
            //     ,model: "300"
            //     ,engine: "V6, 3.6L; 6V"
            //     ,engineType: "V6, 3.6L; 6V"
            //     ,recall:{
            //         number:"14V374000"
            //         ,startDate:'06/27/2014'
            //         ,reason:"an electrical signal short may cause the transfer case to shift to neutral without the driver's input"
            //         ,consequence:"If the transfer case switches to neutral while the vehicle is parked and the parking brake is not in use, the vehicle may roll away increasing the risk of injury to bystanders."
            //     }
            // }
        ],
        users:[
            {
              firstName:'Soo'
              ,lastName:'Chu'
              ,email:'soochu@gmail.com'
              ,phone:'626-555-1234'
              
            },
            {
              firstName:'Aki'
              ,lastName:'Imai'
              ,email:'aki@gmail.com'
              ,phone:'626-555-0909'
              
            },
            {
              firstName:'Kevin'
              ,lastName:'Luang-orn'
              ,email:'soochu@gmail.com'
              ,phone:'626-555-1212'
              
            },
            {
              firstName:'Raymond'
              ,lastName:'Xie'
              ,email:'raymond@gmail.com'
              ,phone:'626-555-3232'
              
            }
        ]
    }

const reducer = (state = appointmentsReducer, action) => {
    switch(action.type){

        default:
            return state;
    }
}

export default reducer;
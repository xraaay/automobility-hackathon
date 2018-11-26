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
                vin: "1FTRW08L83KA45961"
                ,aaia: "12110"
                ,make: "FORD"
                ,year: 2003
                ,model: "F150"
                ,engine: "V8, 5.4L; SOHC; 16V"
                ,engineType: "V8, 5.4L; SOHC; 16V"
            },
            {
                vin: "1FTRW08L83KA45962"
                ,aaia: "12112"
                ,make: "BMW"
                ,year: 2017
                ,model: "M3"
                ,engine: "V6, 3.0L; V6"
                ,engineType: "V6, 3.0L; V6"
            },
            {
                vin: "1FTRW08L83KA45963"
                ,aaia: "12113"
                ,make: "CHEVY"
                ,year: 2016
                ,model: "SILVERADO"
                ,engine: "V8, 5.4L; 16V"
                ,engineType: "V8, 5.4L; 16V"
            },
            {
                vin: "1FTRW08L83KA45964"
                ,aaia: "12114"
                ,make: "CHRYSLER"
                ,year: 2018
                ,model: "300"
                ,engine: "V6, 3.6L; 6V"
                ,engineType: "V6, 3.6L; 6V"
            }
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
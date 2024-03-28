import {Person} from "./Person"

class Driver extends Person{

    constructor(){
        super(faker.name.firstName(), {
            lat: faker.address.latitude(),
            lng: faker.address.longitude()
          });
    }
    
}
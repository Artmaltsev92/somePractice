const menu = {
    _courses: {
      appetizers: [],
      mains:[],
      desserts: []
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
      },
    
//Appetizers
    get appetizers() {
      return this._courses.appetizers;
    },

    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
//mains
    get mains() {
        return this._courses.mains;
        },
    

    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },

//desserts
    get desserts() {
        return this._courses.desserts;
    },

    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },

//Functions
    //Add new dish to course
    addDishToCourse (courseName, name, price) {
        const dish = {
            name: name,
            price: price
        }
        switch (courseName) {
            case 'Appetizers':
                this._courses.appetizers.push(dish);
                break;
            case 'Mains':
                this._courses.mains.push(dish);
                break;
            case 'Desserts':
                this._courses.desserts.push(dish);
                break;
            default:
                'Please, choose correct course'
            
        }
    },

    //Generate random dish from Course

    getRandomDishFromCourse (courseName) {
        let randomIndex=0
        switch (courseName) {
            case 'Appetizers':
                randomIndex=Math.floor(Math.random()*this._courses.appetizers.length);
                return this._courses.appetizers[randomIndex]
                break;
            case 'Mains':
                randomIndex=Math.floor(Math.random()*this._courses.mains.length);
                return this._courses.mains[randomIndex]
                break;
            case 'Desserts':
                randomIndex=Math.floor(Math.random()*this._courses.desserts.length);
                return this._courses.desserts[randomIndex]
                break;
            default:
                'Please, choose correct course'
            
        }
    },

    //Generate Random Meal
    generateRandomMeal() {
        const appetizer=this.getRandomDishFromCourse('Appetizers')
        const mains=this.getRandomDishFromCourse('Mains')
        const desserts=this.getRandomDishFromCourse('Desserts')
        const totalPrice = appetizer.price + mains.price + desserts.price
        return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}$.`;

    }

  }
  
  menu.addDishToCourse('Appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('Appetizers', 'Olive Salad', 3.25);
  menu.addDishToCourse('Appetizers', 'Green Salad', 2.75);
  menu.addDishToCourse('Appetizers', 'Energy Salad', 3.5);
  
  menu.addDishToCourse('Mains', 'Burger', 7.25);
  menu.addDishToCourse('Mains', 'CheesBurger', 8);
  menu.addDishToCourse('Mains', 'Rybay Stake', 12.25);
  menu.addDishToCourse('Mains', 'Chicken fried', 8.25);

  menu.addDishToCourse('Desserts', 'Cheescake', 5.25);
  menu.addDishToCourse('Desserts', 'Fondan', 4.25);
  menu.addDishToCourse('Desserts', 'Macaroon', 3.25);
  menu.addDishToCourse('Desserts', 'Panakota', 2.25);


  meal=menu.generateRandomMeal()
  console.log(meal)
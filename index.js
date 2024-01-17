// // // title = "mernstack";
// // // durationTime = 4;

// // // marriesStatus = false;

// // // console.log(title, durationTime, marriesStatus);

// // // firstName = "soni";
// // // lastName = "sherpa";
// // // fullName = firstName + lastName;
// // // console.log(fullName);

// // // num1 = 200;
// // // num2 = 300;
// // // sum = num1 + num2;
// // // console.log(sum);
// // // console.log("sum of " + num1 + " and" + num2 + "is" + sum);


// // // let name = "soni"
// // // let times = 5

// // // if ( times > 3) {
// // //     let name = "soni sherpa"
// // //     console.log(name)
// // // }
// // // console.log(name)


// // // const greet ={
// // //     message:"hello",
// // //     times:4
// // // }
// // // greet.message="bye"

// // // console.log(greet)


// // var nAme = "man"
// // var tImes = 4

// // if (tImes >3) {
// //     var nAme ="girl"
// //     // console.log(nAme)
    
// // }
// // console.log(nAme)

// // // let name ="soni"
// // // let name =" sherpa"

// // console.log(name)


// // num1=100
// // num2=200
// // sum = num1 +num2

// // console.log("sum of" +num1+ "and " +num2+ "is" +sum)


// // firstname= "soni"
// // lastname = "sherpa"
// // fullname = firstname + lastname;

// // console.log(`hello my name is ${firstname}`)


// let name;
// name="soni";
// name="moni";


// console.log(name)

// let length = 100

// console.log("length",length)

// let products = ["watch","mksjsd","jhdjd"];

// console.log(products)

// let colors =["white","blaack","greeen"]


// console.log(colors)
// colors =["blue","greeeb","red"]
// console.log(colors)
// // console.log(colors[0])


// let code ="xyz"
// console.log("before-code",code)
// code="abc"
// console.log("after-code",code)

// let fruits =["apple","banana","kiwi"]

// console.log(fruits)

// let even =[1,2,3,4,5]

// console.log(even)

// let odds = [1,2,3,"seven",8]
// console.log(odds)
// odds [3] = 7
// console.log(odds)

// let evens=[2,3,"one",4]
// console.log(evens)
// evens[2]=1
// console.log(evens)


// let courses =["mern","qa","ui"]
// console.log("courses", courses)
// courses[0]= "mernstack"
// console.log("courses2", courses)
// courses[3]="ui/ux"
// console.log("courses3", courses)

// let dress ={
//     color:"blue",
//     price:300,
//     size:"xl"
// }


// console.log(dress)

// let course ={
//     duration:3,
//     starttime: 4,
//     endtime:5,
//     status:"true"
// }
// // course.duration=5

// console.log(course)


// let ourCourse = {
//     title:"mern",
//     duration:"3 months",
//     Duration:"6 months",
//     startTime:4,
//     endTime:5,
//     endTime:6,
// }

// console.log(ourCourse);
// ourCourse.title="mern-stack"
// console.log(ourCourse);


//      let color={
//         name:"red",
//         hexvalue:"#FF000",
//         rgbValue:"rgb(255,0,0)"

//     } 


//     console.log(color)

//     let mywatch ={
//         modelNumber:300,
//         brand:"apple",
//         type:"digital",
//         price:900
//     }
//     mywatch.price=1000

    
//     console.log(mywatch)

//     let number=[1,2,3,"four",5]

//     console.log(number)
//     number[3]= 4
//      console.log(number)


//      let user1 ={
//         name:"soni",
//         address:{

//             permanentAddress:{
//                 province:1,
//                 district:"jhapa",
//                 street:"xyz"
//             },
//             temporaryAddress:{
//                 province:3,
//                 district:"kathmandu",
//                 street:"putalisadqak"
//             },
//         }
      
//      }

//      console.log("ram is from",(user1.address.permanentAddress.district))
//      console.log("ram is from",(user1.address.temporaryAddress.district))
  

//     //  console.log(`ram is from ${user1.permanentAddress.district}`)

//     //  console.log(`ram is from ${user1.temporaryAddress.district}`)

//     //  console.log(user1.name,"is from",user1.permanentAddress.district)



//      let user2 ={
//         name:"ram",
//         class:12
//      };
//      let user3 ={
//         name:"soni",
//         class:12
//      }
//      let users=[user2,user3]

//      console.log(users)

 

//      let name1={
//         firstname:"soni",
//         lastname:"sherpa"
//      };
//      let name2={
//         firstname:"rami",
//         lastname:"bk"
//      }

//      let names=[name1,name2]

//      console.log(names)

// array ko vitra object
let course=["mern","qa","python"]
course =[
    {
        tittle:"mern",
        teacher:"abc",
        time:12,
        syllabus:[
            {
                topic:"js",
                duration:9
            },
            

        ]
    },
    {
        tittle:"qa",
        teacher:"abe",
        time:22,
        syllabus:[
            {
                topic:"qa",
                duration:9
            },
            

        ]
    },
    {
        tittle:"python",
        teacher:"ab",
        time:12,
        syllabus:[
            {
                topic:"dyango",
                duration:9
            },
            

        ]
    }

]

course[0].syllabus[0].topic="javascript"
course[0].syllabus[0].duration=90
course[1].syllabus[0].topic="javascript"

console.log(course)

let users=["ram","sam"]
users =[
    {
        name:"ram",
        address:"chowk",
       contacts:[
           {
            number:9232020,
            provider:"ncell"
           },
           {
            number:"one",
            provider:"ntc"
           },



       ]
       
    },

    {
        name:"soni",
        address:"labin",
        
    },
]

users[0].contacts[0].number=73743974
users[0].contacts[1].provider="ntc"
users[0].contacts[1].number=984042


console.log(users)

let apiResponse ={
    data:{
        total:2,
        results:{
            data:users,

        }
    }
}
apiResponse.data.results.data[0].contacts[1].number=920209320390
console.log(apiResponse)




let classes =["one","two","three"]
classes= [
    {
        class:"one",
        sections:[
            {
                sec:"A",
                noofStudent:20,
                teacher:"ram"
                
             },
             {
                sec:"b",
                noofStudent:90,
                teacher:"syam"
                
             },
                
        ]
        
    },
    {
        class:"two",
        sections:[
            {
                sec:"A",
                noofStudent:28,
                teacher:"rami"
                
             },
             {
                sec:"b",
                noofStudent:20,
                teacher:"syam"
                
             },
                
        ]
        
    },
    {
        class:"three",
        sections:[
            {
                sec:"A",
                noofStudent:20,
                teacher:"soni"
                
             },
             {
                sec:"b",
                noofStudent:90,
                teacher:"moni"
                
             },
                
        ]
    }


]
     
classes[0].sections[0].sec="BA"
classes[1].sections[0].sec="sjdhwdjh"
console.log(classes)

let todos =[
    {
        title:"variable",
        status:"completed",
        createAt:"2024-1-3"
    },
    {
        title:"array",
        status:"completed",
        createAt:"2024-1-9"
    },
    {
        title:"object",
        status:"completed",
        createAt:"2024-1-10"
    },
    {
        title:"function",
        status:"pending",
        createAt:"2024-1-12"
    },

      

    
]

console.log(todos)

console.log(`${todos[0].title} is ${todos[0].status}`)
console.log(`${todos[1].title} is ${todos[1].status}`)
console.log(`${todos[2].title} is ${todos[2].status}`)
console.log(`${todos[3].title} is ${todos[3].status}`)

console.log(`${todos[0].title} is ${todos[0].status} at ${todos[0].createAt}`)

console.log(`${todos[1].title} is ${todos[1].status} at ${todos[1].createAt}`)

console.log(`${todos[2].title} is ${todos[2].status} at ${todos[2].createAt}`)

console.log(`${todos[3].title} is ${todos[3].status} at ${todos[3].createAt}`)



let courses =["math","eng","nep"]
courses = [
    {
  Name:"math",
  classes:[
    {
        class:1,
        teacher:"soni"
        
    },
    {
        class:2,
        teacher:"moni"
    },
    {
        class:3,
        teacher:"ram"
  
    }
      
   
  ]
  
}
]
console.log(courses)
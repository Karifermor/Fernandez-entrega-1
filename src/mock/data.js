

// export const prodList =[
  //{
  //   category: 'knitwear',
  //   title:"EVA SWEATER",
  //   stock: 5,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-1.jpg',
  //   skill: 'intermediate'
  // },
  // {
  //   category: 'pattern',      
  //   title:"GUACAMOLE VEST",
  //   stock: 5,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-2.JPG',
  //   skill: 'beginner'
  // }, 
  // {
  //   category: 'knitwear',
  //   title:"MUSTARD VEST",
  //   stock: 9,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-3.jpg',
  //   skill: 'intermediate'
  // },
  // {
  //   category: 'pattern',      
  //   title:"SUGAR SWEATER",
  //   stock: 8,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-4.JPG',
  //   skill: 'beginner'
  // },
  // {
  //   category: 'pattern',      
  //   title:"VIENA VEST",
  //   stock: 8,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-5.JPG',
  //   skill: 'beginner'
  // },
  // {
  //   category: 'pattern',      
  //   title:"MUSGO SWEATER",
  //   stock: 8,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-6.JPG',
  //   skill: 'beginner'
  // },
  // {
  //   category: 'pattern',      
  //   title:"TUCCI SWEATER",
  //   stock: 8,
  //   price: 5.99,
  //   description:"PDF Knitting Pattern",
  //   image:'../images/img-7.JPG',
  //   skill: 'beginner'
  // }
// ]


// export const getProducts = () => {
//   return new Promise ((resolve, reject) =>{
//       let error = false
//           setTimeout(()=>{
//               if(error){
//                   reject('error')
//               }else {
//                   resolve(prodList)

//               }
//       }, 2000)
//   })
// }


// export const getItem = (id) => {
//   return new Promise((resolve)=> {
//       setTimeout(()=>{
//           resolve(prodList.find((item)=>item.id === id))
//       },2000)
//   })
// }
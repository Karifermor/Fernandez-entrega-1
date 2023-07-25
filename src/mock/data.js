
// aca no manejamos componentes sino solo las funciones que me traigan la promesa



const prodList =[
  {
    id:'01',  
    category: 'test',
    title:"EVA SWEATER",
    stock: 5,
    price: 5.99,
    description:"PDF Knitting Pattern",
    image:'../images/img-1.JPG',
    skill: 'beginner'
  },
  {
    id: '02',
    category: 'knitwear',
    title:"GUACAMOLE VEST",
    stock: 7,
    price: 5.99,
    description:"PDF Knitting Pattern",
    image:'../images/img-2.JPG',
    skill: 'advanced'
  },
  {
    id: '03',
    category: 'knitwear',
    title:"MUSTARD VEST",
    stock: 9,
    price: 5.99,
    description:"PDF Knitting Pattern",
    image:'../images/img-3.jpg',
    skill: 'intermediate'
  },
  {
    id: '04',
    category: 'pattern',      
    title:"SUGAR SWEATER",
    stock: 8,
    price: 5.99,
    description:"PDF Knitting Pattern",
    image:'../images/img-4.JPG',
    skill: 'beginner'
  }
]


export const getProducts = () => {
  return new Promise ((resolve, reject) =>{
      let error = false
          setTimeout(()=>{
              if(error){
                  reject('error')
              }else {
                  resolve(prodList)

              }
      }, 2000)
  })
}


export const getItem = (id) => {
  return new Promise((resolve)=> {
      setTimeout(()=>{
          resolve(prodList.find((item)=>item.id === id))
      },2000)
  })
}
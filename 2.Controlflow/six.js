// const myArr =["js","rb","c","c++"]

// const values = myArr.forEach( (item)=>{
//    console.log(item);
//     return
// }  )

// console.log(values);


const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter(  (num) =>{
//    return  num >4
// } )

// const newNums = []

// myNums.forEach( (num)=>{
//     if (num >4) {
//         newNums.push(num)
//     }
// })




// console.log(newNums);








const books =[
    {title: 'Book1', genre: 'fiction', publish: 1981, edition: 2004},
    {title: 'Book2', genre: 'mystery', publish: 1995, edition: 2007},
    {title: 'Book3', genre: 'fantasy', publish: 2000, edition: 2010},
    {title: 'Book4', genre: 'romance', publish: 1988, edition: 2015},
    {title: 'Book5', genre: 'adventure', publish: 1992, edition: 2006},
    {title: 'Book6', genre: 'historical fiction', publish: 1978, edition: 2002},
    {title: 'Book7', genre: 'science fiction', publish: 1983, edition: 2009},
    {title: 'Book8', genre: 'thriller', publish: 1999, edition: 2012},
    {title: 'Book9', genre: 'horror', publish: 2004, edition: 2016},
    {title: 'Book10', genre: 'drama', publish: 1991, edition: 2014},
    {title: 'Book11', genre: 'fantasy', publish: 1986, edition: 2003},
    {title: 'Book12', genre: 'crime', publish: 1994, edition: 2011},
    {title: 'Book13', genre: 'science fiction', publish: 1989, edition: 2008},
    {title: 'Book14', genre: 'anthology', publish: 2001, edition: 2013},
    {title: 'Book15', genre: 'romance', publish: 1984, edition: 2005},
    {title: 'Book16', genre: 'children\'s literature', publish: 1976, edition: 2000},
    {title: 'Book17', genre: 'historical fiction', publish: 1998, edition: 2018}
  ]
  

  const userBooks = books.filter( (bk) => bk.genre==='romance')

  const user1Books = books.filter( (bk) => {bk.publish>= 1995 && bk.title==='book2' }  )


  console.log(user1Books);
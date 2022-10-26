import React ,{useState}from "react";

const AppContext = React.createContext();

export const AppProvider =({children})=>{

const[MovieData,setMovieData] =useState([
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'SuperMan Movie',
        url: 'https://assets.mubicdn.net/images/film/140213/image-w1280.jpg?1466416762',
        decription : "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        saved : false,
        year:"2020",
        time:"183",
        category:'Action',
        like:false
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Batman Movie',
        url: 'https://mvcdn.fancaps.net/3064626.jpg',
        decription : "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        saved : false,
        year:"2011",
        time:"378",
        category:'Action',
        like:false
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Tom&Jerr Movie',
        url: 'https://s1.dmcdn.net/v/MquMm1QYExwVWLKQ7/x1080',
        decription : "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        saved : false,
        year:"2013",
        time:"156",
        category:'Action',
        like:false
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455',
        title: 'Disny Movie',
        url: 'https://image.tmdb.org/t/p/w250_and_h141_face/ieUmxK8dqWUcEFs0TNJrA0o8hJu.jpg',
        decription : "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        saved : true,
        year:"2018",
        time:"238",
        category:'Action',
        like:false
      },
      {
        id: '58694a0f-3da1-471f-bd96-72',
        title: 'Cat Movie',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBtR5hikDS-8n2UkwY0dCrq0q095NTyRdwSC_bDxKBLEZM9zDP4D8kqcfvwfAljkVuSY&usqp=CAU',
        decription : "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        saved : true,
        year:"2022",
        time:"148",
        category:'Action',
        like:false
      },
      {
        id: 'e344555',
        title: 'Sendrella Movie',
        url: 'https://upload.wikimedia.org/wikipedia/en/5/58/Tom_and_Jerry%27s_Giant_Adventure.jpg',
        decription : "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        saved : true,
        year:"2015",
        time:"113",
        category:'Cartoon',
        like:false
      },
]);

const toggleLike =(id)=>{
    let tempArr = [...MovieData];  
    let index = tempArr.findIndex(el => el.id == id);
    tempArr[index].like = !tempArr[index].like; 
    setMovieData(tempArr)                 
    console.log(tempArr);
 }; 

  const handleSav = id => {
  let tempArr = [...MovieData];
  let index = tempArr.findIndex(el => el.id == id);
  tempArr[index].saved = !tempArr[index].saved;
  setMovieData(tempArr);
  console.log(tempArr);
};
//
  const deleteFromFav =(item)=>{
  let tempArr = [...MovieData];
  let index = tempArr.findIndex(el => el.id == item.id);
  tempArr[index].saved = !tempArr[index].saved;
  setMovieData(tempArr);
  console.log(tempArr);
}

 return(
    <AppContext.Provider value={{MovieData,setMovieData,toggleLike,handleSav,deleteFromFav}} >
    {children}
    </AppContext.Provider>
  )

}



export default AppContext;
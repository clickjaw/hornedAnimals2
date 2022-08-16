import "./Search.css"


function Search(){

    let searchResults = (event) => {
        console.log(event.target.value);

        let selectedNum = event.target.value;

        let updatedNum;
        

    }


return(

    <input type = "text" id = "searchBox" onChange = {searchResults} placeholder = "Search"></input>

)





}


export default Search
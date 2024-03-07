import React , {useEffect , useState} from 'react'

const FetchData = () => {
    const [userData , setUserData] = useState([]);
    const fetchDataFromServer = async() => {
        try {
            const response = await fetch("http://localhost:5000/getAllRecords");
            const data = await response.json();
            console.log(data);
            if(data && data.length > 0){
                setUserData(data);
            }

        } catch (error) {
            console.log(error.message);
        }
    }



useEffect(() => {
    fetchDataFromServer();
},[])

  return (
    <div>
      fetch
    </div>
  )
}

export default FetchData;

import {useQuery ,gql} from '@apollo/client'


const GET_QUERY = gql`
query GEt_charactor($id:ID!){
    character(id:$id){
        
          id,
          image,
          species,
          gender,
          name
        
    }
  }`;
  export const useCharacter = (id)=>{
    const {error,loading,data} =useQuery(GET_QUERY,{
      variables:{
        id
      },
    })
    return({
        error,loading,
        data
    })
  }

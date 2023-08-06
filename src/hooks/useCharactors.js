import {useQuery ,gql} from '@apollo/client'


const GET_QUERY = gql`query {
    characters{
        results{
          id,
          image,
          species,
          gender,
          name
        }
    }
  }`

export const useCharacters =()=>{
    const {error ,data ,loading} =useQuery(GET_QUERY)
    return ({
        error,
        data,
        loading
    })
}
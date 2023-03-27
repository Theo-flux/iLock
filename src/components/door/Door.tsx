import { useParams } from "react-router-dom"
import { Wrapper } from "../../shared"
import NavCommon from "../common/NavCommon"

function Door() {
  const params = useParams();

  console.log(params)

  return (
    <Wrapper>
        <NavCommon text={`${params?.door}`}/>
    </Wrapper>
  )
}

export default Door
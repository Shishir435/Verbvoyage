import Link from "next/link"


import  Provider  from '@components/Provider';
import { useSession } from "next-auth/react";

const CreatePencil = () => {

  const {data: session} = useSession();
  return (
      
        <div>
          <Provider>
          {
        session?.user ? (<div  className="create-pencil">         
                     <Link href='/create-verb'><img width="64" height="64" src="https://img.icons8.com/arcade/64/pencil.png" alt="pencil"/></Link>
        </div> ): (<div>login</div>)}
        </Provider>
        </div>
  )
}
export default CreatePencil
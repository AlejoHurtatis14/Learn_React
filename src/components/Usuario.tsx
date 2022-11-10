import { useState } from "react";

interface User {
  id: string,
  name: string
}

export const Usuario = () => {

  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      id: '123Abc',
      name: 'Alejandro Hurtatis'
    })
  };

  return (
    <div className="mt-5">
      <h3>Usuario: { user?.name }</h3>

      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>

      {
        !user 
          ? <pre>No hay usuario</pre>
          : <pre>{ JSON.stringify(user) }</pre>
      }
    </div>
  )
}
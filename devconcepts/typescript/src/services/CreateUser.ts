interface TechObject {
  title: string;
  experience: number;
}

interface CreateUser {
  name: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
} 

export default function createUser({name, email, password}: CreateUser) {
  const user = {  
    name,
    email,
    password
  };

  return user;
}
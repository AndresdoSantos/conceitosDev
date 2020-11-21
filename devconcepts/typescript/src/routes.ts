import {Request, Response} from 'express';

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Andres', 
    email: 'andres@amaral.com', 
    password: '123',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native', 
      { title: 'JavaScript', experience: 100},
      { title: 'TypeScript', experience: 50}
    ],
  });

  return response.json({ msg: 'Hello World' });
};
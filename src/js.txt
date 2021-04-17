
# js snippets

Javascript, SCSS, Reactjs, Typescript + Reactjs, Nodejs snippets 


## Usage

keywords



**Enjoy!**
Keywords for easy working
```
        


fn =>  function $1($2) {
           $0
       };


fne =>  function $1(e) {
            $0
        };


cf =>  const $1 = ($2) => {
           $0
       };


cfe =>  const $1 = e => {
            $0
        };


cfl =>  const $1 = ($2) => $0;


cfle =>  const $1 = e => $0;


lineCallback =>  ($1)=> $0


lineCallbackE =>  e=> $0


callback =>  ($1)=> {
                 $0
             }


callbackE =>  e=> {
                  $0
              }


tr =>  try {
           $0
       } catch(err) {
           console.log(err);
       }


r =>  return $0;


ter =>  $1 ? $2: $0


sfcc =>  String.fromCharCode($0)


jsonstr =>  JSON.stringify($0, null, 2)


jsonparse =>  JSON.parse($0)


k =>  ...$0


gImport =>  import {
                GraphQLInt as gInt,
                GraphQLString as gString,
                GraphQLID as gID,
                GraphQLBoolean as gBoolean,
                GraphQLSchema as gSchema,
                GraphQLObjectType as gObjectType,
                GraphQLList as gList
            } from "graphql";


gObjectType =>  const $1 = new gObjectType({
                    name:'$2',
                    fields:()=>({
                        id:{type:gID},
                        $0
                    })
                });


gQuery =>  const query = new gObjectType({
               name:'Query',
               fields:()=>({
                   $1:{
                       type:$3,
                       // args:{$2},
                       async resolve(parents,args){
                           return $0
                       }
                   }
               })
           });


gSchema =>  export const schema = new gSchema({
                query,
                mutation,
            });


gType =>  { type: g$0 },


gRequest =>  export const gRequest =async (query:string):Promise<any> => {
                 return await request('http://localhost:$0/graphql', query);
             };


gquery =>  const query = `
               query {
                   $0
               }
           `;
           const data = await gRequest(query);
           return data;


img =>  import { gql, request } from 'graphql-request';


rq =>  require('$0')


req =>  const $0 = require('$0');


fsreq =>  const fs = require('fs');


pathreq =>  const path = require('path');


expressreq =>  const express = require('express');


morganreq =>  const morgan = require('morgan');


rimrafreq =>  const rimraf = require('rimraf');


removereq =>  const remove = require('remove');


mongoosereq =>  const mongoose = require('mongoose');


appexpress =>  const app = express();


dotenv =>  require('dotenv').config();


bcryptreq =>  const bcrypt = require('bcrypt');


jsonwebtokenreq =>  const jwt = require('jsonwebtoken');


axiosreq =>  const axios = require('axios');


asyncreq =>  const async = require('async');


appRouter =>  const router = express.Router();


schemaMongoose =>  const mongoose = require('mongoose');
                   const Schema = mongoose.Schema;
                    
                    
                   const userSchema = new Schema({
                       name:String,
                       surname:String,$0
                   });
                    
                   const User = mongoose.model('User', userSchema);
                    
                   module.exports = User;


appListen =>  app.listen(port, () => console.log(`server running on ${port}`));


routerPost =>  router.post('/', async (req, res) => {
                   try{
                       $0
                   } catch(err){
                       console.log(err);
                   }
               });


mex =>  module.exports = $0;


err =>  (err, data) => {
            if(err) throw err
            $0
        }


appuse =>  app.use($0)


fsfunc =>  fs.$1(path.join(__dirname, './', '$0'))


server =>  const express = require("express");
           const app = express();
           require('dotenv').config();
           const port = process.env.port;
           const morgan = require("morgan");
           const mongoose = require('mongoose');
           
           
           const mongoURL = process.env.mongoURL;
           
           
           const MongoDB = () => {
               mongoose.connect(mongoURL, {
                   useNewUrlParser: true,
                   useUnifiedTopology: true,
                   useCreateIndex:true,
               }, () => console.log('mongoDB connected'))
           };
           MongoDB();
           
           
           
           app.use(morgan(`dev`));
           app.use(express.json())
           app.use(express.urlencoded({
               extended: false
           }));
           
           $0
           
           
           app.listen(port, () => console.log(`server is running on http://localhost:${port}`));


comparebcrypt =>  bcrypt.compare($1, $2, (err, data) => {
                      if (data) {
                          $0
                      }
                  });


hashbcrypt =>  bcrypt.hash($1, 10, (err, data) => {
                   $0
               });


rq =>  require('$0');


fsimport =>  import fs from 'fs';


pathimport =>  import path from 'path';


expressimport =>  import express from 'express';


morganimport =>  import morgan from 'morgan';


rimrafimport =>  import rimraf from 'rimraf';


removeimport =>  import remove from 'remove';


mongooseimport =>  import mongoose from 'mongoose';


mysqlimport =>  import mysql from 'mysql';


pgimport =>  import pg from 'pg';


puppeteerimport =>  import puppeteer from 'puppeteer';


nodemailerimport =>  import nodemailer from 'nodemailer';


appexpress =>  const app = express();


dotenv =>  dotenv.config();


bcryptimport =>  import bcrypt from 'bcrypt';


jsonwebtokenimport =>  import jwt from 'jsonwebtoken';


axiosimport =>  import axios from 'axios';


asyncimport =>  import async from 'async';


appRouter =>  const router = express.Router();


schemaMongoose =>  import mongoose from 'mongoose';
                   const Schema = mongoose.Schema;
                    
                    
                   const userSchema = new Schema({
                       name:String,
                       surname:String
                       $0
                   });
                    
                   export const User = mongoose.model('User', userSchema);


appListen =>  app.listen(port, () => console.log(`server running on http://localhost:port`));


routerRequest =>  router.$1('/$2', async (req, res):Promise<void> => {
                      try{
                          $0
                      } catch(err:any){
                          console.log(err);
                          res.send({message: 'error'})
                      }
                  });


mex =>  module.exports = $0;


err =>  (err:Error, data:$1):void => {
            if(err) throw err
            $0
        }


use =>  router.use('/$1', require('$0'))


fsfunc =>  fs.$1(path.join(__dirname, './', '$0'))


server =>  import dotenv from 'dotenv'
           dotenv.config();
           import express from 'express';
           import morgan from 'morgan';
           import cors from 'cors'
           import { graphqlHTTP } from 'express-graphql';
           import { client } from './model/postgres'
           import { schema } from './schema/schema';
           import { sequelize } from './model/postgres';
           const app = express();
           const port:string | number = process.env.PORT ?? 8888;
           
           
           sequelize.authenticate().then(res => console.log('DB connected')).catch(err => console.log(err));
           
           
           app.use(cors());
           app.use(morgan(`dev`));
           app.use(express.json());
           app.use(express.urlencoded({
              extended: false
           }));
           
           app.use('/graphql',graphqlHTTP({
               schema,
               graphiql:true
           }));
           $0
           
           
           app.listen(port, () => console.log(`server is runnig on http://localhost:$1`));


nodemailer =>  import nodemailer from 'nodemailer';
               
               const transporter = nodemailer.createTransport(
                   {
                       host: "smtp.mail.ru",
                       port: 465,
                       secure: true, // if 465 true else false
                       auth: {
                           user: "",
                           pass: "",
                       },
                   }
                   {
                       from: "",
                   },
               );
               
               export const mailer = (message:):void => {
                   transporter.sendMail(message, (err:Error):void => {
                       if (err) {
                           console.log('error to send email')
                       };
                   });
               };


router =>  import express from 'express';
           const router = express.Router();
                   
           router.post('/', async (req, res):Promise<void> => {
               try{
                   $0
               } catch(err:any){
                   console.log(err);
                   res.send({message:'error'})
               }
           });
           
           module.exports = router;


comparebcrypt =>  const $1 = await bcrypt.compare($0, );


hashbcrypt =>  const $1 = await bcrypt.hash($0, 10);


mysql =>  import mysql from 'mysql';
          
          
          export const conn = mysql.createConnection({
              host:'localhost',
              user:process.env.mysqlUser,
              database:process.env.mysqlDB,
              password:process.env.mysqlPassword
          })


mysqlconnection =>  conn.connect((err:Error):void => {
                        if(err) throw err;
                        console.log('mysqlDB connected');
                    });


mysqlquery =>  const $1 = await conn.query($0);


postgres =>  import { Client } from 'pg';
             
             export const client = new Client({
                 database:process.env.postgresDBname,
                 password:process.env.postgresDBpassword,
                 port:5432,
                 host:'localhost',
                 user:'postgres',
             });


postgresconnection =>  client.connect((err:Error):void => {
                           if(err) throw err;
                           console.log('postgresDB connected');
                       });


postgresquery =>  const $1 = await client.query($0);


sqconnect =>  import { Sequelize, DataTypes} from 'sequelize';
              
              
              export const sequelize = new Sequelize(process.env.DBNAME,process.env.DBUSERNAME,process.env.DBPASSWORD,{
                  host:'127.0.0.1',
                  dialect:'$0'
              });


sqdefine =>  export const $1 = sequelize.define('$2', {
                 $0
             });


sqtype =>  {
               type:DataTypes.$0
           },


sqfindOne =>  let data: any = await $1.findOne({ where: { $0 } });


squpdate =>  await $1.update({$0}, {where:{});


sqcreate =>  await $1.create({$0});


sqfindAll =>  const data = await $0.findAll();


sqdestroy =>  await $1.destroy({where:{ $0 }});


.send =>  res.send({message:"$1"})


imr =>  import React from 'react';


im =>  import $1 from '$0';


imp =>  import { $0 } from '$1';


impa =>  import React, { useState, useEffect, useMemo, memo, lazy, Suspense } from 'react';


imrout =>  import { Route, Switch, NavLink, Link } from 'react-router-dom';


imredux =>  import { useSelector, useDispatch } from 'react-redux';


imty =>  import PropTypes from 'prop-types';


ima =>  import axios from 'axios';


dispatch =>  const dispatch = useDispatch();


dis =>  dispatch($0);


useEffect =>  useEffect(() => {
                  $0
              }, [$1]);


useState =>  const [$1, set$1] = useState($0);


mo =>  memo($0);


useSelector =>  const $1 = useSelector(state => state.Reducer.$0);


useMemo =>  const $2 = useMemo(() => {
                return ($3) => {
                    $0
                }
            }, [$1]);


rjsx =>  return (
             <div>
                 $0
             </div>
         )


mapPrint =>  {$1.map((elem, i) => {
                 return (
                     <div key={elem.id}>
                         $0
                     </div>
                 )
             })}


map =>  $1.map(elem=> {
           if (elem.id === $1) {
               $0
           }
           return elem
        })


ex =>  export default $0;


epd =>  e.preventDefault();


onclick =>  onClick={$0}


onchange =>  onChange={$0}


rfc =>  import React, { useState, useEffect, useMemo, memo } from 'react';
        
        
        function $1($2) {
            return (
                <div>
                    $0
                </div>
            )
        };
        
        export default $1 = memo($1);


react =>  import React, { useState, useEffect, useMemo, memo} from 'react';
          import { Route, Switch, NavLink, Link } from 'react-router-dom';
          import { animateScroll as scroll } from 'react-scroll';
          import { useSelector, useDispatch } from 'react-redux';
          import { action } from '../../redux/actions/action';
          import PropTypes from 'prop-types';
          // import Media from '../../media'; 
          import './container1.scss';
          import axios from 'axios';
          import 'react-scroll';
          
          
          function $1($2) {
          
              const dispatch = useDispatch();
              
              useEffect(() => {
                      
              }, []);
            
              const [state, setState] = useState('');
          
              const redux = useSelector(state => state.Reducer);
              
              return (
                  <>
                      <section className=''>
                          $0
                      </section>
                  </>
              )
          }
          
          $1.propTypes ={
              //state: PropTypes.array,
            
          }
          
          export default $1 = memo($1);


i =>  @include $1($0);


cl =>  console.log($0)


c =>  const $1 = $0;


car =>  const $1 = [$0];


cob =>  const $1 = {$0};


l =>  let $1 = $0;


lar =>  let $1 = [$0];


lob =>  let $1 = {$0};


if =>  if ($1) {
           $0
       };


ife =>  if ($1) {
            $2
        } else {
            $0
        };


ef =>  else if ($1) {
           $0
       };


sw =>  switch ($1) {
           case $2:
               $0
               break;
           default:
               console.log('error')
       };


cs =>  case $1:
           $0
           break;


for =>  for (let i = 0; i < $1; i++) {
            $0
        };


forin =>  for (const key in $1) {
              $0
          };


forof =>  for (const key of $1) {
              $0
          }


imr =>  import React from 'react';


im =>  import $1 from '$0';


imp =>  import { $0 } from '$1';


impa =>  import React, { useState, useEffect, useMemo, useRef, memo, FC, lazy, Suspense } from 'react';


imrout =>  import { Route, Switch, NavLink, Link } from 'react-router-dom';


imredux =>  import { useSelector, useDispatch } from 'react-redux';


imty =>  import PropTypes from 'prop-types';


ima =>  import axios, { AxiosResponse } from 'axios';


rfc =>  import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
        
        let $1:FC = () => {
            return (
                <div>
                    
                </div>
            )
        }
        
        
        export default $1;


react =>  import React, { useState, useEffect, useMemo, useRef, memo, FC, } from 'react';
          import { Route, Switch, NavLink, Link } from 'react-router-dom';
          import { animateScroll as scroll } from 'react-scroll';
          import { useSelector, useDispatch } from 'react-redux';
          // import Media from '../../media';
          import axios from 'axios';
          import 'react-scroll';
          //types
          import { Redux } from '../../types/types';
          
          const $1:FC = () => {
          
              const dispatch = useDispatch();
          
              useEffect(() => {
          
              }, []);
          
              const [state, setState] = useState('');
          
              const arr = useSelector((state:Redux) => state.Reducer.arr);
          
              return (
                  <>
                      <section className=''>
                          $0
                      </section>
                  </>
              )
          }
          
          export default memo($1);


rjsx =>  return (
             <div>
                 $0
             </div>
         )


useState =>  const [$1, set$1] = useState<$2>($0);


useEffect =>  useEffect(():void => {
                  $0
              }, [$1]);


mo =>  memo($0);


useSelector =>  const $1 = useSelector((state:Redux) => state.Reducer1.$0);


useMemo =>  const $2 = useMemo(() => {
                return ($3):$4 => {
                    $0
                }
            }, [$1]);


mapPrint =>  {$1.map((elem:$2, i:number):JSX.Element => {
                 return (
                     <div key={elem.id}>
                         $0
                     </div>
                 )
             })}


map =>  $1.map((elem:$2) => {
            if (elem.id === $1){
                $0
            }
            return elem
        })


epd =>  e.preventDefault();


onclick =>  onClick={$0}


onchange =>  onChange={$0}


dispatch =>  const dispatch = useDispatch();


dis =>  dispatch({type:'$1', payload:$0})


cln =>  className='$0'


tr =>  try {
           $0
       } catch(err) {
           console.log(err);
       }


trr =>  try {
            $0
        } catch(err) {
            return err;
        }


r =>  return $0;


ter =>  $1 ? $2: $0


sfcc =>  String.fromCharCode($0)


jsonstr =>  JSON.stringify($0, null, 2)


jsonparse =>  JSON.parse($0)


k =>  ...$0


cl =>  console.log($0)


if =>  if ($1) {
           $0
       };


ife =>  if ($1) {
            $2
        } else {
            $0
        };


ef =>  else if ($1) {
           $0
       };


sw =>  switch ($1) {
           case $2:
               $0
               break;
           default:
               console.log('error')
       };


swredux =>  switch (action.type) {
                case $2:
                    $0
                default:
                    return state
            };


cs =>  case $1:
           $0
           break;


csredux =>  case $1:
                return {
                    ...state,
                    $0
                };


for =>  for (let i:number = 0; i < $1; i++) {
            $0
        };


forin =>  for (const key in $1) {
              $0
          };


forof =>  for (const key of $1) {
              $0
          };


c =>  const $1: = $0;


cnum =>  const $1: number = $0;


cstr =>  const $1: string = '$0';


cbool =>  const $1: boolean = $0;


carr =>  const $1: $2[] = $0;


cob =>  const $1: $2 = {
            $0
        };


l =>  let $1: = $0;


lnum =>  let $1: number = $0;


lstr =>  let $1: string = '$0';


lbool =>  let $1 : boolean = $0;


larr =>  let $1: $2[] = $0;


lob =>  let $1: $2 = {
            $0
        };


int =>  interface $1{
            $0
        };


intexp =>  export interface $1{
               $0
           };


type =>  type $1 = $0;


typeexp =>  export type $1 = $0;


typeob =>  type $1 = {
               $0
           };


typeobexp =>  export type $1 = {
                  $0
              };


typearr =>  type $1 = $0[];


typearrexp =>  export type $1 = $0[];


lazy =>  const $1 = lazy(()=> import('$0'));


suspense =>  <Suspense fallback={<div>...Loading</div>}>
                 $0
             </Suspense>


fnnum =>  function $1($2):number {
              $0
              return 
          };


fnstr =>  function $1($2):string {
              $0
              return 
          };


fnbool =>  function $1($2):boolean {
               $0
               return 
           };


fnvoid =>  function $1($2):void {
               $0
           };


fnjsx =>  function $1($2):JSX.Element {
              return (
                  <Suspense>
                      $0
                  </Suspense>
              )
          };


fn =>  function $1($2):$3 {
           $0
       };


exp =>  export default $0;


n =>  number


s =>  string


indextsx =>  import React from 'react';
             import ReactDOM from 'react-dom';
             import rootReducer from './components/redux/store/store';
             import { BrowserRouter as Router } from 'react-router-dom';
             import thunkMiddleware from 'redux-thunk';
             import { Provider } from 'react-redux';
             import { createStore, applyMiddleware, compose } from 'redux';
             import App from './App';
             
             //const store=createStore(rootReducer);
             declare global {
                 interface Window {
                   -REDUX-DEVTOOLS-EXTENSION-COMPOSE-?: typeof compose;
                 }
             }
             
             const composeEnhancers = window.-REDUX-DEVTOOLS-EXTENSION-COMPOSE- || compose;
             const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));
             
             ReactDOM.render(
                 <React.StrictMode>
                     <Provider store={store}>
                         <Router>
                             <App />
                         </Router>
                     </Provider>
                 </React.StrictMode>,
                 document.getElementById('root'),
             );


cf =>  const $1 = ($2:): => {
           $0
       };


cfa =>  const $1 = async ($2:):Promise<any$3> => {
            $0
        };


cfl =>  const $1 = ($2:): => $0;


cfla =>  const $1 = async ($2:):Promise<any$3> => $0;


lineCallback =>  ($1:):any$2=> $0


lineCallbacka =>  async ($1:):Promise<any$2> => $0


callback =>  ($1:):=> {
                 $0
             }


callbacka =>  async ($1:):Promise<any$2> => {
                  $0
              }


p =>  Promise<$0>


pv =>  Promise<void>


post =>  let postToBack = await post('$1', $0);


promise =>  let promise = new Promise((res, rej) => {
                $0
            });


ex =>  export $0;


formData =>  const $0 = new FormData();


class =>  class $1 {
              $0
          };


eclass =>  class $1 extends $2 {
               $0
           };


cmethod =>  $1($2):any$3{
                $0
            };


cmethoda =>  $1($2):Promise<any$3> {
                 $0
             };


csm =>  static $1($2):any$3 {
            $0
        };


csma =>  static async $1($2):Promise<any$3> {
             $0
         };


static =>  static $0;


public =>  public $0;


readonly =>  readonly $0;


private =>  private $0;


protected =>  protected $0;


super =>  super($0);


constructor =>  constructor(
                    $0
                ){};


cthis =>  this.$0 = $0;


nr =>  new Error('$0');


mathrandom =>  Math.random();


mathfloor =>  Math.floor($0);


promisify =>  const promisify = (action) => {
                  return (fileName) => {
                      return new Promise((res, rej) => {
                          action(fileName, (err:Error, data:Buffer) => {
                              if (err) {
                                  return rej(err)
                              }
                              res(data)
                          })
                      });
                  }
              };
'
```
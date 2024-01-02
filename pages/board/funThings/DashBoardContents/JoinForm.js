import React, { useState } from "react"
import axios from 'axios';
import { Label } from "@components/ui/label"
import { Input } from "@components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@components/ui/select"
import { Textarea } from "@components/ui/textarea"
import { Button } from "@components/ui/button"
import { CardContent, Card } from "@components/ui/card"

export default function JoinForm() {

  const [loginId, setLoginId] = useState();
  const [loginPw, setLoginPw] = useState();
  const [nmUser, setNmUser] = useState();
  const [SVCode, setSVCode] = useState('000');
  const handleLoginId = (event) =>{
    setLoginId(event.target.value);
  }

  const handleLoginPw = (event) =>{
    setLoginPw(event.target.value);
  }

  const handleNmUser = (event) =>{
    setNmUser(event.target.value);
  }

  const sendJoin = async (event) => {
    event.preventDefault();
    console.log(process.env.NEXT_PUBLIC_REACT_APP_BACKURL+'sv-user : '+loginId+", "+loginPw);
    
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_REACT_APP_BACKURL+'sv-user', {
        SVCode : SVCode,
        loginId: loginId,
        loginPw: loginPw,
        nmUser: nmUser
      },{headers: {
        'Content-Type' : 'application/json'}, withCredentials: true
      });
      console.log('로그인 성공:', response.data);
      sessionStorage.setItem('loginId',response.data.loginId)
      console.log(sessionStorage.getItem('loginId'));
      window.location.href = '/board/funThings/DashBoard'
    } catch (error) {
      console.error('로그인 실패:', error);
    }
    // console.log(process.env.NEXT_PUBLIC_REACT_APP_BACKURL+'sv-user : '+loginId+", "+loginPw);
    // axios.get(process.env.NEXT_PUBLIC_REACT_APP_BACKURL+'sv-user/'+loginId)
    // .then(response => {
    //     setData(response.data);
    // })
    // .catch(error => {
    //     console.error('Error fetching data: ', error);
    // });

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className='bg-white'>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold mt-3">Join Me</h2>
              <p className="text-zinc-500 dark:text-zinc-400">
                Introduce to me yourSelf! for remember you.
              </p>
              <p className="text-zinc-500 dark:text-zinc-400">
                All Content premit EVERYONE.(Maybe..)
              </p>
              <p className="text-zinc-500 dark:text-zinc-400">
                BUT! if you join me, you have fun more!
              </p>
            </div>
            <div className="space-y-4">
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a className="text-red-500">* </a><Label htmlFor="first-name">ID</Label>
                  <Input id="first-name" placeholder="Enter your ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div> */}
              <div className="space-y-2">
                <a className="text-red-500">* </a>
                <Label htmlFor="email">ID</Label>
                <Input id="email" 
                    placeholder="Enter your ID" 
                    type="text" 
                    onChange={handleLoginId}/>
              </div>
              <div className="space-y-2">
                <a className="text-red-500">* </a>
                <Label htmlFor="email">Password</Label>
                <Input id="email" 
                    placeholder="Enter your Password" 
                    type="password" 
                    onChange={handleLoginPw}/>
              </div>
              <div className="space-y-2">
                <a className="text-red-500">* </a>
                <Label htmlFor="email">Nick Name</Label>
                <Input id="email" 
                    placeholder="Enter your Nick Name" 
                    type="text" 
                    onChange={handleNmUser}
                    />
              </div>
              {/* <div className="space-y-2">
                <Label>Pronoun</Label>
                <Select>
                  <SelectTrigger aria-label="Pronoun">
                    <SelectValue placeholder="Select your pronoun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pronouns</SelectLabel>
                      <SelectItem value="he/him">He/Him</SelectItem>
                      <SelectItem value="she/her">She/Her</SelectItem>
                      <SelectItem value="they/them">They/Them</SelectItem>
                      <SelectItem value="prefer not to say">Prefer not to say</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div> */}
              {/* <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div> */}
              <Button className="bg-gray-800 text-white" onClick={sendJoin}>
                Send message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

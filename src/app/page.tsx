"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input} from "@/components/ui/input"
import { InputFile } from '@/components/Bai2'
import { Slider } from "@/components/ui/slider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from '@/components/ui/label'


export default function page() {
  const [value,setValue]=useState(33)
  const change =(newValue:number)=>{
    setValue(newValue)

  }
  return (
    <div>
      <h1>Bai 1</h1>
      <Button style={{backgroundColor:'red', color:'white'}} variant="outline">Detructive</Button>
      <Button style={{backgroundColor:'bule', color:'white'}} variant="outline">Privemary</Button>
      <Button variant="outline">Secondary</Button>
      <Button style={{backgroundColor:'blue', color:'white'}} variant="outline">Size Langer</Button>
      <Button style={{backgroundColor:'blue', color:'white' ,position:'relative',height:30}} variant="outline">Size Small</Button>
      <h1>Bai 2</h1>
      <Input></Input>
      <InputFile></InputFile>
      <h1>Bai 3</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
                   <BreadcrumbLink href="/">Home</BreadcrumbLink>
           </BreadcrumbItem>
           <BreadcrumbSeparator />
              <BreadcrumbItem>
                   <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
           <BreadcrumbSeparator />
           <BreadcrumbItem>
                       <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

            <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">List</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  </BreadcrumbList>
</Breadcrumb>

      <h1>Bai 4</h1>
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Mon hoc" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Html</SelectItem>
    <SelectItem value="dark">Css</SelectItem>
    <SelectItem value="system">Java</SelectItem>
    <SelectItem value="dark">Next JS</SelectItem>
    <SelectItem value="system">CreatJs</SelectItem>
  </SelectContent>
  <h1>Bai 5</h1>
  <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
</Select>
<h1>Bai7</h1>
<Slider defaultValue={[33]} value={[value]} onValueChange={(newValue) => setValue(newValue[0])} max={100} step={1} />
  <p>Slider : {value}</p>
  <h2>Bai 8</h2>
  <div style={{border :' 3px solid black' , width:300, height:400 ,}}>
    <h1 className='text-3xl'>Creat a account</h1>
    <p>Enter you email below to creat your acount</p>
    <div style={{display:'flex' , flexDirection:'row' , gap:30}}>
    <Button>Github <img style={{position:'relative', width:30}} src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /></Button>
    <Button>Google <img style={{position:'relative', width:30}} src="https://th.bing.com/th/id/R.7e557f1c0864829c54c300d15bee69f4?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0" alt="" /></Button>
    </div>
    <br />
    <br />
    <div style={{display:'flex' , flexDirection:'row' , gap:10}}><div style={{backgroundColor:'black' , width:120 , height:1}}></div>Or<div style={{backgroundColor:'black' , width:140 , height:1}}></div></div>

    <br />
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="abc@gmail.com" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">PassWord</Label>
      <Input type="email" id="email" placeholder="Email" />
      <Button style={{backgroundColor:'black' , color:'white'}}> Submit</Button>
    </div>
    <br /><br />
    
  </div>








      

    </div>
  )
}

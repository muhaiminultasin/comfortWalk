"use client"
import React from 'react';
import {HeroUIProvider} from "@heroui/react";

export default function HeroProviderWrapper ({children} : {children:React.ReactNode}){
  return <HeroUIProvider>{children}</HeroUIProvider>
}



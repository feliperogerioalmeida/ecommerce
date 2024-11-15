"use client"

import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { signIn, useSession, signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Header = () => {

    const {data} = useSession()

    const {status} = useSession();

    const handleLoginClick = async() => {
        await signIn();
    }

    const handleLogOutClick = async() => {
        await signOut()
    }

    return (
        <Card className="flex justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>

                    {status == 'authenticated' && data?.user && (
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 py-4">
                                    <Avatar>
                                        <AvatarFallback>
                                        {data.user.name?.[0].toUpperCase()}
                                        </AvatarFallback>
                                        
                                        {data.user.image &&(
                                            
                                            <AvatarImage src={data.user.image}/>
                                        )}
                                    </Avatar>

                                <div className="flex-col flex">
                                        <p className="font-medium"> {data.user.name} </p>
                                        <p className="text-sm opacity-75">Boas compras!</p>
                                
                                    
                                </div>

                                </div>
                            <Separator/>
                        </div>
                        
                    )}
                    

                    <div className="mt-4 flex flex-col gap-2">
                        {status == 'unauthenticated' && (
                               <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2"> 
                               <LogInIcon size={16}/>    
                               Fazer Login
                           </Button>
                        )}

                        {status == 'authenticated' && (
                               <Button onClick={handleLogOutClick} variant="outline" className="w-full justify-start gap-2"> 
                               <LogOutIcon size={16}/>    
                               Fazer Logout
                           </Button>
                        )}
                        
                        <Button variant="outline" className="w-full justify-start gap-2"> 
                            <HomeIcon size={16}/>    
                            Início
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start gap-2"> 
                            <PercentIcon size={16}/>    
                            Ofertas
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start gap-2"> 
                            <ListOrderedIcon size={16}/>    
                            Catálogo
                        </Button>
                    
                    </div>

                </SheetContent>
            </Sheet>

            <h1 className="text-lg font-semibold"> 
                <span className="text-primary"> Orbi </span> Store 
            </h1>
            
            <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>

        </Card>
      );
}
 
export default Header;
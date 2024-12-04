import { Button } from "@/app/_components/ui/button";
import {LayoutDashboardIcon, ListOrderedIcon, PackageIcon, PackageSearchIcon } from "lucide-react";

const Sidebar = () => {
    return ( 
        <div className="flex flex-col min-w-[300px] bg-background border-r border-solid border-accent p-8 gap-8 items-center">
           
            <h1 className="text-lg font-semibold">
                <span className="text-primary">Orbi</span> Store
            </h1>

            <div className="flex flex-col gap-3 w-full">
                <Button variant="outline" className="justify-start w-full flex gap-2">
                    <LayoutDashboardIcon size={16}/>
                    Dashboard
                </Button>
                
                <Button variant="outline" className="justify-start w-full">
                    <PackageIcon size={16}/>
                    Produtos
                </Button>
                
                <Button variant="outline" className="justify-start w-full">
                    <ListOrderedIcon size={16} />
                    Categorias
                </Button>
                
                <Button variant="outline" className="justify-start w-full">
                    <PackageSearchIcon size={16}/>
                    Pedidos
                </Button>
            </div>
        </div>
     );
}
 
export default Sidebar;
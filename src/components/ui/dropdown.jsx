// src/components/ui/dropdown.jsx
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../../lib/utils"; // Adjust the path based on your folder structure

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = DropdownMenuPrimitive.Content;
const DropdownMenuItem = DropdownMenuPrimitive.Item;

function SimpleDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded">
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 bg-white border rounded shadow-lg">
        <DropdownMenuItem className="cursor-pointer p-2 rounded hover:bg-gray-200">
          Option 1
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer p-2 rounded hover:bg-gray-200">
          Option 2
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer p-2 rounded hover:bg-gray-200">
          Option 3
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SimpleDropdown;

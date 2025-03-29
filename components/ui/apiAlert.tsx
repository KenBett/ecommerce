// @\components\ui\apiAlert.tsx
"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Server } from "lucide-react";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}
const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], string> = {
  public: "Secondary",
  admin: "Destructive",
};
export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  return(
    <Alert>
      <Server className="h-4 w-4"/>
      <AlertTitle className="flex items-center gap-x-2">
        { title }
        
      </AlertTitle>
    </Alert>
  )
};

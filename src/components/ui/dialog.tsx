import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  open = false,
  onOpenChange,
  children,
}) => {
  if (!open) return null;

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={handleClose}></div>
      <div className="z-10 w-full max-w-md p-4 md:p-0">{children}</div>
    </div>
  );
};

const DialogContent: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-xl max-h-[90vh] overflow-auto p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

const DialogHeader: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

const DialogTitle: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <h2 className={cn("text-xl font-semibold text-gray-900", className)}>
      {children}
    </h2>
  );
};

const DialogDescription: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <p className={cn("text-sm text-gray-600 mt-1", className)}>{children}</p>
  );
};

const DialogFooter: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};

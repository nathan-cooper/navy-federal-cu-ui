import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export interface ComboboxValue {
    value: string;
    label: string;
}

export interface ComboboxProps {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    valueList: ComboboxValue[],
    useSearch?: boolean,
    buttonVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    buttonSize?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

export function Combobox({ value, setValue, valueList, useSearch, buttonVariant = "outline", buttonSize = "default", }: ComboboxProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={buttonVariant}
                    size={buttonSize}
                    role="combobox"
                    aria-expanded={open}
                    className="w-fit justify-between"
                >
                    {value
                        ? valueList.find((framework) => framework.value === value)?.label
                        : "Select an option..."}
                    <ChevronDown className="ml-2 h-8 w-8 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    {useSearch && <CommandInput placeholder="Search options..." />}
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {valueList.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

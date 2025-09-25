"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";


const formSchema = z.object({
    name: z.string().min(2).max(20),
    email: z.string().email({
        message: 'Invalid email format'
    }),
    message: z.string().optional()
})

export default function ContactMeSection() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">Name</FormLabel>
            <FormControl>
              <Input className="bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 h-10 sm:h-12 text-sm sm:text-base transition-colors duration-300" {...field} />
            </FormControl>
            <FormMessage className="text-xs sm:text-sm" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">Email</FormLabel>
            <FormControl>
              <Input className="bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 h-10 sm:h-12 text-sm sm:text-base transition-colors duration-300" {...field} />
            </FormControl>
            <FormMessage className="text-xs sm:text-sm" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">Message</FormLabel>
            <FormControl>
              <Textarea className="bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 h-24 sm:h-28 text-sm sm:text-base resize-none transition-colors duration-300" {...field} />
            </FormControl>
            <FormMessage className="text-xs sm:text-sm" />
          </FormItem>
        )}
      />
      <Button type="submit" className="h-10 sm:h-12 w-full text-sm sm:text-base">Submit</Button>
    </form>
  </Form>
  )
}

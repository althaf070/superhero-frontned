import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
}

function Testimonial({ quote, author, role, avatarSrc }: TestimonialCardProps) {
  // Generate initials for avatar fallback and unique background color
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Reveal animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="w-full max-w-[18rem] md:h-[380px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <Card className="shadow-lg bg-[#3762C6] rounded-lg w-full h-full flex flex-col justify-center items-center">
        <CardContent className="p-2">
          <QuoteIcon className="h-5 w-5 text-primary mb-4" />
          <blockquote
            className="italic text-slate-200 mb-4"
          >
            "{quote}"
          </blockquote>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4 p-2 mb-3">
          <Avatar className="w-[120px]">
            <AvatarImage src={avatarSrc} alt={`${author}'s avatar`} className="rounded-full w-full h-full object-contain" />
            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-gray-200">{role}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default Testimonial;

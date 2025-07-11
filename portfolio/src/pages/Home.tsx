import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export function Home() {
 return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background */}
    <StarBackground />
 </div>
}

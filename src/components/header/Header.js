import { Home } from "lucide-react";

export default function Header({ title, onBack }) {
    return (
        <header className="flex justify-between items-center px-4 py-3 bg-white shadow-md sticky top-0 z-10">
            {onBack ? (
                <button onClick={onBack} className="text-indigo-500 flex items-center gap-1 font-medium">
                    <Home className="w-5 h-5" />
                    Retour
                </button>
            ) : (
                <div></div>
            )}
            <h1 className="text-xl font-bold text-gray-800 text-center flex-1">{title}</h1>
            <div className="w-16"></div>
        </header>
    );
}

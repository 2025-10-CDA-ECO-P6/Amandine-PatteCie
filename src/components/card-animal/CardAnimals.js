import { ChevronRight } from "lucide-react";

export default function AnimalCard({ animal, onClick }) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 cursor-pointer transition"
        >
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                    {animal.image}
                </div>
                <div>
                    <div className="font-medium text-gray-800">{animal.name}</div>
                    <div className="text-sm text-gray-500">
                        Propriétaire: {animal.owner}
                    </div>
                </div>
            </div>
        </div>
    );
}

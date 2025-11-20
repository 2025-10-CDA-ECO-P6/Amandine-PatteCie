export default function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-medium text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition ${className}`}
        >
            {children}
        </button>
    );
}
